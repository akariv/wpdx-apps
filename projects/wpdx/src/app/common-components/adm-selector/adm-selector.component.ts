import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adm-selector',
  templateUrl: './adm-selector.component.html',
  styleUrls: ['./adm-selector.component.less']
})
export class AdmSelectorComponent implements OnInit {

  @Input() optionsUrl = '';
  @Output() state = new EventEmitter<any>();

  _country_name: any = {};
  country_name_options = [];
  _adm1: any = {};
  adm1_options = [];
  _adm2: any = {};
  adm2_options = [];
  _adm3: any = {};
  adm3_options = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.optionsUrl) {
      this.http.get(this.optionsUrl).subscribe((levels: any[]) => {
        console.log('RESULT', levels);
        this.country_name_options = levels;
      });
    }
  }

  set country_name(value) {
    this._country_name = value;
    this.adm1 = {};
    this.adm1_options = value.items || [];
  }

  get country_name() {
    return this._country_name;
  }

  set adm1(value) {
    this._adm1 = value;
    this.adm2 = {};
    this.adm2_options = value.items || [];
  }

  get adm1() {
    return this._adm1;
  }

  set adm2(value) {
    this._adm2 = value;
    this.adm3 = {};
    this.adm3_options = value.items || [];
  }

  get adm2() {
    return this._adm2;
  }

  set adm3(value) {
    this._adm3 = value;
    this.sendState();
  }

  get adm3() {
    return this._adm3;
  }

  sendState() {
    const state = {
      country_name: this.country_name.value,
      adm1: this.adm1?.value,
      adm2: this.adm2?.value,
      adm3: this.adm3?.value,
      bounds: this.adm3.bounds || this.adm2.bounds || this.adm1.bounds || this.country_name.bounds
    };
    this.state.next(state);
  }
}
