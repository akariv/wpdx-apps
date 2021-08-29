import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

import { LayoutService } from '../layout.service';
@Component({
  selector: 'app-data-robot',
  templateUrl: './data-robot.component.html',
  styleUrls: ['./data-robot.component.less']
})
export class DataRobotComponent implements OnInit {

  @ViewChild('popup') popup: ElementRef;

  LAYERS = [
    'datarobot-slim-last-known',
    'datarobot-slim-year-0',
    'datarobot-slim-year-1',
    'datarobot-slim-year-3',
  ];
  TIMEFRAME_OPTIONS = [
    {value: 'datarobot-slim-last-known', display: 'Last Known'},
    {value: 'datarobot-slim-year-0', display: 'As of Today'},
    {value: 'datarobot-slim-year-1', display: 'Today + 1'},
    {value: 'datarobot-slim-year-3', display: 'Today + 3'},
    {value: 'combined', display: 'Combined View'},
  ];
  _layer = '';
  _map: mapboxgl.Map;

  popupProperties: any = {};


  constructor(public layout: LayoutService) {
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
    for (const layer of this.LAYERS) {
      this.map.setFilter(layer, filter);
    }
    filter.push(['!=', ['get', 'photo_lnk'], '']);
    this.map.setFilter('datarobot-slim-photos', filter);
  }
}
