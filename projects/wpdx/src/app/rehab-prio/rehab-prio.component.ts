import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { DbService } from '../db.service';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  map: mapboxgl.Map = null;
  _popupProperties: any = {};
  bounds = new BehaviorSubject<mapboxgl.LngLatBounds>(null);
  top10: any[] = [];
  _all_waterpoints = false;
  _show_urban = false;
  circle_visible = false;
  sort_options = [
    {value: 'assigned_population desc', display: 'Sort by Served Pop.'},
    {value: 'criticality desc', display: 'Sort by Criticality'},
    {value: 'pressure desc', display: 'Sort by Pressure'},
  ];
  _sort_by = this.sort_options[0].value;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.bounds.pipe(
      debounceTime(2500),
      filter(b => b !== null),
      switchMap((bounds) => this.db.query(`
        select lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean, 
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
    const bounds = this.bounds.getValue();
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
    this.addCircle(value);
  }

  get popupProperties() {
    return this._popupProperties;
  }

  set all_waterpoints(value) {
    this._all_waterpoints = value;
    this.top10 = [];
    this.bounds.next(this.map.getBounds());
  }

  get all_waterpoints() {
    return this._all_waterpoints;
  }

  set show_urban(value) {
    this._show_urban = value;
    this.top10 = [];
    this.bounds.next(this.map.getBounds());
  }

  get show_urban() {
    return this._show_urban;
  }

  set sort_by(value) {
    this._sort_by = value;
    this.bounds.next(this.map.getBounds());
  }

  get sort_by() {
    return this._sort_by;
  }

  setMap(_map: mapboxgl.Map) {
    this.map = _map;
    this.map.setLayoutProperty('rehab-priority-criticallity-heatmap', 'visibility', 'visible');
    this.map.on('moveend', () => {
      this.onMove();
    });
    this.bounds.next(this.map.getBounds());
  }

  navigateTo(state) {
    this.map.fitBounds(state.bounds, {padding: 30, maxZoom: 12});
    const filter = this.map.getFilter('rehab-priority-circles').slice(0, 3);
    for (const _f of ['country_name', 'adm1', 'adm2', 'adm3']) {
      const f = 'clean_' + _f;
      if (state[_f]) {
        filter.push([
          '==', ['get', f], ['literal', state[_f]]
        ]);
      }
    }
    for (const layer of ['rehab-priority-circles', 'rehab-priority-text', 'all-waterpoints']) {
      this.map.setFilter(layer, filter);
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

  onMove() {
    const bounds = this.map.getBounds();
    this.bounds.next(bounds);
  }

}
