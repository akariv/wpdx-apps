import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  LAYERS = [
    'datarobot-slim-year-0',
    'datarobot-slim-year-1',
    'datarobot-slim-year-3',
  ]
  _layer = this.LAYERS[0];
  map: mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
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

}
