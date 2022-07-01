import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DbService } from '../../db.service';
import { StateService } from '../state.service';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { filter } from 'd3';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit{

  @Output() state = new EventEmitter<any>();

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;



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
  _bounds: any = {};

  options2 = [];

  constructor(private http: HttpClient, private db: DbService, private stateSvc: StateService) {
  }

  ngOnInit(): void {
    this.db.fetchAdmLevels().subscribe((rows: any[]) => {
      this.processDBResults(rows);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
    
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(option => option.display.toLowerCase().includes(filterValue))
  }
  
  processDBResults(items) {
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2', 'clean_adm3'], 'clean_adm4');
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1', 'clean_adm2'], 'clean_adm3');
    items = this.groupBy(items, ['clean_country_name', 'clean_adm1'], 'clean_adm2');
    items = this.groupBy(items, ['clean_country_name'], 'clean_adm1');
    for (const item of items){
      const option = {
        'display': item.clean_country_name,
        'state': {
          country_name: item.clean_country_name,
          adm1: undefined,
          adm2: undefined,
          adm3: undefined,
          adm4: undefined,
          bounds: item.bounds
        }
      };
      this.options2.push(option);
      for (const item1 of item.items){
        const option = {
          'display': item1.value + ', ' + item1.clean_country_name,
          'state': {
            country_name: item1.clean_country_name,
            adm1: item1.value,
            adm2: undefined,
            adm3: undefined,
            adm4: undefined,
            bounds: item1.bounds
          }
        };
        this.options2.push(option);
        // for (const item2 of item1.items){
        //   const option = {
        //     'display': item2.value +', '+ item2.clean_adm1 + ', ' + item2.clean_country_name,
        //     'state': {
        //       country_name: item2.clean_country_name,
        //       adm1: item2.clean_adm1,
        //       adm2: item2.value,
        //       adm3: undefined,
        //       adm4: undefined,
        //       bounds: item2.bounds
        //     }
        //   };
        //   this.options2.push(option);
        //   // for (const item3 of item2.items){
        //   //   const option = {
        //   //     'display': item3.value + ', ' + item3.clean_adm2 +', '+ item3.clean_adm1 + ', ' + item3.clean_country_name,
        //   //     'state': {
        //   //       country_name: item3.clean_country_name,
        //   //       adm1: item3.clean_adm1,
        //   //       adm2: item3.clean_adm2,
        //   //       adm3: item3.value,
        //   //       adm4: undefined,
        //   //       bounds: item3.bounds
        //   //     }
        //   //   };
        //   //   this.options2.push(option);
        //   //   // for (const item4 of item3.items){
        //   //   //   const option = {
        //   //   //     'display': item4.value +', '+ item4.clean_adm3 + ', ' + item4.clean_adm2 +', '+ item4.clean_adm1 + ', ' + item4.clean_country_name,
        //   //   //     'state': {
        //   //   //       country_name: item4.clean_country_name,
        //   //   //       adm1: item4.clean_adm1,
        //   //   //       adm2: item4.clean_adm2,
        //   //   //       adm3: item4.clean_adm3,
        //   //   //       adm4: item4.value,
        //   //   //       bounds: item4.bounds
        //   //   //     }
        //   //   //   };
        //   //   //   this.options2.push(option);
        //   //   // }
        //   // }
        // }
      }
    }
  }

  groupBy(items, keyFields, valueField) {
    const ret = {};
    for (const item_ of items) {
      const item = Object.assign({}, item_);
      const key = keyFields.map((f) => item[f]).join('/');
      if (!ret[key]) {
        ret[key] = [];
      }
      item.value = item[valueField];
      if (!item.value) {
        console.log('BAD VALUE FOR', valueField, item);
      }
      // if (!item.bounds) {
      //   item.bounds = [
      //     item.lon_min,
      //     item.lat_min,
      //     item.lon_max,
      //     item.lat_max,
      //   ];
      // }
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
    // console.log('SET ADM3', value, value.items);
    this.adm4 = {};
    this.adm4_options = value.items || [];
  }

  get adm3() {
    return this._adm3;
  }

  set adm4(value) {
    this._adm4 = value;
    // this.sendState();
  }

  get adm4() {
    return this._adm4;
  }

  set bounds(value) {
    this.sendState(value);
    
  }
  get bounds() {
    return this._bounds;
  }

  sendState(state) {
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
