import { Injectable } from '@angular/core';
import { StateService } from '../common-components/state.service';

import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class RpStateService {

  public map: mapboxgl.Map = null;

  top10: any[] = [];
  sort_options = [
    {value: 'assigned_population desc', display: 'Sort by Served Pop.'},
    {value: 'local_population desc', display: 'Sort by Local Pop.'},
    {value: 'criticality desc', display: 'Sort by Crucialness'},
    {value: 'pressure desc', display: 'Sort by Pressure'},
  ];

  constructor(public state: StateService) {
    this.state.defaultValue('all_waterpoints', true);
    this.state.defaultValue('show_population_density', true);
    this.state.defaultValue('show_landcover', true);
    this.state.defaultValue('adman_view', 'unserved');
    this.state.defaultValue('show_adman_pies', true);
    this.state.defaultValue('mode', 'rehab-prio');
    this.state.defaultValue('adman_level', 'best');
  }

  navigateToAdm(state) {
    for (const f of ['country_name', 'adm1', 'adm2', 'adm3', 'adm4']) {
      if (state[f]) {
        this.state.setProp(f, state[f]);
      } else {
        this.state.removeProp(f);
      }
    }
    if (state.bounds) {
      this.state.setBounds(new mapboxgl.LngLatBounds(state.bounds));
    }
  }

  navigateToAttrib(state) {
    for (const f of ['source', 'tech', 'management']) {
      if (state[f]) {
        this.state.setProp(f, state[f]);
      } else {
        this.state.removeProp(f);
      }
    }
  }

  set mode(value) {
    this.state.setProp('mode', value);
  }

  get mode() {
    return this.state.getProp('mode');
  }

  set all_waterpoints(value) {
    this.top10 = [];
    this.state.setProp('all_waterpoints', value);
  }

  get all_waterpoints() {
    return this.state.getProp('all_waterpoints');
  }

  get source_filter() {
    return this.state.getProp('source_filter');
  }

  set show_urban(value) {
    this.top10 = [];
    this.state.setProp('show_urban', value);
  }

  get show_urban() {
    return this.state.getProp('show_urban');
  }

  set sort_by(value) {
    this.top10 = [];
    this.state.setProp('sort_by', value);
  }

  get sort_by() {
    return this.state.getProp('sort_by') || this.sort_options[0].value;
  }

  set show_point_counts(value) {
    this.state.setProp('show_point_counts', value);
  }

  get show_point_counts() {
    return this.state.getProp('show_point_counts');
  }

  set adman_view(value) {
    this.state.setProp('adman_view', value);
  }

  get adman_view() {
    return this.state.getProp('adman_view');
  }

  set adman_level(value) {
    this.state.setProp('adman_level', value);
  }

  get adman_level() {
    return this.state.getProp('adman_level');
  }

  get adman_view_name() {
    const av = this.adman_view;
    if (av === 'served') {
      return '% of pop served or<br/>in urban areas';
    }
    if (av === 'unserved') {
      return '% of pop without access<br/>to func. water points';
    }
    if (av === 'uncharted') {
      return '% of pop with unknown access';
    }
    return '';
  }

  set show_adman_pies(value) {
    this.state.setProp('show_adman_pies', value);
  }

  get show_adman_pies() {
    return this.state.getProp('show_adman_pies');
  }

  set show_population_density(value) {
    this.state.setProp('show_population_density', value);
    for (const layer of this.state.populationLayers) {
      this.map.setLayoutProperty(layer, 'visibility', value ? 'visible' : 'none');
    }
  }

  get show_population_density() {
    return this.state.getProp('show_population_density');
  }

  set show_heatmap_population(value) {
    this.state.setProp('show_heatmap_population', value);
    if (value) {
      this.state.setProp('show_heatmap_criticality', false);
      this.all_waterpoints = true;
    }
  }

  get show_heatmap_population() {
    return this.state.getProp('show_heatmap_population');
  }

  set show_heatmap_criticality(value) {
    this.state.setProp('show_heatmap_criticality', value);
    if (value) {
      this.state.setProp('show_heatmap_population', false);
    }
  }

  get show_heatmap_criticality() {
    return this.state.getProp('show_heatmap_criticality');
  }

  set show_landcover(value) {
    this.state.setProp('show_landcover', value);
    this.map.getStyle().layers.forEach((layer) => {
      if (layer.id.indexOf('road-') === 0 || layer.id.indexOf('building') === 0) {
        this.map.setLayoutProperty(layer.id, 'visibility', value ? 'visible' : 'none');
      }
    });
  }

  get show_landcover() {
    return this.state.getProp('show_landcover');
  }
}
