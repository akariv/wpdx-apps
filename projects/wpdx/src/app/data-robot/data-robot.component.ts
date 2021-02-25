import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { AirtableService } from '../airtable.service';

import * as marked from 'marked';
import { LayoutService } from '../layout.service';
import { FirstTimeService } from '../first-time.service';
@Component({
  selector: 'app-data-robot',
  templateUrl: './data-robot.component.html',
  styleUrls: ['./data-robot.component.less']
})
export class DataRobotComponent implements OnInit {

  LAYERS = [
    'datarobot-slim-last-known',
    'datarobot-slim-year-0',
    'datarobot-slim-year-1',
    'datarobot-slim-year-3',
  ];
  marked = marked;
  _layer = '';
  _map: mapboxgl.Map;
  panel = '';

  title = '';
  about = '';

  popupProperties: any = {};

  @ViewChild('popup') popup: ElementRef;

  constructor(private airtable: AirtableService, 
              public layout: LayoutService,
              private firstTime: FirstTimeService) {
    airtable.fetchWpdxTools().subscribe((mapping) => {
      const settings: any = mapping['status-predictions'];
      this.title = settings.Title;
      this.about = settings.About;
    });
    if (firstTime.firstTime('status-predictions')) {
      this.panel = 'about';
    }
  }

  ngOnInit(): void {
  }

  set map(value) {
    this._map = value;
    this._map.on('style.load', () => {
      this.layer = this.LAYERS[0];
      let offset = -18;
      for (const layer of this.LAYERS) {
        offset += 6;
        this._map.on('click', layer, (e) => {
          const coordinates = (e.features[0].geometry as any).coordinates.slice();
          this.popupProperties = e.features[0].properties;
           
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          setTimeout(() => {
            new mapboxgl.Popup({maxWidth: '600px', offset: [-offset, 0]})
                        .setLngLat(coordinates)
                        .setHTML((this.popup.nativeElement as HTMLElement).innerHTML)
                        .addTo(this._map);
          });
        }); 
        this._map.on('mouseenter', layer, () => {
          this._map.getCanvas().style.cursor = 'pointer';
        });
           
          // Change it back to a pointer when it leaves.
        this._map.on('mouseleave', layer, () => {
          this._map.getCanvas().style.cursor = '';
        });
      }
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
