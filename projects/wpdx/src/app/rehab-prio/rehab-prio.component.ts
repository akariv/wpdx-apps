import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  map: mapboxgl.Map = null;

  constructor() { }

  ngOnInit(): void {
    console.log('INIT?');
  }

  navigateTo(state) {
    this.map.fitBounds(state.bounds, {padding: 30, maxZoom: 12});
    // const filter: any[] = [
    //   'all'
    // ];
    // for (const f of ['country_name', 'adm1', 'adm2', 'adm3']) {
    //   if (state[f]) {
    //     filter.push([
    //       '==', ['get', f], ['literal', state[f]]
    //     ]);
    //   }
    // }
    // console.log('filter', filter);
    // for (const layer of this.LAYERS) {
    //   this.map.setFilter(layer, filter);
    // }
    // filter.push(['!=', ['get', 'photo_lnk'], '']);
    // this.map.setFilter('datarobot-slim-photos', filter);
  }

}
