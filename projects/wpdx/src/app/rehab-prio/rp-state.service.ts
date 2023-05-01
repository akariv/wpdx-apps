import { Injectable } from '@angular/core';
import { StateService } from '../common-components/state.service';

import * as mapboxgl from 'mapbox-gl';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RpStateService {

  public map: mapboxgl.Map = null;

  top10: any[] = [];
  sort_options = [
    {value: 'local_population desc', display: 'Sort by Local Pop.'},
    {value: 'assigned_population desc', display: 'Sort by Water Point Pop.'},
    {value: 'would_gain_access desc', display: 'Sort by Pop. who Would Gain Access'},
    {value: 'crucialness desc', display: 'Sort by Crucialness'},
    {value: 'pressure desc', display: 'Sort by Pressure'},
  ];

  constructor(public state: StateService, private title: Title) {
    this.state.defaultValue('all_waterpoints', true);
    this.state.defaultValue('any_waterpoints', true);
    this.state.defaultValue('show_population_density', false);
    this.state.defaultValue('show_landcover', false);
    this.state.defaultValue('show_adm_borders', false);
    this.state.defaultValue('show_point_counts', false);
    this.state.defaultValue('adman_view', 'unserved');
    this.state.defaultValue('show_adman_pies', true);
    this.state.defaultValue('show_adman_labels', true);
    this.state.defaultValue('mode', 'basic');
    this.state.defaultValue('adman_level', 'best');
    this.state.defaultValue('nc_limit', 0);
    this.state.defaultValue('show_adm', true);
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
    if (value === 'rehab-prio') {
      this.title.setTitle('WPdx Decision Support Tools - Rehab Priority Analysis');
    } else if (value === 'adman') {
      this.title.setTitle('WPdx Decision Support Tools - Administrative Region Analysis');
    } else if (value === 'staleness') {
      this.title.setTitle('WPdx Decision Support Tools - Data Staleness Analysis');
    } else if (value === 'risk-index') {
      this.title.setTitle('WPdx Decision Support Tools - Predicted Risk Index Analysis');
    } else if (value === 'new_constructions') {
      this.title.setTitle('WPdx Decision Support Tools - New Construction Analysis');
    } else {
      this.title.setTitle('WPdx Decision Support Tools');
    }
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

  set any_waterpoints(value) {
    this.state.setProp('any_waterpoints', value);
  }

  get any_waterpoints() {
    return this.state.getProp('any_waterpoints');
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

  set show_urban_waterpoints(value){
    this.state.setProp('show_urban_waterpoints', value);
  }

  get show_urban_waterpoints(){
    return this.state.getProp('show_urban_waterpoints');
  }

  set sort_by(value) {
    this.top10 = [];
    this.state.setProp('sort_by', value);
  }

  get sort_by() {
    return this.state.getProp('sort_by') || this.sort_options[3].value; // Sort by would gain access by default
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

  set nc_limit(value) {
    this.state.setProp('nc_limit', value);
  }

  get nc_limit() {
    return this.state.getProp('nc_limit');
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

  set show_adman_labels(value) {
    this.state.setProp('show_adman_labels', value);
  }

  get show_adman_labels() {
    return this.state.getProp('show_adman_labels');
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
  }

  get show_landcover() {
    return this.state.getProp('show_landcover');
  }
  set show_adm_borders(value) {
    this.state.setProp('show_adm_borders', value);
  }

  get show_adm_borders() {
    return this.state.getProp('show_adm_borders');
  }

  get show_adm() {
    return this.state.getProp('show_adm');
  }

  set show_adm(value) {
    this.state.setProp('show_adm', value);
  }
}
