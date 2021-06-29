import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
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
  popupProperties: any = {};
  bounds = new Subject<mapboxgl.LngLatBounds>();
  top10: any[] = [];

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.bounds.pipe(
      debounceTime(2500),
      switchMap((bounds) => this.db.query(`
        select lat_deg, lon_deg, rehab_priority, local_population, water_source_clean, water_tech_clean
        from wpdx_plus
        where is_latest and wpdx_id is not null and rehab_priority > 0 and not is_urban
        and lat_deg >= ${bounds.getSouth()}
        and lat_deg <= ${bounds.getNorth()}
        and lon_deg >= ${bounds.getWest()}
        and lon_deg <= ${bounds.getEast()}
        order by rehab_priority desc
        limit 10
      `)),
      map((results: any) => results.rows)
    ).subscribe((results) => {
      this.top10 = results;
    });
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
  }

  gotoPoint(point) {
    this.map.flyTo({
      center: [point.lon_deg, point.lat_deg],
      zoom: 14
    });
  }

  onMove() {
    const bounds = this.map.getBounds();
    this.bounds.next(bounds);
  }

}
