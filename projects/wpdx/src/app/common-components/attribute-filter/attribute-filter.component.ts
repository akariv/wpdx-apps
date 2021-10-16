import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StateService } from '../state.service';

@Component({
  selector: 'app-attribute-filter',
  templateUrl: './attribute-filter.component.html',
  styleUrls: ['./attribute-filter.component.less']
})
export class AttributeFilterComponent implements OnInit {

  changed = new EventEmitter<any>();

  sourceOptions = [
    'Well',
    'Spring',
    'Rainwater Harvesting',
    'Piped Water',
    'Sand or Sub-surface Dam',
    'Delivered Water',
    'Surface Water',
    'Packaged Water',
  ];
  techOptions = [
    'Hand Pump',
    'Mechanized Pump',
    'Tapstand',
    'Rope and Bucket',
  ];
  managementOptions = [
    'Community Management',
    'Direct Government Operation',
    'School Management',
    'Private Person',
    'Other Institutional Management',
    'Private Operator/Delegated Management',
    'No Management',
    'Health Care Facility',
    'Unknown',
    'Religious Institution'
  ];


  constructor(private state: StateService) {
  }

  set source(value: string) {
    if (value) {
      this.state.setProp('source', value);
    } else {
      this.state.removeProp('source');
    }
    this.sendState();
  }

  get source() {
    return this.state.getProp('source') || null;
  }

  set tech(value: string) {
    if (value) {
      this.state.setProp('tech', value);
    } else {
      this.state.removeProp('tech');
    }
    this.sendState();
  }

  get tech() {
    return this.state.getProp('tech') || null;
  }

  set management(value: string) {
    if (value) {
      this.state.setProp('management', value);
    } else {
      this.state.removeProp('management');
    }
    this.sendState();
  }

  get management() {
    return this.state.getProp('management') || null;
  }

  ngOnInit(): void {
  }

  sendState() {
    const state = {
      tech: this.tech,
      source: this.source,
      management: this.management,
    };
    this.changed.next(state);
  }

  nonempty(x) {
    return x !== undefined && x !== null && Object.keys(x).length > 0;
  }

  clearVisible() {
    return this.nonempty(this.tech) || this.nonempty(this.source) || this.nonempty(this.management);
  }

  clear() {
    this.source = null;
    this.tech = null;
    this.management = null;
  }

}