import * as mapboxgl from 'mapbox-gl';

import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { StateService } from '../state.service';

@Component({
  selector: 'app-map-layer',
  templateUrl: './map-layer.component.html',
  styleUrls: ['./map-layer.component.less']
})
export class MapLayerComponent implements OnChanges, AfterViewInit {

  @Input() style: string;
  @Input() interactionLayers: string[];
  @Output() map = new EventEmitter<mapboxgl.Map>();
  @Output() mapPopup = new EventEmitter<any>();

  @ViewChild('map') mapEl: ElementRef;

  created = new ReplaySubject<HTMLElement>(1);

  ACCESS_TOKEN = 'pk.eyJ1Ijoid3BkeCIsImEiOiJja2ptdDljN3kwbHpsMnpxcHJvdDlmbTF1In0.vXVq027cJzHuy7Xa_tAkWQ';
  COUNTRY_CODES = [
    'sle',
    'lbr',
    'uga',
    'eth',
    'gha',
    'bfa',
    'afg',
    'bgd',
    'hti',
    'ind',
    'ken',
    'mwi',
    'mli',
    'nga',
    'ssd',
    'tza',
    'zwe',
  ];

  _map: mapboxgl.Map;
  mapboxgl: any = mapboxgl;
  popupProperties: any = {};

  constructor(private el: ElementRef, private state: StateService) {
  }

  ngAfterViewInit() {
    this.created.next(this.mapEl.nativeElement as HTMLElement);
  }

  ngOnChanges(): void {
    if (!this._map && this.style) {
      this.created.pipe(first()).subscribe(
        (mapEl) => {
          console.log('MAPBOX', this.style, this.interactionLayers, this.mapboxgl);
          this.mapboxgl.accessToken = this.ACCESS_TOKEN;
          this._map = new mapboxgl.Map({
            container: mapEl,
            style: this.style,
          });
          this._map.on('style.load', () => {
            for (const layer of this.interactionLayers) {
              this._map.setLayoutProperty(layer, 'visibility', 'visible');
              this._map.on('click', layer, (e) => {
                this.popupProperties = e.features[0].properties;
                this.mapPopup.next(this.popupProperties);
              });
              this._map.on('mouseenter', layer, () => {
                this._map.getCanvas().style.cursor = 'pointer';
              });
              // Change it back to a pointer when it leaves.
              this._map.on('mouseleave', layer, () => {
                this._map.getCanvas().style.cursor = '';
              });
            }
            const populationLayers: string[] = [];
            for (const country of this.COUNTRY_CODES) {
              this._map.addSource(`wpdx.pop_${country}`, {
                type: 'raster', url: `mapbox://wpdx.pop_${country}`
              });
              const layerName = `population_${country}`;
              this._map.addLayer({
                id: layerName,
                type: 'raster',
                source: `wpdx.pop_${country}`,
                minzoom: 7,
                maxzoom: 22,
                paint: {
                  'raster-opacity': 0.3,
                  'raster-saturation': 0.99
                }
              }, 'land-structure-polygon');
              populationLayers.push(layerName);
            }
            this.state.populationLayers = populationLayers;
            const scale = new mapboxgl.ScaleControl({
              maxWidth: 250,
              unit: 'metric'
            });
            this._map.addControl(scale, 'top-right');
            this._map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'top-right');
            this.map.next(this._map);
          });
        }
      );
    }
  }

}
