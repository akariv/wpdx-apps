import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { fromEvent, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  props: any = {};
  bounds: mapboxgl.LngLatBounds = null;
  userBounds = false;
  public changed = new ReplaySubject<{props: any; bounds: mapboxgl.LngLatBounds; userBounds: boolean}>(1);

  constructor(private loc: Location) {
    fromEvent(window, 'popstate').subscribe(() => {
      this.loadFromUrl();
    });
    this.loadFromUrl();
    // console.log('INIT', this.props, this.bounds);
  }

  loadFromUrl() {
    const params = new URLSearchParams(location.search);
    params.forEach((value, key) => {
      const parsed: any = JSON.parse(value);
      if (key !== 'bounds') {
        this.props[key] = parsed;
      } else {
        this.bounds = new mapboxgl.LngLatBounds(parsed);
      }
    });
    this.changed.next({props: this.props, bounds: this.bounds, userBounds: this.userBounds});
  }

  setBounds(value, userBounds?) {
    this.bounds = value;
    this.userBounds = userBounds;
    this.bump();
  }

  defaultValue(key, value) {
    if (!this.hasProp(key)) {
      this.setProp(key, value);
    }
  }

  hasProp(key) {
    return this.props.hasOwnProperty(key);
  }

  setProp(key, value) {
    this.props[key] = value;
    this.bump();
  }

  removeProp(key) {
    delete this.props[key];
    this.bump();
  }

  getProp(key) {
    return this.props[key];
  }

  bump() {
    const _state = Object.assign({}, this.props, {bounds: this.bounds.toArray()});
    const state = {};
    for (const key of Object.keys(_state)) {
      if (_state[key] !== undefined) {
        state[key] = JSON.stringify(_state[key]);
      }
    }
    const params = new URLSearchParams(state);
    // this.loc.replaceState(location.pathname, params.toString());
    history.pushState(null, null, location.pathname + '?' + params.toString());
    this.changed.next({props: this.props, bounds: this.bounds, userBounds: this.userBounds});
  }
}
