import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from '../../db.service';

@Component({
  selector: 'app-adm-selector',
  templateUrl: './adm-selector.component.html',
  styleUrls: ['./adm-selector.component.less']
})
export class AdmSelectorComponent implements OnInit {

  @Input() optionsUrl = '';
  @Output() state = new EventEmitter<any>();

  _countryName: any = {};
  countryNameOptions = [];
  _adm1: any = {};
  adm1_options = [];
  _adm2: any = {};
  adm2_options = [];
  _adm3: any = {};
  adm3_options = [];

  query = `
    SELECT clean_country_name, clean_adm1, clean_adm2, coalesce(clean_adm3, '-') as clean_adm3,
           max(lat_deg) as lat_max, max(lon_deg) as lon_max, min(lat_deg) as lat_min, min(lon_deg) as lon_min
    FROM wpdx_plus
    GROUP BY 1,2,3,4
    ORDER BY 1,2,3,4
  `;

  constructor(private http: HttpClient, private db: DbService) { }

  ngOnInit(): void {
    if (this.optionsUrl) {
      this.http.get(this.optionsUrl).subscribe((levels: any[]) => {
        this.countryNameOptions = levels;
      });
    } else {
      this.db.query(this.query).subscribe((results: any) => {
        this.processDBResults(results.rows);
      });
    }
  }

  processDBResults(items) {
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2'], 'clean_adm3');
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1'], 'clean_adm2');
    items = this.groupBy(items, ['clean_country_name'], 'clean_adm1');
    items.forEach((item) => item.value = item.clean_country_name);
    this.countryNameOptions = items;
  }

  groupBy(items, keyFields, valueField) {
    const ret = {};
    for (const item of items) {
      const key = keyFields.map((f) => item[f]).join('/');
      if (!ret[key]) {
        ret[key] = [];
      }
      item.value = item[valueField];
      if (!item.bounds) {
        item.bounds = [
          item.lon_min,
          item.lat_min,
          item.lon_max,
          item.lat_max,
        ];
      }
      delete item[valueField];
      ret[key].push(item);
    }
    const newItems = [];
    Object.values(ret).forEach((_items) => {
      const item: any = {};
      item.items = _items;
      for (const f of keyFields) {
        item[f] = _items[0][f];
      }
      item.bounds = [
        Math.min(...item.items.map(x => x.bounds[0])),
        Math.min(...item.items.map(x => x.bounds[1])),
        Math.max(...item.items.map(x => x.bounds[2])),
        Math.max(...item.items.map(x => x.bounds[3])),
      ];
      newItems.push(item);
    });
    return newItems;
  }

  set country_name(value) {
    this._countryName = value;
    this.adm1 = {};
    this.adm1_options = value.items || [];
  }

  get country_name() {
    return this._countryName;
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

  clearVisible() {
    return this.country_name || this.adm1 || this.adm2 || this.adm3;
  }

  clear() {
    this.adm3 = {};
    this.adm2 = {};
    this.adm1 = {};
    this.country_name = {};
  }
}
