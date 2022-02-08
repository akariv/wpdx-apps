import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import { Point } from 'geojson';

import { BehaviorSubject, forkJoin } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap, windowWhen } from 'rxjs/operators';
import { DbService } from '../db.service';
import { StateService } from '../common-components/common-components.module';
import { RpStateService } from './rp-state.service';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { RegionFilterDialogComponent } from './region-filter-dialog/region-filter-dialog.component';
import { AttributeFilterDialogComponent } from './attribute-filter-dialog/attribute-filter-dialog.component';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  mapFilters = {
    'all-waterpoints': []
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

  // Preview:
  preview = false;
  markers: any = {};
  markersOnScreen: any = {};
  admPopupSections: any[] = [];
  colorRange: string[] = [];
  legendOpen = true;
  showTable = false;

  constructor(private db: DbService, private state: StateService, public rpState: RpStateService, public dialog: MatDialog) {
    this.db.fetchAdmLevels().subscribe();
  }

  ngOnInit(): void {
    this.state.changed.pipe(
      debounceTime(2500),
      map((s) => s.bounds),
      filter(b => !!b),
      switchMap((bounds) => {
        console.log(this.queryUINC(bounds));
        console.log(bounds);
        const rehabPrio = this.db.query(this.queryUI(bounds));
        const newConstructions = this.db.query(this.queryUINC(bounds));
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
      } else {
        console.log(resultsNC);
        this.rpState.top10 = resultsNC;
      }
    });
  }

  downloadFields(query=false) {
    return [
      'report_date', 'wpdx_id', 'lat_deg', 'lon_deg', 'status_id', 'source', 'activity_id',
      'install_year', 'installer', 'rehab_year', 'rehabilitator', 'management_clean', 'facility_type',
      'pay', 'status', 'orig_lnk', 'photo_lnk', 'data_lnk',
      'converted', 'fecal_coliform_presence', 'fecal_coliform_value', 'subjective_quality', 'scheme_id', 'notes',
      'clean_country_id', 'clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3', 'clean_adm4',
      'status_id', 'assigned_population', 'local_population',
      query ?
        'case when rehab_priority is null then NULL else RANK() OVER (order by rehab_priority desc nulls last) end as rehab_priority'
        : 'rehab_priority',
      'water_source_clean', 'water_tech_clean', 'water_source_category', 'water_tech_category',
      'distance_to_primary','distance_to_secondary','distance_to_tertiary','distance_to_city', 'is_urban',
      query ?
        'criticality as "crucialness"'
        : 'crucialness',
      'pressure', 'usage_cap',
    ];
  }

  downloadUrl() {
    const bounds = this.state.bounds;
    return this.db.download(this.queryDL(bounds, this.downloadFields(true)), 'xlsx', 'rehab-priority-analysis', this.downloadFields());
  }

  downloadData() {
    window.open(this.downloadUrl(), '_blank');
  }

  downloadADMFields(query=false){
    const ret = [
      'CC', 'NAME_0', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_4',
      'total_pop', 'urban_pop', 'rural_pop', 'overcap_pop',
      query ? 
      	'"served_pop" as "rural_served_pop"'
        : 'rural_served_pop',
        query ?
        '"unserved_pop" as "rural_unserved_pop"'
        : 'rural_unserved_pop',
      query ?
        '"uncharted_pop" as "rural_uncharted_pop"'
        : 'rural_uncharted_pop',
      'pct_urban',
      query ?
        '"pct_served" as "pct_rural_served"'
        : 'pct_rural_served',
      query ?
        '"pct_unserved" as "pct_rural_unserved"'
        : 'pct_rural_unserved',
      query ?
        '"pct_uncharted" as "pct_rural_uncharted"'
        : 'pct_rural_uncharted',
      'non_func_waterpoints', 'func_waterpoints'
    ];
    return ret.map((f) => {
      if (f.indexOf(' as ') >= 0) {
        return f;
      } else {
        if (query) {
          return `"${f}"`;
        } else {
          return f;
        }
      }
    });
  }

  downloadADMUrl() {
    const bounds = this.state.bounds;
 
    //console.log('QQQ', this.queryDLADM(fields));
    return this.db.download(this.queryDLADM(this.downloadADMFields(true)), 'xlsx', 'adm-regions', this.downloadADMFields());
  }

  downloadADMData() {
    //console.log(this.queryDLADM(this.downloadADMFields(true)));
    window.open(this.downloadADMUrl(), '_blank');
  }

  downloadNCUrl() {
    const fields = [
      'NAME_0', 'NAME_1', 'NAME_2', 'NAME_3', 'NAME_4', 'population', 'lat_deg', 'lon_deg'
    ];
    console.log('QQQ', this.queryNC(fields));
    return this.db.download(this.queryNC(fields), 'xlsx', 'new_constructions', fields);
  }

  downloadNCData(){
    window.open(this.downloadNCUrl(), '_blank');
  }

  queryUI(bounds) {
    const sql = `
      select wpdx_id, lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean, 
            criticality, pressure
      from wpdx_plus
      where ${this.queryWhere(bounds)}
      order by ${this.rpState.sort_by} nulls last
      limit 15
    `;
    return sql;
  }

  queryUINC(bounds){
    const sql = `
    select "NAME_0", "NAME_1", "NAME_2", "NAME_4", population, lat_deg, lon_deg
    from new_constructions
    where ${this.queryNCWhere(bounds)}
    order by population DESC nulls last
    limit 15
    `
    return sql
  }

  queryDL(bounds, fields) {
    return `
      select ${fields.join(',')}
      from wpdx_plus
      where ${this.queryWhere(bounds)}
      order by ${this.rpState.sort_by} nulls last
    `;
  }

  queryDLADM(fields) {
    return `
      select ${fields.join(',')}
      from adm_analysis
      where ${this.queryADMWhere()}
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
      terms.push(`"NAME_0" = '${this.state.props.country_name}'`)
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
      'is_latest', 'wpdx_id is not null',
      'lat_deg >= ' + bounds.getSouth(),
      'lat_deg <= ' + bounds.getNorth(),
      'lon_deg >= ' + bounds.getWest(),
      'lon_deg <= ' + bounds.getEast(),
    ];
    if (!this.rpState.all_waterpoints) {
      terms.push('rehab_priority > 0');
    }
    if (!this.rpState.show_urban) {
      terms.push('not is_urban');
    }
    if (this.rpState.source_filter) {
      terms.push(`source='${this.rpState.source_filter}'`);
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
    //console.log('PPP', value);
    if (value.total_pop) {
      const baseQuery = `select
        sum(total_pop) as total_pop,
        sum(rural_pop) as rural_pop,
        sum(unserved_pop) as unserved_pop,
        sum(uncharted_pop) as uncharted_pop,
        sum(served_pop) as served_pop
        from adm_analysis
      `;
      const queries: string[] = [];
      if (value.NAME_1) {
        queries.push(`${baseQuery}
          where "NAME_0"='${this.fq(value.NAME_0)}'`);
      }
      if (value.NAME_2) {
        queries.push(`${baseQuery}
          where "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}'`);
      }
      if (value.NAME_3) {
        queries.push(`${baseQuery}
          where "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}' and 
                "NAME_2"='${this.fq(value.NAME_2)}'`);
      }
      if (value.NAME_4) {
        queries.push(`${baseQuery}
          where "NAME_0"='${this.fq(value.NAME_0)}' and "NAME_1"='${this.fq(value.NAME_1)}' and 
                "NAME_2"='${this.fq(value.NAME_2)}' and "NAME_3"='${this.fq(value.NAME_3)}'`);
      }
      //console.log(queries);
      forkJoin(queries.map(q => this.db.query(q))).subscribe(results => {
        this.admPopupSections = [value];
        console.log(value);
        if (queries.length > 3) {
          // value.level3 = results[2].rows[0];
          this.admPopupSections.push(
            Object.assign({title: 'ADM Level 3: ' + value.NAME_3}, results[3].rows[0])
          );
        }
        if (queries.length > 2) {
          // value.level2 = results[1].rows[0];
          this.admPopupSections.push(
            Object.assign({title: 'ADM Level 2: ' + value.NAME_2}, results[2].rows[0])
          );
        }
        if (queries.length > 1) {
          // value.level1 = results[0].rows[0];
          this.admPopupSections.push(
            Object.assign({title: 'ADM Level 1: ' + value.NAME_1}, results[1].rows[0])
          );
        }
        if (queries.length > 0) {
          // value.level1 = results[0].rows[0];
          this.admPopupSections.push(
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
    const query = `select * from wpdx_plus where wpdx_id='${value.wpdx_id}' and is_latest`;
    this._popupProperties = value;
    this.db.query(query).subscribe((results) => {
      if (results.rows && results.rows.length) {
        this._popupProperties = results.rows[0];
        console.log('POPUP PROPERTIES', value);
        this.addCircle(value);
      }
    });
  }

  get popupProperties() {
    return this._popupProperties;
  }

  update_heatmaps(props) {
    this.rpState.map.setLayoutProperty(
      'rehab-priority-popuplation-served', 'visibility',
      this.rpState.mode === 'rehab-prio' && props.show_heatmap_population ? 'visible' : 'none'
    );
    this.rpState.map.setLayoutProperty(
      'rehab-priority-criticallity-heatmap', 'visibility',
      this.rpState.mode === 'rehab-prio' && props.show_heatmap_criticality ? 'visible' : 'none'
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
      const features = this.rpState.show_adman_pies && this.rpState.mode === 'adman' ?
          this.rpState.map.queryRenderedFeatures(null, {layers: ['adm-analysis-labels']})
          : [];
      for (const feature of features) {
        const coords = (feature.geometry as Point).coordinates as mapboxgl.LngLatLike;
        const props: any = feature.properties;
        const id = props.NAME_0 + props.NAME_1 + props.NAME_2 + props.NAME_3 + props.NAME_4;

        let marker = this.markers[id];
        if (!marker) {
          const el = this.createDonutChart(props);
          el.addEventListener('click', (ev) => {
            this.popupProperties = props;
            this.popupProperties.coordinates = coords;
            this.popupProperties.x = this.popupProperties.coordinates[0];
            this.popupProperties.y = this.popupProperties.coordinates[1];
            ev.stopPropagation();
          });
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
    const counts = ['pct_urban', 'pct_served', 'pct_unserved', 'pct_uncharted'].map((k) => props[k] || 0);
    const clusterColors = ['#333333', '#185caf', '#8a0000', '#828282'];

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
    if (bounds && !userBounds) {
      this.rpState.map.fitBounds(bounds, {padding: 30, maxZoom: 18});
    }
    const filt = [];
    for (const _f of ['country_name', 'adm1', 'adm2', 'adm3', 'adm4']) {
      const f = 'clean_' + _f;
      if (props[_f]) {
        filt.push([
          '==', ['get', f], ['literal', props[_f]]
        ]);
      }
    }
    if (!props.show_urban) {
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
      filt.push(
        ['==', ['get', 'source'], ['literal', props.source_filter]]
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
    if (props.show_point_counts) {
      this.rpState.map.setLayoutProperty('rehab-priority-text', 'visibility', 'visible');
    } else {
      this.rpState.map.setLayoutProperty('rehab-priority-text', 'visibility', 'none');
    }
    if (props.any_waterpoints) {
      this.update_heatmaps(props);
      for (const layer of [
        'rehab-priority-text',
        'rehab-priority-popuplation-served',
        'rehab-priority-criticallity-heatmap',
        'all-waterpoints'
      ]) {
        const baseFilt = this.mapFilters[layer];
        const fullFilt = ['all', ...baseFilt, ...filt];
        if (JSON.stringify(this.rpState.map.getFilter(layer)) !== JSON.stringify(fullFilt)) {
          this.rpState.map.setFilter(layer, fullFilt);
        }
      }
      for (const layer of [
        'rehab-priority-highlights',
      ]) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', this.rpState.mode === 'rehab-prio' ? 'visible' : 'none');
      }
      this.rpState.map.setLayoutProperty('all-waterpoints', 'visibility', 'visible');
    } else {
      for (const layer of [
        'rehab-priority-text',
        'rehab-priority-popuplation-served',
        'rehab-priority-criticallity-heatmap',
        'all-waterpoints'
      ]) {
        this.rpState.map.setLayoutProperty(layer, 'visibility', 'none');
      }
    }

    // ADM Analysis Layer
    const admanView = props.mode === 'adman' ? props.adman_view : (props.mode === 'staleness' ? 'staleness' : '');
    const admanLevel= props.adman_level || 'best';
    let prop: any = [];
    let visibility = 'visible';
    this.colorRange = [];
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
      prop = ['-', ['literal', 1], ['/', ['get', 'staleness'], ['literal', 100]]];
      this.colorRange = ['#54278f', '#756bb1', '#9e9ac8', '#cbc9e2', '#f2f0f7']; // Purples
      // this.colorRange = ['#ffffcc', '#c2e699', '#78c679', '#31a354', '#006837'];
    } else {
      prop = null;
      visibility = 'none';
    }
    if (prop) {
      const interpolate = ['interpolate-hcl', ['linear'], prop,
        0, ['to-color', this.colorRange[0]],
        0.25, ['to-color', this.colorRange[1]],
        0.5, ['to-color', this.colorRange[2]],
        0.75, ['to-color', this.colorRange[3]],
        1, ['to-color', this.colorRange[4]]
      ];
      this.rpState.map.setPaintProperty('adm-analysis', 'fill-opacity', 0.5);
      this.rpState.map.setPaintProperty('adm-analysis', 'fill-color', interpolate);
      this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-color', interpolate);
      this.rpState.map.setPaintProperty('adm-analysis-borders', 'line-opacity', 0.25);
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
    console.log('ADMAN FILT', admanFilt);
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
      'nc-heatmap': [[
        '!=',
        ['get', 'clustered'],
        true
      ]]
    };
    for (const layer of ['nc-points', 'nc-labels', 'nc-heatmap-clustered', 'nc-heatmap']) {
      this.rpState.map.setLayoutProperty(layer, 'visibility', props.mode === 'new_constructions' ? 'visible' : 'none');
      this.rpState.map.setFilter(layer,
        ['all',
        ...admanFilt,
        ...newConstFilt[layer]
      ]);
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
    const _circle = turf.circle(_center, 1, {steps: 80, units: 'kilometers'} as any);
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

  openRegionFilterDialog() {
    this.dialog.open(RegionFilterDialogComponent);
  }

  openAttributeFilterDialog() {
    this.dialog.open(AttributeFilterDialogComponent);
  }
}
