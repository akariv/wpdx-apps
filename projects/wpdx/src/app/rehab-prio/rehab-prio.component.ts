import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import { Point } from 'geojson';

import { BehaviorSubject, forkJoin } from 'rxjs';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs/operators';
import { DbService } from '../db.service';
import { StateService } from '../common-components/common-components.module';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  map: mapboxgl.Map = null;
  mapFilters = {
    'all-waterpoints': []
  };
  _popupProperties: any = {};
  // bounds = new BehaviorSubject<mapboxgl.LngLatBounds>(null);
  top10: any[] = [];
  // _all_waterpoints = false;
  // _show_urban = false;
  // _show_point_counts = true;
  // _show_heatmap_criticality = true;
  // _show_heatmap_population = false;
  circle_visible = false;
  sort_options = [
    {value: 'assigned_population desc', display: 'Sort by Served Pop.'},
    {value: 'local_population desc', display: 'Sort by Local Pop.'},
    {value: 'criticality desc', display: 'Sort by Crucialness'},
    {value: 'pressure desc', display: 'Sort by Pressure'},
  ];
  filterConfiguration = [
    {id: 'adm', title: 'Filter By Region', icon: 'travel_explore'},
    {id: 'attributes', title: 'Filter By Attributes', icon: 'filter_alt'},
    {id: 'data-table', title: 'Top Water Points', icon: 'format_list_numbered'},
    {id: 'settings', title: 'View Settings', icon: 'settings'},
    {id: 'legend', title: 'Legend', icon: 'menu_book'},
    {id: 'download', title: 'Download Data', icon: 'file_download'},
  ];
  nav = '';

  // Preview:
  preview = false;
  markers: any = {};
  markersOnScreen: any = {};
  admPopupSections: any[] = [];

  constructor(private db: DbService, private state: StateService) {
    this.db.fetchAdmLevels().subscribe();
  }

  ngOnInit(): void {
    this.state.changed.pipe(
      debounceTime(2500),
      map((s) => s.bounds),
      filter(b => !!b),
      switchMap((bounds) => this.db.query(this.queryUI(bounds))),
      map((results: any) => results.rows)
    ).subscribe((results) => {
      this.top10 = results;
      if (this.map) {
        if (results.length) {
          this.map.setFilter('rehab-priority-highlights', [
            'all',
            [
              'match',
              ['get', 'wpdx_id'],
              [...new Set(this.top10.map(r => r.wpdx_id))],
              true,
              false
            ]
          ]);
        } else {
          this.map.setFilter('rehab-priority-highlights', [
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
    });
    this.state.defaultValue('all_waterpoints', true);
    this.state.defaultValue('show_population_density', true);
    this.state.defaultValue('show_landcover', true);
    if (this.preview) {
      this.state.defaultValue('adman_view', 'unserved');
    }
  }

  downloadFields(query=false) {
    return [
      'report_date', 'wpdx_id', 'lat_deg', 'lon_deg', 'status_id', 'source', 'activity_id',
      'install_year', 'installer', 'rehab_year', 'rehabilitator', 'management_clean', 'facility_type',
      'pay', 'status', 'orig_lnk', 'photo_lnk', 'data_lnk',
      'converted', 'fecal_coliform_presence', 'fecal_coliform_value', 'subjective_quality', 'scheme_id', 'notes',
      'clean_country_id', 'clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3',
      'status_id', 'assigned_population', 'local_population',
      query ?
        'case when rehab_priority is null then NULL else RANK() OVER (order by rehab_priority desc nulls last) end as rehab_priority'
        : 'rehab_priority',
      'water_source_clean', 'water_tech_clean', 'water_source_category', 'water_tech_category',
      'distance_to_primary','distance_to_secondary','distance_to_tertiary','distance_to_city', 'is_urban',
      'criticality', 'pressure', 'usage_cap',
    ];
  }

  downloadUrl() {
    const bounds = this.state.bounds;
    return this.db.download(this.queryDL(bounds, this.downloadFields(true)), 'xlsx', 'wpdx-rehab-prio-results', this.downloadFields());
  }

  queryUI(bounds) {
    const sql = `
      select wpdx_id, lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean, 
            criticality, pressure
      from wpdx_plus
      where ${this.queryWhere(bounds)}
      order by ${this.sort_by} nulls last
      limit 15
    `;
    return sql;
  }

  queryDL(bounds, fields) {
    return `
      select ${fields.join(',')}
      from wpdx_plus
      where ${this.queryWhere(bounds)}
      order by ${this.sort_by} nulls last
    `;
  }

  queryWhere(bounds) {
    const terms = [
      'is_latest', 'wpdx_id is not null',
      'lat_deg >= ' + bounds.getSouth(),
      'lat_deg <= ' + bounds.getNorth(),
      'lon_deg >= ' + bounds.getWest(),
      'lon_deg <= ' + bounds.getEast(),
    ];
    if (!this.all_waterpoints) {
      terms.push('rehab_priority > 0');
    }
    if (!this.show_urban) {
      terms.push('not is_urban');
    }
    if (this.source_filter) {
      terms.push(`source='${this.source_filter}'`);
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

  set popupProperties(value) {
    if (this.preview) {
      if (!value.wpdx_id) {
        const baseQuery = `select
          sum(total_pop) as total_pop,
          sum(rural_pop) as rural_pop,
          sum(unserved_pop) as unserved_pop,
          sum(uncharted_pop) as uncharted_pop
          from adm_analysis
        `;
        const queries: string[] = [];
        if (value.NAME_2) {
          queries.push(`${baseQuery}
            where "NAME_0"='${value.NAME_0}' and "NAME_1"='${value.NAME_1}'`);
        }
        if (value.NAME_3) {
          queries.push(`${baseQuery}
            where "NAME_0"='${value.NAME_0}' and "NAME_1"='${value.NAME_1}' and 
                  "NAME_2"='${value.NAME_2}'`);
        }
        if (value.NAME_4) {
          queries.push(`${baseQuery}
            where "NAME_0"='${value.NAME_0}' and "NAME_1"='${value.NAME_1}' and 
                  "NAME_2"='${value.NAME_2}' and "NAME_3"='${value.NAME_3}'`);
        }
        console.log('VALVAL', value, queries.length);
        forkJoin(queries.map(q => this.db.query(q))).subscribe(results => {
          console.log('QUEQUE RESULTS', results);
          this.admPopupSections = [value];
          if (queries.length > 2) {
            // value.level3 = results[2].rows[0];
            this.admPopupSections.push(
              Object.assign({title: 'ADM Level 3: ' + value.NAME_3}, results[2].rows[0])
            );
          }
          if (queries.length > 1) {
            // value.level2 = results[1].rows[0];
            this.admPopupSections.push(
              Object.assign({title: 'ADM Level 2: ' + value.NAME_2}, results[1].rows[0])
            );
          }
          if (queries.length > 0) {
            // value.level1 = results[0].rows[0];
            this.admPopupSections.push(
              Object.assign({title: 'ADM Level 1: ' + value.NAME_1}, results[0].rows[0])
            );
          }
        });
        this._popupProperties = value;
        return;
      }
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

  set all_waterpoints(value) {
    this.top10 = [];
    this.state.setProp('all_waterpoints', value);
  }

  get all_waterpoints() {
    return this.state.getProp('all_waterpoints');
  }

  get source_filter() {
    return this.state.getProp('source_filter');
  }

  set show_urban(value) {
    this.top10 = [];
    this.state.setProp('show_urban', value);
  }

  get show_urban() {
    return this.state.getProp('show_urban');
  }

  set sort_by(value) {
    this.top10 = [];
    this.state.setProp('sort_by', value);
  }

  get sort_by() {
    return this.state.getProp('sort_by') || this.sort_options[0].value;
  }

  set show_point_counts(value) {
    this.state.setProp('show_point_counts', value);
  }

  get show_point_counts() {
    return this.state.getProp('show_point_counts');
  }

  update_heatmaps(props) {
    this.map.setLayoutProperty('rehab-priority-popuplation-served', 'visibility', props.show_heatmap_population ? 'visible' : 'none');
    this.map.setLayoutProperty('rehab-priority-criticallity-heatmap', 'visibility', props.show_heatmap_criticality ? 'visible' : 'none');
  }

  set show_heatmap_criticality(value) {
    this.state.setProp('show_heatmap_criticality', value);
    if (value) {
      this.state.setProp('show_heatmap_population', false);
    }
  }

  get show_heatmap_criticality() {
    return this.state.getProp('show_heatmap_criticality');
  }

  set show_heatmap_population(value) {
    this.state.setProp('show_heatmap_population', value);
    if (value) {
      this.state.setProp('show_heatmap_criticality', false);
      this.all_waterpoints = true;
    }
  }

  get show_heatmap_population() {
    return this.state.getProp('show_heatmap_population');
  }

  set show_population_density(value) {
    this.state.setProp('show_population_density', value);
    for (const layer of this.state.populationLayers) {
      this.map.setLayoutProperty(layer, 'visibility', value ? 'visible' : 'none');
    }
  }

  get show_population_density() {
    return this.state.getProp('show_population_density');
  }

  set show_landcover(value) {
    this.state.setProp('show_landcover', value);
    this.map.getStyle().layers.forEach((layer) => {
      if (layer.id.indexOf('road-') === 0 || layer.id.indexOf('building') === 0) {
        this.map.setLayoutProperty(layer.id, 'visibility', value ? 'visible' : 'none');
      }
    });
  }

  get show_landcover() {
    return this.state.getProp('show_landcover');
  }

  set adman_view(value) {
    this.state.setProp('adman_view', value);
  }

  get adman_view() {
    return this.state.getProp('adman_view');
  }

  setMap(_map: mapboxgl.Map) {
    this.map = _map;
    this.map.on('moveend', (e) => {
      this.onMove(e);
    });
    for (const layer of [
      'rehab-priority-text', 'rehab-priority-popuplation-served', 'rehab-priority-criticallity-heatmap',
    ]) {
      const filt = this.map.getFilter(layer);
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
      this.state.setBounds(this.map.getBounds(), true);
    }
    if (this.preview) {
      console.log('SORUCES', (this.map.getLayer('adm-analysis-labels') as mapboxgl.SymbolLayer)['source-layer']);
      this.map.on('render', () => {
        const newMarkers: any = {};
        const features = this.map.queryRenderedFeatures(null, {layers: ['adm-analysis-labels']});
        for (const feature of features) {
          const coords = (feature.geometry as Point).coordinates as mapboxgl.LngLatLike;
          const props: any = feature.properties;
          const id = props.NAME_0 + props.NAME_1 + props.NAME_2 + props.NAME_3 + props.NAME_4;

          let marker = this.markers[id];
          if (!marker) {
            console.log('ADDING MARKER', id);
            const el = this.createDonutChart(props);
            el.addEventListener('click', (ev) => {
              this.popupProperties = props;
              ev.stopPropagation();
            });
            marker = this.markers[id] = new mapboxgl.Marker({
              element: el
            }).setLngLat(coords).setOffset([0, -30])
            .addTo(this.map);
          }
          newMarkers[id] = marker;
          if (!this.markersOnScreen[id]) {
            marker.addTo(this.map);
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
  }

  createDonutChart(props: any): HTMLElement {
    const offsets = [];
    const counts = ['pct_urban', 'pct_served', 'pct_unserved', 'pct_uncharted'].map((k) => props[k] || 0);
    const clusterColors = ['#828282', '#185caf', '#8a0000', '#333333'];

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
    html += `<circle cx="${r}" cy="${r}" r="${r0}" fill="white" />
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

  navigateToAdm(state) {
    for (const f of ['country_name', 'adm1', 'adm2', 'adm3']) {
      if (state[f]) {
        this.state.setProp(f, state[f]);
      } else {
        this.state.removeProp(f);
      }
    }
    if (state.bounds) {
      this.state.setBounds(new mapboxgl.LngLatBounds(state.bounds));
    }
  }

  navigateToAttrib(state) {
    for (const f of ['source', 'tech', 'management']) {
      if (state[f]) {
        this.state.setProp(f, state[f]);
      } else {
        this.state.removeProp(f);
      }
    }
  }

  updateState(props, bounds, userBounds) {
    if (bounds && !userBounds) {
      this.map.fitBounds(bounds, {padding: 30, maxZoom: 18});
    }
    const filt = [];
    for (const _f of ['country_name', 'adm1', 'adm2', 'adm3']) {
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
      this.map.setLayoutProperty('rehab-priority-text', 'visibility', 'visible');
    } else {
      this.map.setLayoutProperty('rehab-priority-text', 'visibility', 'none');
    }
    if (this.preview) {
      const admanView = props.adman_view;
      this.map.setLayoutProperty('adm-analysis', 'visibility', 'visible');
      let prop: any = [];
      let visibility = 'visible';
      if (admanView === 'served') {
        prop = ['+', ['get', 'pct_served'], ['get', 'pct_urban']];
      } else if (admanView === 'unserved') {
        prop = ['get', 'pct_unserved'];
      } else if (admanView === 'uncharted') {
        prop = ['get', 'pct_uncharted'];
      } else {
        prop = null;
        visibility = 'none';
      }
      if (prop) {
        const interpolate = ['interpolate', ['linear'], prop, 0, 0, 1, 0.5];
        this.map.setPaintProperty('adm-analysis', 'fill-opacity', interpolate);
      }
      this.map.setLayoutProperty('adm-analysis-labels', 'visibility', visibility);
      this.map.setLayoutProperty('adm-analysis', 'visibility', visibility);
    }
    this.update_heatmaps(props);
    for (const layer of [
      'rehab-priority-text',
      'rehab-priority-popuplation-served',
      'rehab-priority-criticallity-heatmap',
      'all-waterpoints'
    ]) {
      const baseFilt = this.mapFilters[layer];
      const fullFilt = ['all', ...baseFilt, ...filt];
      if (JSON.stringify(this.map.getFilter(layer)) !== JSON.stringify(fullFilt)) {
        this.map.setFilter(layer, fullFilt);
      }
    }
  }

  gotoPoint(point) {
    this.addCircle(point);
    this.map.flyTo({
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
    this.map.addSource('circleData', {
      type: 'geojson',
      data: _circle,
    });
    this.map.addLayer({
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
      this.map.removeLayer('circle-fill');
      this.map.removeSource('circleData');
      this.circle_visible = false;
    }
  }

  onMove(ev) {
    const bounds = this.map.getBounds();
    if (ev.originalEvent) {
      this.state.setBounds(bounds, true);
    }
  }

}
