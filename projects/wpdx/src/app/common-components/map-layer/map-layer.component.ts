import * as mapboxgl from 'mapbox-gl';

import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map-layer',
  templateUrl: './map-layer.component.html',
  styleUrls: ['./map-layer.component.less']
})
export class MapLayerComponent implements OnChanges {

  ACCESS_TOKEN = 'pk.eyJ1Ijoid3BkeCIsImEiOiJja2ptdDljN3kwbHpsMnpxcHJvdDlmbTF1In0.vXVq027cJzHuy7Xa_tAkWQ';

  @Input() style: string;
  @Output() map = new EventEmitter<mapboxgl.Map>();

  theMap: mapboxgl.Map;
  mapboxgl: any = mapboxgl;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(): void {
    if (!this.theMap && this.style) {
      console.log('MAPBOX', this.style, this.mapboxgl);
      this.mapboxgl.accessToken = this.ACCESS_TOKEN;
      this.theMap = new mapboxgl.Map({
        container: this.el.nativeElement,
        style: this.style,
      });
      this.map.next(this.theMap);
    }
  }

}
