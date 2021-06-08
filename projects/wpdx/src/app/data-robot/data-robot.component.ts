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

  @ViewChild('popup') popup: ElementRef;

  cLAYERS = [
    'datarobot-slim-last-known',
    'datarobot-slim-year-0',
    'datarobot-slim-year-1',
    'datarobot-slim-year-3',
  ];
  marked = marked;
  pLayer = '';
  pMap: mapboxgl.Map;
  panel = '';

  title = '';
  about = '';

  popupProperties: any = {};


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
    this.pMap = value;
    this.pMap.on('style.load', () => {
      this.layer = this.cLAYERS[0];
      let offset = -18;
      for (const layer of this.cLAYERS) {
        offset += 6;
        this.pMap.on('click', layer, (e) => {
          const coordinates = (e.features[0].geometry as any).coordinates.slice();
          this.popupProperties = e.features[0].properties;
          console.log('PROPERTIES', this.popupProperties);

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          setTimeout(() => {
            new mapboxgl.Popup({maxWidth: '1000px', offset: [-offset, 0]})
                        .setLngLat(coordinates)
                        .setHTML((this.popup.nativeElement as HTMLElement).innerHTML)
                        .addTo(this.pMap);
          });
        });
        this.pMap.on('mouseenter', layer, () => {
          this.pMap.getCanvas().style.cursor = 'pointer';
        });

          // Change it back to a pointer when it leaves.
        this.pMap.on('mouseleave', layer, () => {
          this.pMap.getCanvas().style.cursor = '';
        });
      }
    });
  }

  get map() {
    return this.pMap;
  }

  set layer(value) {
    this.pLayer = value;
    for (const layer of this.cLAYERS) {
      if (value === layer || value === 'combined') {
        this.map.setLayoutProperty(layer, 'visibility', 'visible');
      }
    }
    for (const layer of this.cLAYERS) {
      if (value !== layer && value !== 'combined') {
        this.map.setLayoutProperty(layer, 'visibility', 'none');
      }
    }
    console.log(this.map);
  }

  get layer() {
    return this.pLayer;
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
    for (const layer of this.cLAYERS) {
      this.map.setFilter(layer, filter);
    }
    filter.push(['!=', ['get', 'photo_lnk'], '']);
    this.map.setFilter('datarobot-slim-photos', filter);
  }
}
