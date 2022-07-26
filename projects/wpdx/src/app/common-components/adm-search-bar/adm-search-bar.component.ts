import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DbService } from '../../db.service';
import { StateService } from '../state.service';
import { HttpClient } from '@angular/common/http';
import {FormControl} from '@angular/forms';
import {forkJoin, Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { filter } from 'd3';

@Component({
  selector: 'app-adm-search-bar',
  templateUrl: './adm-search-bar.component.html',
  styleUrls: ['./adm-search-bar.component.less']
})
export class AdmSearchBarComponent implements OnInit{

  @Output() state = new EventEmitter<any>();

  searchBarControlForm = new FormControl('');
  options = [];
  filteredOptions: Observable<string[]>;
  
  constructor(private db: DbService) {
  }

  ngOnInit(): void {
    forkJoin([
      this.db.fetchByAdmLevel('adm0'),
      this.db.fetchByAdmLevel('adm1'),
      this.db.fetchByAdmLevel('adm2'),
      this.db.fetchByAdmLevel('adm3'),
      this.db.fetchByAdmLevel('adm4'),
    ]).subscribe((results) => {
      results.forEach(rows => {
        this.processDBResults(rows);
        this.filteredOptions = this.searchBarControlForm.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      });
    });
  }

  private _filter(value: string): string[] {
    
    const filterValue = value.toLowerCase();
    const splittedValue = filterValue.split(' '); 
    let filteredArray = this.options;
    for (const val of splittedValue){
      filteredArray = filteredArray.filter(option => option.display.toLowerCase().includes(val));
    }
    const slicedArray = filteredArray.slice(0, 50);
    return slicedArray;
  }

  processDBResults(items) {
    for (const item of items){
      const option = {
        'display': (item.clean_adm4 ? item.clean_adm4 + ', ' : '') +
        (item.clean_adm3 ? item.clean_adm3 + ', ': '') +
        (item.clean_adm2 ? item.clean_adm2 + ', ': '') +
        (item.clean_adm1 ? item.clean_adm1 + ', ': '') +
        item.clean_country_name
        ,
        'state': {
          country_name: item.clean_country_name,
          adm1: item.clean_adm1,
          adm2: item.clean_adm2,
          adm3: item.clean_adm3,
          adm4: item.clean_adm4,
          bounds: item.bounds
        }
      };
      this.options.push(option);
    }
  }

  sendState(state) {
    this.state.next(state);
  }
}
