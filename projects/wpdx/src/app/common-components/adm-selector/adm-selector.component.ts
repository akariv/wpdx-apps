import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DbService } from '../../db.service';
import { StateService } from '../state.service';

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
  _adm4: any = {};
  adm4_options = [];

  constructor(private http: HttpClient, private db: DbService, private stateSvc: StateService) {
  }

  ngOnInit(): void {
    if (this.optionsUrl) {
      this.http.get(this.optionsUrl).subscribe((levels: any[]) => {
        this.countryNameOptions = levels;
      });
    } else {
      this.db.fetchAdmLevels().subscribe((results: any) => {
        this.processDBResults(results.rows);
      });
    }
  }

  processDBResults(items) {
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3'], 'clean_adm4');
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2'], 'clean_adm3');
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1'], 'clean_adm2');
    items = this.groupBy(items, ['clean_country_name'], 'clean_adm1');
    items.forEach((item) => item.value = item.clean_country_name);
    this.countryNameOptions = items;
    for (const l1 of this.countryNameOptions) {
      if (l1.value === this.stateSvc.props.country_name) {
        this._countryName = l1;
        this.adm1_options = l1.items || [];
        for (const l2 of this.adm1_options) {
          if (l2.value === this.stateSvc.props.adm1) {
            this._adm1 = l2;
            this.adm2_options = l2.items;
            for (const l3 of this.adm2_options) {
              if (l3.value === this.stateSvc.props.adm2) {
                this._adm2 = l3;
                this.adm3_options = l3.items;
                for (const l4 of this.adm3_options) {
                  if (l4.value === this.stateSvc.props.adm3) {
                    this._adm3 = l4;
                    this.adm4_options = l4.items;
                    for (const l5 of this.adm4_options) {
                      if (l5.value === this.stateSvc.props.adm4) {
                        this._adm4 = l5;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
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
    this.adm4 = {};
    this.adm4_options = value.items || [];
  }

  get adm3() {
    return this._adm3;
  }

  set adm4(value) {
    this._adm4 = value;
    this.sendState();
  }

  get adm4() {
    return this._adm4;
  }

  sendState() {
    const state = {
      country_name: this.country_name?.value,
      adm1: this.adm1?.value,
      adm2: this.adm2?.value,
      adm3: this.adm3?.value,
      adm4: this.adm4?.value,
      bounds: this.adm4.bounds || this.adm3.bounds || this.adm2.bounds || this.adm1.bounds || this.country_name.bounds,
    };
    this.state.next(state);
  }

  nonempty(x) {
    return x !== undefined && x !== null && Object.keys(x).length > 0;
  }

  clearVisible() {
    return this.nonempty(this.country_name) ||
            this.nonempty(this.adm1) ||
            this.nonempty(this.adm2) ||
            this.nonempty(this.adm3) ||
            this.nonempty(this.adm4);
  }

  clear() {
    this.country_name = {};
  }
}
