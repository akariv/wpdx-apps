import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { AirtableService } from '../airtable.service';

import * as marked from 'marked';
@Component({
  selector: 'app-data-robot',
  templateUrl: './data-robot.component.html',
  styleUrls: ['./data-robot.component.less']
})
export class DataRobotComponent implements OnInit {

  LAYERS = [
    'datarobot-slim-year-0',
    'datarobot-slim-year-1',
    'datarobot-slim-year-3',
  ];
  marked = marked;
  _layer = '';
  _map: mapboxgl.Map;

  title = '';

  constructor(private airtable: AirtableService) {
    airtable.fetchWpdxTools().subscribe((mapping) => {
      const settings: any = mapping['status-predictions'];
      this.title = settings.Title;
    });
  }

  ngOnInit(): void {
  }

  set map(value) {
    this._map = value;
    this._map.on('style.load', () => {
      this.layer = this.LAYERS[0];
    });
  }

  get map() {
    return this._map;
  }

  set layer(value) {
    this._layer = value;
    for (const layer of this.LAYERS) {
      if (value === layer || value === 'combined') {
        this.map.setLayoutProperty(layer, 'visibility', 'visible');
      }
    }
    for (const layer of this.LAYERS) {
      if (value !== layer && value !== 'combined') {
        this.map.setLayoutProperty(layer, 'visibility', 'none');
      }
    }
    console.log(this.map);
  }

  get layer() {
    return this._layer;
  }

  handleState(state) {
    this.map.fitBounds(state.bounds);
    const filter: any[] = [
      'all'
    ];
    for (const f of ['country_name', 'adm1', 'adm2', 'adm3']) {
      if (state[f]) {
        filter.push([
          '==', ['get', f], ['literal', state[f]]
        ]);
      }
  
    }
    console.log('filter', filter);
    for (const layer of this.LAYERS) {
      this.map.setFilter(layer, filter);
    }
  }
}
