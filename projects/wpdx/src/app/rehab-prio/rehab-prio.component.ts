import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

import { BehaviorSubject } from 'rxjs';
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
    this._popupProperties = value;
    this.addCircle(value);
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
    const _circle = turf.circle(_center, 1, {steps: 80, units: 'kilometers'});
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
