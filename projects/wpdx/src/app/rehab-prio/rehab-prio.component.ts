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
    {value: 'criticality desc', display: 'Sort by Criticality'},
    {value: 'pressure desc', display: 'Sort by Pressure'},
  ];
  _sort_by = this.sort_options[0].value;
  filterConfiguration = [
    {id: 'legend', title: 'Legend', icon: 'menu_book'},
    {id: 'adm', title: 'Filter By Region', icon: 'travel_explore'},
    {id: 'data-table', title: 'Top Waterpoints', icon: 'format_list_numbered'},
    {id: 'settings', title: 'View Settings', icon: 'settings'},
  ];
  nav = '';

  constructor(private db: DbService, private state: StateService) { }

  ngOnInit(): void {
    this.state.changed.pipe(
      debounceTime(2500),
      map((s) => s.bounds),
      filter(b => !!b),
      switchMap((bounds) => this.db.query(`
        select wpdx_id, lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean, 
               criticality, pressure
        from wpdx_plus
        where is_latest and wpdx_id is not null 
        and (rehab_priority > 0 or ${this.all_waterpoints? 'TRUE' : 'FALSE'}) 
        and ${this.show_urban ? 'TRUE' : 'not is_urban'}
        and lat_deg >= ${bounds.getSouth()}
        and lat_deg <= ${bounds.getNorth()}
        and lon_deg >= ${bounds.getWest()}
        and lon_deg <= ${bounds.getEast()}
        order by ${this._sort_by} nulls last
        limit 10
      `)),
      map((results: any) => results.rows)
    ).subscribe((results) => {
      this.top10 = results;
    });
  }

  downloadUrl() {
    const bounds = this.state.bounds;
    const fields = [
      'lat_deg', 'lon_deg', 'clean_country_id', 'clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3',
      'status_id', 'assigned_population', 'local_population', 'water_source_clean', 'water_tech_clean',
      'criticality', 'pressure', 'usage_cap', 'water_tech_clean', 'water_source_clean'
    ];
    return this.db.download(
      `select ${fields.join(',')}
       from wpdx_plus
       where is_latest and wpdx_id is not null 
       and (rehab_priority > 0 or ${this.all_waterpoints? 'TRUE' : 'FALSE'}) 
        and ${this.show_urban ? 'TRUE' : 'not is_urban'}
        and lat_deg >= ${bounds.getSouth()}
        and lat_deg <= ${bounds.getNorth()}
        and lon_deg >= ${bounds.getWest()}
        and lon_deg <= ${bounds.getEast()}
        order by ${this._sort_by} nulls last
        limit 1000
        `, 'xlsx', 'wpdx-rehab-prio-results', fields
    );
  }

  set popupProperties(value) {
    this._popupProperties = value;
    console.log('popup properties', value);
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
    this.state.setProp('sort_by', value);
  }

  get sort_by() {
    return this.state.getProp('sort_by');
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
    }
  }

  get show_heatmap_population() {
    return this.state.getProp('show_heatmap_population');
  }


  setMap(_map: mapboxgl.Map) {
    this.map = _map;
    this.map.on('moveend', (e) => {
      this.onMove(e);
    });
    for (const layer of [
      'rehab-priority-circles', 'rehab-priority-text', 'rehab-priority-popuplation-served', 'rehab-priority-criticallity-heatmap'
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

  navigateTo(state) {
    for (const f of ['country_name', 'adm1', 'adm2', 'adm3']) {
      this.state.setProp(f, state[f]);
    }
    this.state.setBounds(new mapboxgl.LngLatBounds(state.bounds));
  }

  updateState(props, bounds, userBounds) {
    if (bounds && !userBounds) {
      this.map.fitBounds(bounds, {padding: 30, maxZoom: 12});
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
        ['==', ['get', 'status_id'], ['literal', 'No']]
      );
    }
    if (props.show_point_counts) {
      this.map.setLayoutProperty('rehab-priority-text', 'visibility', 'visible');
    } else {
      this.map.setLayoutProperty('rehab-priority-text', 'visibility', 'none');
    }
    this.update_heatmaps(props);
    for (const layer of [
      'rehab-priority-circles',
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
    const _circle = turf.circle(_center, 2, {steps: 80, units: 'kilometers'});
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
