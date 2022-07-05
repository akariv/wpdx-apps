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
  options = [];
  filteredOptions: Observable<string[]>;
  
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
    const filteredArray = this.options.filter(option => option.display.toLowerCase().includes(filterValue));
    const slicedArray = filteredArray.slice(0, 50);
    return slicedArray;
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
      this.options.push(option);
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
        this.options.push(option);
        for (const item2 of item1.items){
          const option = {
            'display': item2.value +', '+ item2.clean_adm1 + ', ' + item2.clean_country_name,
            'state': {
              country_name: item2.clean_country_name,
              adm1: item2.clean_adm1,
              adm2: item2.value,
              adm3: undefined,
              adm4: undefined,
              bounds: item2.bounds
            }
          };
          this.options.push(option);
          for (const item3 of item2.items){
            const option = {
              'display': item3.value + ', ' + item3.clean_adm2 +', '+ item3.clean_adm1 + ', ' + item3.clean_country_name,
              'state': {
                country_name: item3.clean_country_name,
                adm1: item3.clean_adm1,
                adm2: item3.clean_adm2,
                adm3: item3.value,
                adm4: undefined,
                bounds: item3.bounds
              }
            };
            this.options.push(option);
            for (const item4 of item3.items){
              const option = {
                'display': item4.value +', '+ item4.clean_adm3 + ', ' + item4.clean_adm2 +', '+ item4.clean_adm1 + ', ' + item4.clean_country_name,
                'state': {
                  country_name: item4.clean_country_name,
                  adm1: item4.clean_adm1,
                  adm2: item4.clean_adm2,
                  adm3: item4.clean_adm3,
                  adm4: item4.value,
                  bounds: item4.bounds
                }
              };
              this.options.push(option);
            }
          }
        }
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

  sendState(state) {
    this.state.next(state);
  }

  // nonempty(x) {
  //   return x !== undefined && x !== null && Object.keys(x).length > 0;
  // }

}
