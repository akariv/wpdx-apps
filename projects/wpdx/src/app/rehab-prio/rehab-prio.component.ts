import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

import { Subject } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { DbService } from '../db.service';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  map: mapboxgl.Map = null;
  _popupProperties: any = {};
  bounds = new Subject<mapboxgl.LngLatBounds>();
  top10: any[] = [];
  _all_waterpoints = false;
  circle_visible = false;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.bounds.pipe(
      debounceTime(2500),
      switchMap((bounds) => this.db.query(`
        select lat_deg, lon_deg, status_id, assigned_population, local_population, water_source_clean, water_tech_clean,
               case when local_population > 0 then 100 * assigned_population / local_population  else null end as criticallity
        from wpdx_plus
        where is_latest and wpdx_id is not null and (rehab_priority > 0 or ${this.all_waterpoints? 'TRUE' : 'FALSE'}) 
        and not is_urban
        and lat_deg >= ${bounds.getSouth()}
        and lat_deg <= ${bounds.getNorth()}
        and lon_deg >= ${bounds.getWest()}
        and lon_deg <= ${bounds.getEast()}
        order by assigned_population desc
        limit 10
      `)),
      map((results: any) => results.rows)
    ).subscribe((results) => {
      this.top10 = results;
    });
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

  setMap(_map: mapboxgl.Map) {
    this.map = _map;
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
