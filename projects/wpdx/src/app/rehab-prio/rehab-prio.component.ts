import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

import { BehaviorSubject, forkJoin, timer } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap, windowWhen } from 'rxjs/operators';
import { DbService } from '../db.service';
import { StateService } from '../common-components/common-components.module';
import { RpStateService } from './rp-state.service';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { RegionFilterDialogComponent } from './region-filter-dialog/region-filter-dialog.component';
import { AttributeFilterDialogComponent } from './attribute-filter-dialog/attribute-filter-dialog.component';
import { SourcesDialogComponent } from './sources-dialog/sources-dialog.component';
import { range } from 'd3';
import { ServerParamsService } from '../server-params.service';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  mapFilters = {
    'tfp-labels': [[
      '>=',
      ['get', 'would_gain_access'],
      100
    ]],
  };
  _popupProperties: any = {};
  circle_visible = false;
  filterConfiguration = [
    // {id: 'adm', title: 'Filter By Region', icon: 'travel_explore'},
    // {id: 'attributes', title: 'Filter By Attributes', icon: 'filter_alt'},
    // {id: 'data-table', title: 'Top Water Points', icon: 'format_list_numbered'},
    // {id: 'settings', title: 'View Settings', icon: 'settings'},
    // {id: 'legend', title: 'Legend', icon: 'menu_book'},
  ];
  nav = '';
  rehabPrioRadius = 1000;

  // Preview:
  preview = false;
  markers: any = {};
  markersOnScreen: any = {};
  admPopupSections: any[] = [];
  colorRange: string[] = [];
  borderColor: string = '';
  legendOpen = true;
  showTable = false;
  minPopNC: Number = null;

  constructor(private db: DbService, public state: StateService, public rpState: RpStateService, 
              public dialog: MatDialog, private params: ServerParamsService) {
  }

  ngOnInit(): void {
    this.state.changed.pipe(
      debounceTime(2500),
      map((s) => s.bounds),
      filter(b => !!b),
      switchMap((bounds) => {
        const rehabPrio = this.db.query(this.queryUI(bounds));
        let newConstructions;
        if (this.rpState.nc_limit !== 0){
          newConstructions = this.db.query(this.queryUINC(bounds, this.rpState.nc_limit));
        } else {
          newConstructions = this.db.query(this.queryUINC(bounds, 15));
        }
        this.rpState.top10 = [];
        return forkJoin([rehabPrio, newConstructions]);
      }),
      map(([resultsRehabPrio, resultsNC]: any) => [resultsRehabPrio.rows, resultsNC.rows])
    ).subscribe(([resultsRehabPrio, resultsNC]) => {
      if (this.rpState.mode === 'rehab-prio'){
        this.rpState.top10 = resultsRehabPrio;
        if (this.rpState.map) {
          if (resultsRehabPrio.length) {
            this.rpState.map.setFilter('rehab-priority-highlights', [
              'all',
              [
                'match',
                ['get', 'wpdx_id'],
                [...new Set(this.rpState.top10.map(r => r.wpdx_id))],
                true,
                false
              ]
            ]);
          } else {
            this.rpState.map.setFilter('rehab-priority-highlights', [
              'all',
              [
                'match',
                ['get', 'wpdx_id'],
                [''],
                true,
                false
              ]
            ]);
          }
        }
      } else if (this.rpState.mode === 'new_constructions'){
        if (resultsNC) {
          if (resultsNC.length > 0){
            this.rpState.top10 = resultsNC.slice(0, 15);
            this.minPopNC = resultsNC.at(-1).population;
            this.updateState(this.rpState.state.props, this.rpState.state.bounds, this.rpState.state.userBounds)
          }
        }
      }
    });
    this.params.params.subscribe((params: any) => {
      this.rehabPrioRadius = params['rehab-priority-radius'] || this.rehabPrioRadius;
    });
  }

  downloadFields(query=false) {
    return [
      'report_date', 'wpdx_id', 'lat_deg', 'lon_deg', 'status_id', 'status_clean', 'source', 'activity_id',
      'install_year', 'installer', 'rehab_year', 'rehabilitator', 'management_clean', 'facility_type',
      'pay_clean', 'status_clean', 'subjective_quality_clean', 'orig_lnk', 'photo_lnk', 'data_lnk',
      'converted', 'fecal_coliform_presence', 'fecal_coliform_value', 'scheme_id', 'notes',
      'clean_country_id', 'clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3', 'clean_adm4',
      'status_id',
      'water_source_clean', 'water_tech_clean', 'water_source_category', 'water_tech_category',
      'distance_to_primary','distance_to_secondary','distance_to_tertiary','distance_to_city', 'is_urban',
      query ? 'assigned_population as water_point_population' : 'water_point_population', 
      'local_population', 'would_gain_access',
      'crucialness', 'pressure', 'usage_cap',
      query ?
        'case when rehab_priority is null then NULL else RANK() OVER (order by rehab_priority desc nulls last) end as rehab_priority'
        : 'rehab_priority',
    ];
  }

  downloadUrl() {
    const bounds = this.state.bounds;
    return this.db.download(this.queryDL(bounds, this.downloadFields(true)), 'xlsx', 'rehab-priority-analysis', this.downloadFields());
  }

  downloadData() {
    this.sendGAEvent('download-rehab-prio');
    window.open(this.downloadUrl(), '_blank');
  }

  downloadADMFields(query=false){
    const ret = [
      'CC', 'NAME_0', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_4', 'adm_level',
      'total_pop', 'urban_pop', 'rural_pop', 'overcap_pop',
      'rural_pop_with_basic_access',
      'rural_pop_without_basic_access',
      'rural_pop_uncharted',
      'pct_rural_pop_with_basic_access',
      'pct_rural_pop_without_basic_access',
      'pct_rural_pop_uncharted',
      'non_func_waterpoints', 'func_waterpoints', 'unknown_func_waterpoints',
      'staleness as staleness_score', 'staleness_uncharted as data_quality_score', 'average_report_age_years'
    ];
    return ret.map((f) => {
      if (f.indexOf(' as ') >= 0) {
        if (query) {
          return f;
        } else {
          return f.split(' as ')[1];
        }
      } else {
        if (query) {
          return `"${f}"`;
        } else {
          return f;
        }
      }
    });
  }

  sendGAEvent(name) {
    if (window['gtag']) {
      const gtag = window['gtag'] as any;
      gtag('event', name, {
        debug_mode: true
      });
    }
  }

  downloadADMUrl() {
    return this.db.download(this.queryDLADM(this.downloadADMFields(true)), 'xlsx', 'adm-regions', this.downloadADMFields());
  }

  downloadADMData() {
    this.sendGAEvent('download-adm-analysis');
    window.open(this.downloadADMUrl(), '_blank');
  }

  downloadNCUrl() {
    const fields = [
      'NAME_0', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_4', 'population', 'lat_deg', 'lon_deg'
    ];
    return this.db.download(this.queryNC(fields), 'xlsx', 'service-gap-identification', fields);
  }

  downloadNCData(){
    this.sendGAEvent('download-new-construction');
    window.open(this.downloadNCUrl(), '_blank');
  }

  downloadRiskIndexUrl() {
    const fields = [
      'report_date', 'wpdx_id', 'lat_deg', 'lon_deg', 'status_id', 'status_clean', 'source', 'activity_id',
      'install_year', 'installer', 'rehab_year', 'rehabilitator', 'management_clean', 'facility_type',
      'pay_clean', 'status_clean', 'subjective_quality_clean', 'orig_lnk', 'photo_lnk', 'data_lnk',
      'converted', 'fecal_coliform_presence', 'fecal_coliform_value', 'scheme_id', 'notes',
      'clean_country_id', 'clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3', 'clean_adm4',
      'status_id', 'assigned_population', 'local_population',
      'predicted_status_0y', 'predicted_status_2y', 'predicted_category',
    ];
    const bounds = this.state.bounds;
    return this.db.download(this.queryDL(bounds, fields), 'xlsx', 'risk_index', fields);
  }

  downloadRiskIndexData(){
    this.sendGAEvent('download-risk-index');
    window.open(this.downloadRiskIndexUrl(), '_blank');
  }

  queryUI(bounds) {
    const sql = `
      select wpdx_id, lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean, 
            crucialness, pressure, would_gain_access
      from wpdx_enhanced
      where ${this.queryWhere(bounds)}
      order by ${this.rpState.sort_by} nulls last
      limit 15
    `;
    return sql;
  }

  queryUINC(bounds, limit){
    const sql = `
    select "NAME_0", "NAME_1", "NAME_2", "NAME_3", "NAME_4", population, lat_deg, lon_deg
    from new_constructions
    where ${this.queryNCWhere(bounds)}
    order by population DESC nulls last
    limit ${limit}
    `;
    return sql;
  }


  queryDL(bounds, fields) {
    return `
      select ${fields.join(',')}
      from wpdx_enhanced
      where ${this.queryWhere(bounds)}
      order by ${this.rpState.sort_by} nulls last
    `;
  }

  queryDLADM(fields) {
    const key = `coalesce("NAME_0", '') || ':' || coalesce("NAME_1", '') || ':' || coalesce("NAME_2", '') || ':' || coalesce("NAME_3", '') || ':' || coalesce("NAME_4", '')`;
    return `
      with x as (select ${key} as _key, min(adm_level) as _adm_level from adm_analysis where ${this.queryADMWhere()} group by 1)
      select ${fields.join(',')}
      from adm_analysis    
      inner join x on (${key}=_key and adm_level=_adm_level)
      order by 1,2,3,4,5,6 nulls last
    `;
  }

  queryNC(fields){
    return `
    select "${fields.join('","')}"
    from new_constructions
    where ${this.queryADMWhere()}
  `;
  }

  queryADMWhere() {
    const terms = [
      'true',
    ];
    if (this.state.props.country_name) {
      terms.push(`"NAME_0" = '${this.state.props.country_name}'`);
    }
    if (this.state.props.adm1) {
      terms.push(`"NAME_1" = '${this.state.props.adm1}'`);
    }
    if (this.state.props.adm2) {
      terms.push(`"NAME_2" = '${this.state.props.adm2}'`);
    }
    if (this.state.props.adm3) {
      terms.push(`"NAME_3" = '${this.state.props.adm3}'`);
    }
    if (this.state.props.adm4) {
      terms.push(`"NAME_4" = '${this.state.props.adm4}'`);
    }
    return terms.join(' and ');
  }

  queryNCWhere(bounds){
    const terms = [
      'lat_deg >= ' + bounds.getSouth(),
      'lat_deg <= ' + bounds.getNorth(),
      'lon_deg >= ' + bounds.getWest(),
      'lon_deg <= ' + bounds.getEast(),
    ];
    if (this.state.props.country_name){
      terms.push(`"NAME_0" = '${this.state.props.country_name}'`);
    }
    if (this.state.props.adm1) {
      terms.push(`"NAME_1" = '${this.state.props.adm1}'`);
    }
    if (this.state.props.adm2) {
      terms.push(`"NAME_2" = '${this.state.props.adm2}'`);
    }
    if (this.state.props.adm3) {
      terms.push(`"NAME_3" = '${this.state.props.adm3}'`);
    }
    if (this.state.props.adm4) {
      terms.push(`"NAME_4" = '${this.state.props.adm4}'`);
    }
    return terms.join(' and ');
  }

  queryWhere(bounds) {
    const terms = [
      // 'is_latest', 'wpdx_id is not null',
      'lat_deg >= ' + bounds.getSouth(),
      'lat_deg <= ' + bounds.getNorth(),
      'lon_deg >= ' + bounds.getWest(),
      'lon_deg <= ' + bounds.getEast(),
    ];
    if (!this.rpState.all_waterpoints) {
      terms.push('rehab_priority is not null');
    }
    if (!this.rpState.show_urban_waterpoints) {
      terms.push('not (is_urban is TRUE)');
    }
    if (this.rpState.source_filter) {
      const parts = this.rpState.source_filter.split(',').map(s => `'${s}'`).join(',');
      terms.push(`source in (${parts})`);
    }
    if (this.state.props.country_name) {
      terms.push(`clean_country_name = '${this.state.props.country_name}'`);
    }
    if (this.state.props.adm1) {
      terms.push(`clean_adm1 = '${this.state.props.adm1}'`);
    }
    if (this.state.props.adm2) {
      terms.push(`clean_adm2 = '${this.state.props.adm2}'`);
    }
    if (this.state.props.adm3) {
      terms.push(`clean_adm3 = '${this.state.props.adm3}'`);
    }
    if (this.state.props.adm4) {
      terms.push(`clean_adm4 = '${this.state.props.adm4}'`);
    }
    if (this.state.props.source) {
      terms.push(`water_source_category in ('${this.state.props.source.join('\',\'')}')`);
    }
    if (this.state.props.tech) {
      terms.push(`water_tech_category in ('${this.state.props.tech.join('\',\'')}')`);
    }
    if (this.state.props.management) {
      terms.push(`management_clean in ('${this.state.props.management.join('\',\'')}')`);
    }
    return terms.join(' and ');
  }

  fq(s) {
    return s.split(`'`).join(`''`);
  }

  set popupProperties(value) {
    console.log('PPP', value);
    if (value.total_pop) {
      const baseQuery = `select
        total_pop, rural_pop, unserved_pop, uncharted_pop, served_pop,
        func_waterpoints, non_func_waterpoints, unknown_func_waterpoints, 
        staleness_uncharted, staleness_count,
        non_func_new_waterpoints, maintenance_waterpoints,
        predicted_risk_index, staleness_count as count
        from adm_analysis
        where 
      `;
      const queries: string[] = [];
      if (value.NAME_0) {
        queries.push(`${baseQuery}
          adm_level='adm0' and "NAME_0"='${this.fq(value.NAME_0)}'`);
      }
      if (value.NAME_1) {
        queries.push(`${baseQuery}
          adm_level='adm1' and "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}'`);
      }
      if (value.NAME_2) {
        queries.push(`${baseQuery}
          adm_level='adm2' and 
          "NAME_0"='${this.fq(value.NAME_0)}' and 
          "NAME_1"='${this.fq(value.NAME_1)}' and 
          "NAME_2"='${this.fq(value.NAME_2)}'`);
      }
      if (value.NAME_3) {
        queries.push(`${baseQuery}
          adm_level='adm3' and 
          "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}' and 
          "NAME_2"='${this.fq(value.NAME_2)}' and "NAME_3"='${this.fq(value.NAME_3)}'`);
      }
      if (value.NAME_4) {
        queries.push(`${baseQuery}
          adm_level='adm4' and 
          "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}' and 
          "NAME_2"='${this.fq(value.NAME_2)}' and "NAME_3"='${this.fq(value.NAME_3)}' and
          "NAME_4"='${this.fq(value.NAME_4)}'`);
      }
      //console.log(queries);
      this.admPopupSections = [value];
      forkJoin(queries.map(q => this.db.query(q))).subscribe(results => {
        this.admPopupSections = [];
        if (queries.length > 4 && results[4].rows?.length > 0) {
          // value.level3 = results[2].rows[0];
          this.admPopupSections.unshift(
            Object.assign({title: 'ADM Level 4: ' + value.NAME_4}, results[4].rows[0])
          );
        }
        if (queries.length > 3 && results[3].rows?.length > 0) {
          // value.level3 = results[2].rows[0];
          this.admPopupSections.unshift(
            Object.assign({title: 'ADM Level 3: ' + value.NAME_3}, results[3].rows[0])
          );
        }
        if (queries.length > 2 && results[2].rows?.length > 0) {
          // value.level2 = results[1].rows[0];
          this.admPopupSections.unshift(
            Object.assign({title: 'ADM Level 2: ' + value.NAME_2}, results[2].rows[0])
          );
        }
        if (queries.length > 1 && results[1].rows?.length > 0) {
          // value.level1 = results[0].rows[0];
          this.admPopupSections.unshift(
            Object.assign({title: 'ADM Level 1: ' + value.NAME_1}, results[1].rows[0])
          );
        }
        if (queries.length > 0 && results[0].rows?.length > 0) {
          // value.level1 = results[0].rows[0];
          this.admPopupSections.unshift(
            Object.assign({title: 'ADM Level 0: ' + value.NAME_0}, results[0].rows[0])
          );
        }
      });

      this._popupProperties = value;
      return;
    }
    if (value.population){
      this._popupProperties = value;
      return;
    }
    const query = `select * from wpdx_enhanced where wpdx_id='${value.wpdx_id}'`;// and is_latest`;
    this._popupProperties = value;
    this.db.query(query).subscribe((results) => {
      if (results.rows && results.rows.length) {
        this._popupProperties = results.rows[0];
        const noPredictions = [];
        const yesPredictions = [];
        for (let i = 0; i < 10; i++){
          noPredictions.push(this.popupProperties['prediction_no_'+i+'y']);
          yesPredictions.push(this.popupProperties['prediction_yes_'+i+'y']);
        }
        if (noPredictions.every(x => x !== null) && yesPredictions.every(x => x !== null)) {
          this._popupProperties.yesPredictions = yesPredictions.map(x => x * 100);
          this._popupProperties.noPredictions = noPredictions.map(x => x * 100);
        } else {
          this._popupProperties.yesPredictions = null;
          this._popupProperties.noPredictions = null;
        }
        const positivePE = [];
        const negativePE = [];
        for (const pe of (this._popupProperties.prediction_explanations || [])) {
          const field = pe.f;
          let value = this._popupProperties[field];
          if (value === null) {
            value = '<empty>';
          } else {
            try {
              if (Number.isFinite(parseInt(value, 10))) {
                value = parseInt(value, 10);
                value = value.toLocaleString();
              }
            } catch (e) {
              try {
                if (Number.isFinite(parseFloat(value))) {
                  value = parseFloat(value).toFixed(2);
                }
              } catch (e1) {
              }
            }
          }
          if ((pe.s > 0) === (pe.l === this._popupProperties.predicted_status_0y)) {
            positivePE.push({
              field,
              value,
              weight: '+++'.slice(0, pe.q.length)
            });
          } else {
            negativePE.push({
              field,
              value,
              weight: '---'.slice(0, pe.q.length)
            });
          }
        }
        this._popupProperties.positivePE = positivePE;
        this._popupProperties.negativePE = negativePE;
        this.addCircle(value);
      }
    });
  }

  get popupProperties() {
    return this._popupProperties;
  }

  update_heatmaps(props) {
    this.rpState.map.setLayoutProperty(
      'rehab-priority-popuplation-served', 'visibility', 'none'
      // this.rpState.mode === 'rehab-prio' && props.show_heatmap_population ? 'visible' : 'none'
    );
    this.rpState.map.setLayoutProperty(
      'rehab-priority-criticallity-heatmap', 'visibility', 'none'
      // this.rpState.mode === 'rehab-prio' && props.show_heatmap_criticality ? 'visible' : 'none'
    );
  }

  setMap(_map: mapboxgl.Map) {
    this.rpState.map = _map;
    this.rpState.map.on('moveend', (e) => {
      this.onMove(e);
    });
    for (const layer of [
      'rehab-priority-text', 'rehab-priority-popuplation-served', 'rehab-priority-criticallity-heatmap',
    ]) {
      const filt = this.rpState.map.getFilter(layer);
      if (filt[0] === 'all') {
        this.mapFilters[layer] = filt.slice(1);
      } else {
        this.mapFilters[layer] = [filt];
      }
    }
    this.state.changed.pipe(
      debounceTime(500),
    ).subscribe((s) => {
      this.updateState(s.props, s.bounds, s.userBounds);
    });
    if (this.state.bounds === null) {
      this.state.setBounds(this.rpState.map.getBounds(), true);
    }
    // console.log('SORUCES', (this.rpState.map.getLayer('adm-analysis-labels') as mapboxgl.SymbolLayer)['source-layer']);
    this.rpState.map.on('render', () => {
      const newMarkers: any = {};
      const features: mapboxgl.MapboxGeoJSONFeature[] = this.rpState.show_adman_pies && this.rpState.mode === 'adman' ?
          this.rpState.map.queryRenderedFeatures(null, {layers: ['adm-analysis']})
          : [];
      for (const feature of features) {
        const props: any = feature.properties;
        const coords: [number, number] = props.center ? (JSON.parse(props.center) as any).coordinates : null;
        const id = props.NAME_0 + props.NAME_1 + props.NAME_2 + props.NAME_3 + props.NAME_4;

        if (!coords || props.pct_urban > 0.75) {
          continue;
        }
        let marker = this.markers[id];
        if (!marker) {
          const el = this.createDonutChart(props);
          // el.addEventListener('click', (ev) => {
          //   this.popupProperties = props;
          //   this.popupProperties.coordinates = coords;
          //   this.popupProperties.x = this.popupProperties.coordinates[0];
          //   this.popupProperties.y = this.popupProperties.coordinates[1];
          //   if (ev.stopPropagation) {
          //     ev.stopPropagation();
          //   }
          // });
          marker = this.markers[id] = new mapboxgl.Marker({
            element: el
          }).setLngLat(coords).setOffset([0, -30])
          .addTo(this.rpState.map);
        }
        newMarkers[id] = marker;
        if (!this.markersOnScreen[id]) {
          marker.addTo(this.rpState.map);
        }
      }
      // for every marker we've added previously, remove those that are no longer visible
      for (const id in this.markersOnScreen) {
        if (!newMarkers[id]) {
          this.markersOnScreen[id].remove();
        }
      }
      this.markersOnScreen = newMarkers;
    });
  }

  createDonutChart(props: any): HTMLElement {
    const offsets = [];
    const counts = ['pct_served', 'pct_unserved', 'pct_uncharted'].map((k) => props[k] || 0);
    const clusterColors = ['#185caf', '#8a0000', '#828282'];

    let total = 0;
    for (const count of counts) {
      offsets.push(total);
      total += count;
    }
    const fontSize = 16;
    const r = 20;
    const r0 = Math.round(r * 0.3);
    const w = r * 2;

    let html = `<div>
    <svg width="${w}" height="${w}" viewbox="0 0 ${w} ${w}" text-anchor="middle" 
         style="font: ${fontSize}px sans-serif; display: block; cursor:pointer">`;

    for (let i = 0; i < counts.length; i++) {
      if (counts[i]) {
        html += this.donutSegment(
          offsets[i] / total,
          (offsets[i] + counts[i]) / total,
          r,
          r0,
          clusterColors[i]
        );
      }
    }
    html += `<circle cx="${r}" cy="${r}" r="${r0}" fill="white" />`;
    html += `<circle cx="${r}" cy="${r}" r="${r}" fill="none" stroke="#ccc" stroke-width="1"/>`;
    html += `
      </svg>
      </div>`;
    const el = document.createElement('div');
    el.innerHTML = html;
    return el.firstChild as HTMLElement;
  }

  donutSegment(start: number, end: number, r: number, r0: number, color: string) {
    if (end - start === 1) {
      end -= 0.00001;
    }
    const a0 = 2 * Math.PI * (start - 0.25);
    const a1 = 2 * Math.PI * (end - 0.25);
    const x0 = Math.cos(a0);
    const y0 = Math.sin(a0);
    const x1 = Math.cos(a1);
    const y1 = Math.sin(a1);
    const largeArc = end - start > 0.5 ? 1 : 0;

    // draw an SVG path
    return `<path d="M ${r + r0 * x0} ${r + r0 * y0} L ${r + r * x0} ${
      r + r * y0
      } A ${r} ${r} 0 ${largeArc} 1 ${r + r * x1} ${r + r * y1} L ${
      r + r0 * x1
      } ${r + r0 * y1} A ${r0} ${r0} 0 ${largeArc} 0 ${r + r0 * x0} ${
      r + r0 * y0
      }" fill="${color}" />`;
  }

  updateState(props, bounds, userBounds) {
    // Fit map to bounds in state
    if (bounds && !userBounds) {
      this.rpState.map.fitBounds(bounds, {padding: 30, maxZoom: 18});
    }
    // Water point filter
    const filt = [];
    for (const _f of ['country_name', 'adm1', 'adm2', 'adm3', 'adm4']) {
      const f = 'clean_' + _f;
      if (props[_f]) {
        filt.push([
          '==', ['get', f], ['literal', props[_f]]
        ]);
      }
    }
    if (!props.show_urban_waterpoints) {
      filt.push(
        ['!', ['get', 'is_urban']]
      );
    }
    if (!props.all_waterpoints) {
      filt.push(
        ['!=', ['get', 'status_id'], ['literal', 'Yes']]
      );
    }
    if (props.source) {
      filt.push(['any', ...props.source.map((value) =>
        ['==', ['get', 'water_source_category'], ['literal', value]]
      )]);
    }
    if (props.source_filter) {
      let source = props.source_filter;
      let op = '==';
      if (source.indexOf(',') >= 0) {
        source = source.split(',');
        op = 'in';
      } else if (source[0] === '!') {
        source = source.slice(1);
        op = '!=';
      }
      filt.push(
        [op, ['get', 'source'], ['literal', source]]
      );
    }
    if (props.tech) {
      filt.push(['any', ...props.tech.map((value) =>
        ['==', ['get', 'water_tech_category'], ['literal', value]]
      )]);
    }
    if (props.management) {
      filt.push(['any', ...props.management.map((value) =>
        ['==', ['get', 'management_clean'], ['literal', value]]
      )]);
    }
    // Rehab Priority
    if (this.rpState.mode === 'rehab-prio') {
      for (const layer of [
        'rehab-priority-text',
        'rehab-priority-popuplation-served',
        'rehab-priority-criticallity-heatmap',
        'tfp-labels',
      ]) {
        const baseFilt = this.mapFilters[layer] || [];
        const fullFilt = ['all', ...baseFilt, ...filt];
        this.rpState.map.setFilter(layer, fullFilt);
      }
      if (props.show_point_counts) {
        this.rpState.map.setLayoutProperty('rehab-priority-text', 'visibility', 'visible');
        this.rpState.map.setLayoutProperty('tfp-labels', 'visibility', 'none');
      } else {
        this.rpState.map.setLayoutProperty('rehab-priority-text', 'visibility', 'none');
        this.rpState.map.setLayoutProperty('tfp-labels', 'visibility', 'visible');
      }
      for (const layer of [
        'rehab-priority-highlights',
        // 'tfp-points',
      ]) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'visible');
      }
      this.update_heatmaps(props);
    } else {
      for (const layer of [
        'rehab-priority-text',
        'rehab-priority-popuplation-served',
        'rehab-priority-criticallity-heatmap',
        'rehab-priority-highlights',
        // 'tfp-points',
        'tfp-labels',
      ]) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
      }
    }
    // Show water points
    if (props.any_waterpoints || this.rpState.mode === 'basic') {
      for (const layer of [
        'all-waterpoints', 
        'all-waterpoints-risk'
      ]) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'visible');
        const baseFilt = this.mapFilters[layer] || [];
        const fullFilt = ['all', ...baseFilt, ...filt];
        this.rpState.map.setFilter(layer, fullFilt);
      }
      this.rpState.map.setLayoutProperty('urban-areas', 'visibility', props.show_urban ? 'visible' : 'none');
    } else {
      for (const layer of [
        'all-waterpoints', 'urban-areas', 
        'all-waterpoints-risk'
      ]) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
      }
    }

    // ADM Analysis / Staleness / Risk index
    const admanView = 
        props.mode === 'adman' ? 
            props.adman_view : (
              props.mode === 'staleness' ? 
              'staleness' : (
                props.mode === 'risk-index' ?
                  'risk-index' : ''
              )
            );
    const admanLevel= props.adman_level || 'best';
    const admBorders = props.mode === 'adman' ? false : (props.mode === 'staleness' ? false : (this.rpState.show_adm_borders));
    let prop: any = [];
    let visibility = 'visible';
    this.colorRange = [];
    this.borderColor = null;
    if (admanView === 'served') {
      prop = ['+', ['get', 'pct_served'], ['get', 'pct_urban']];
      // this.colorRange = ['#edf8fb', '#b2e2e2', '#66c2a4', '#2ca25f', '#006d2c']; // Blue-Green
      this.colorRange = ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']; // Blues
    } else if (admanView === 'unserved') {
      prop = ['get', 'pct_unserved'];
      this.colorRange = ['#ffffd4', '#fed98e', '#fe9929', '#d95f0e', '#993404'];
    } else if (admanView === 'uncharted') {
      prop = ['get', 'pct_uncharted'];
      // this.colorRange = ['#f2f0f7', '#cbc9e2', '#9e9ac8', '#756bb1', '#54278f']; // Purples
      this.colorRange = ['#f7f7f7', '#cccccc', '#969696', '#636363', '#252525']; // Grays
    } else if (admanView === 'staleness') {
      prop = ['-', ['literal', 1], ['/', ['get', 'staleness_uncharted'], ['literal', 100]]];
      // prop = ['-', ['literal', 1], ['/', ['get', 'staleness'], ['literal', 100]]];
      this.colorRange = ['#54278f', '#756bb1', '#9e9ac8', '#cbc9e2', '#f2f0f7']; // Purples
      // this.colorRange = ['#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837'];
    } else if (admanView === 'risk-index' && props.show_adm) {
      prop = ['get', 'predicted_risk_index'];
      this.colorRange = ['#ffffff', '#FDC8B8', '#fc9272', '#ED5F4C', '#de2d26'];
      this.borderColor = '#ccc';
      // this.colorRange = ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15']; // Reds
    } else {
      prop = null;
      visibility = 'none';
    }
    this.borderColor = this.borderColor || this.colorRange[4];
    if (prop) {
      const interpolate = ['interpolate-hcl', ['linear'], prop,
        0, ['to-color', this.colorRange[0]],
        0.25, ['to-color', this.colorRange[1]],
        0.5, ['to-color', this.colorRange[2]],
        0.75, ['to-color', this.colorRange[3]],
        1, ['to-color', this.colorRange[4]]
      ];
      this.rpState.map.setPaintProperty('adm-analysis', 'fill-opacity', 0.7);
      this.rpState.map.setPaintProperty('adm-analysis', 'fill-color', interpolate);
      this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-color', ['to-color', this.borderColor]);
      this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-opacity', 1);
    }
    const admanFilt = [];
    for (const [_f, _ff] of [
      ['country_name', 'NAME_0'],
      ['adm1', 'NAME_1'],
      ['adm2', 'NAME_2'],
      ['adm3', 'NAME_3'],
      ['adm4', 'NAME_4'],
    ]) {
      if (props[_f]) {
        admanFilt.push([
          '==', ['get', _ff], ['literal', props[_f]]
        ]);
      }
    }
    for (const layer of ['adm-analysis', 'adm-analysis-borders', 'adm-analysis-labels']) {
      this.rpState.map.setLayoutProperty(layer, 'visibility', visibility);
      this.rpState.map.setFilter(layer, ['all',
        ['==', ['get', 'adm_level'], ['literal', admanLevel]],
        ...admanFilt
      ]);
    }
    this.rpState.map.setPaintProperty('adm-analysis-labels', 'text-opacity', this.rpState.show_adman_labels ? 1 : 0);
    this.rpState.map.setPaintProperty('adm-analysis-labels', 'icon-opacity', this.rpState.show_adman_labels ? 1 : 0);

    // New constructions

    if (props.mode === 'new_constructions') {
        let minConstructionFilt = []
        if (props.nc_limit !== 0){
          minConstructionFilt =  [[
            '>=',
            ['get', 'population'],
            this.minPopNC
          ]];
        }
        const newConstFilt = {
        'nc-points': [[
          '!=',
          ['get', 'clustered'],
          true
        ]],
        'nc-labels': [],
        'nc-heatmap-clustered': [[
          '==',
          ['get', 'clustered'],
          true
        ]],
        'nc-heatmap':
         [[
          '!=',
          ['get', 'clustered'],
          true
        ]]
      };
      
      
      for (const layer of ['nc-points', 'nc-labels', 'nc-heatmap-clustered', 'nc-heatmap']) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'visible');
        this.rpState.map.setFilter(layer,
          ['all',
          ...admanFilt,
          ...newConstFilt[layer],
          ...minConstructionFilt
        ]);
      }
      
    } else {
      for (const layer of ['nc-points', 'nc-labels', 'nc-heatmap-clustered', 'nc-heatmap']) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
      }
    }

    // Landcover
    this.rpState.map.getStyle().layers.forEach((layer) => {
      if (layer.id.indexOf('road-') === 0 || layer.id.indexOf('building') === 0) {
        this.rpState.map.setLayoutProperty(layer.id, 'visibility', this.rpState.show_landcover ? 'visible' : 'none');
      }
    });

    if (admBorders){
      this.rpState.map.setFilter('adm-analysis-borders', ['all',
      ... admanFilt]);
      this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-color','#5D3FD3');
      this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-opacity', 0.2);
      this.rpState.map.setLayoutProperty('adm-analysis-borders', 'visibility', 'visible');
    } else if (!admanView){
      this.rpState.map.setLayoutProperty('adm-analysis-borders', 'visibility', 'none');
    }

    // Risk index
    if (props.mode === 'risk-index') {
      this.rpState.map.setLayoutProperty('all-waterpoints-risk', 'visibility', 'visible');
    } else {
      this.rpState.map.setLayoutProperty('all-waterpoints-risk', 'visibility', 'none');
    }
  } 

  gotoPointFromId(id) {
    if (id && id.length === 12){
      const query = `select * from wpdx_enhanced where wpdx_id='${id}'`;
      this.db.query(query).subscribe((results) => {
        if (results.rows.length > 0){
          this.gotoPoint(results.rows[0]);
          timer(3000).subscribe(() => {
            this.popupProperties = results.rows[0];
          });
        }     
      });
    }  
  }

  gotoPoint(point) {
    this.addCircle(point);
    this.rpState.map.flyTo({
      center: [point.lon_deg, point.lat_deg],
      zoom: 14
    });
  }

  addCircle(point) {
    this.removeCircle();
    if (!point.lon_deg || !point.lat_deg) {
      return;
    }
    const _center = turf.point([point.lon_deg, point.lat_deg]);
    const _circle = turf.circle(_center, this.rehabPrioRadius / 1000, {steps: 80, units: 'kilometers'} as any);
    this.circle_visible = true;
    this.rpState.map.addSource('circleData', {
      type: 'geojson',
      data: _circle,
    });
    this.rpState.map.addLayer({
      id: 'circle-fill',
      type: 'fill',
      source: 'circleData',
      paint: {
        'fill-color': 'yellow',
        'fill-opacity': 0.2,
      },
    });
  }

  removeCircle() {
    if (this.circle_visible) {
      this.rpState.map.removeLayer('circle-fill');
      this.rpState.map.removeSource('circleData');
      this.circle_visible = false;
    }
  }

  onMove(ev) {
    const bounds = this.rpState.map.getBounds();
    if (ev.originalEvent) {
      this.state.setBounds(bounds, true);
    }
  }

  openSettingsDialog() {
    this.dialog.open(SettingsDialogComponent);
  }

  openSourcesDialog() {
    this.dialog.open(SourcesDialogComponent, {data: this.queryWhere(this.state.bounds)});
  }

  openRegionFilterDialog() {
    this.dialog.open(RegionFilterDialogComponent);
  }

  openAttributeFilterDialog() {
    this.dialog.open(AttributeFilterDialogComponent);
  }

  statusColor(field: string) {
    return this.popupProperties[field] === 'Yes' ? 'blue' : 'red';
  }
}
