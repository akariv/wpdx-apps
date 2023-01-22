import * as mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';

import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { StateService } from '../state.service';
import { environment } from '../../../environments/environment';

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
    'bgd',
    'hti',
    'ken',
    'mwi',
    'mli',
    'nga',
    'ssd',
    'tza',
    'zwe',
  ];
  NO_POP_COUNTRIES = [
    'bfa',
    'mli',
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
            center: [0, 0],
            zoom: 2
          });
          this._map.on('style.load', () => {
            console.log('ADDING EXTRA SOURCES', environment.suffix);
            if (environment.suffix) {
              this.addExtraSources(this._map, environment.suffix);
            }
            for (const layer of this.interactionLayers) {
              this._map.setLayoutProperty(layer, 'visibility', 'visible');
              this._map.on('click', layer, (e) => {
                this.popupProperties = e.features[0].properties;
                if (e.features[0].geometry.type === 'Point') {
                  this.popupProperties.coordinates = (e.features[0].geometry as GeoJSON.Point).coordinates.slice();
                } else if (e.features[0].geometry.type.indexOf('Polygon') > -1) {
                  const features = {
                    type: 'FeatureCollection',
                    features: e.features
                  };
                  const centerPoint = turf.center(features as GeoJSON.FeatureCollection<any>);
                  this.popupProperties.coordinates = centerPoint.geometry.coordinates.slice();
                }
                this.popupProperties.x = this.popupProperties.coordinates[0];
                this.popupProperties.y = this.popupProperties.coordinates[1];
                this.mapPopup.next(this.popupProperties);
                if (e.stopPropagation) {
                  e.stopPropagation();
                }
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
              console.log('ADDING SOURCE FOR', country);  
              if (this.NO_POP_COUNTRIES.indexOf(country) > -1) {
                continue;
              }
              const source_id = `wpdx.pop_${country}`;
              const mapbox_source_id = `mapbox://${source_id}`;
              this._map.addSource(source_id, {
                type: 'raster', url: mapbox_source_id
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
            this._map.addControl(scale, 'bottom-right');
            this._map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'bottom-right');
            this._map.dragRotate.disable();
            this.map.next(this._map);

          });
        }
      );
    }
  }

  setLayerSource(map: mapboxgl.Map, layerId: string, sourceLayer: string) {
    console.log('SETTING LAYER SOURCE', layerId, sourceLayer);
    const oldLayers = map.getStyle().layers || [];
    const layerIndex = oldLayers.findIndex(l => l.id === layerId);
    const layerDef: any = oldLayers[layerIndex];
    const before = oldLayers[layerIndex + 1] && oldLayers[layerIndex + 1].id;
    layerDef['source'] = sourceLayer;
    layerDef['source-layer'] = sourceLayer;
    map.removeLayer(layerId);
    map.addLayer(layerDef, before);
    console.log('SETTING LAYER SOURCE DONE');
  }

  addExtraSources(map: mapboxgl.Map, suffix: string) {
    map.addSource('adm-analysis-labels' + suffix, {
      type: 'vector',
      url: 'mapbox://wpdx.28fz36ff' + suffix
    });
    map.addSource('adm-analysis-multi' + suffix, {
      type: 'vector',
      url: 'mapbox://wpdx.4q46ibni' + suffix
    });
    map.addSource('new_constructions' + suffix, {
      type: 'vector',
      url: 'mapbox://wpdx.4x8b5vhp' + suffix
    });
    map.addSource('datasets' + suffix, {
      type: 'vector',
      url: 'mapbox://wpdx.wpdx_plus_latest' + suffix
    });
    for (const layer of ['adm-analysis-labels']) {
      this.setLayerSource(this._map, layer, 'adm-analysis-labels' + suffix);
    }
    for (const layer of ['adm-analysis-borders', 'adm-analysis']) {
      this.setLayerSource(this._map, layer, 'adm-analysis-multi' + suffix);
    }
    for (const layer of ['nc-points', 'nc-labels', 'nc-heatmap', 'nc-heatmap-clustered']) {
      this.setLayerSource(this._map, layer, 'new_constructions' + suffix);
    }
    for (const layer of ['rehab-priority-circles', 'rehab-priority-text', 'all-waterpoints-photos', 'all-waterpoints', 'all-waterpoints-risk',
                         'rehab-priority-highlights', 'rehab-priority-popuplation-served', 'rehab-priority-criticallity-heatmap']) {
      this.setLayerSource(this._map, layer, 'datasets' + suffix);
    }
  }
}
