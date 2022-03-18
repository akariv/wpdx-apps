import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from '../../common-components/state.service';
import { DbService } from '../../db.service';
import { RpStateService } from '../rp-state.service';

import { BehaviorSubject, forkJoin } from 'rxjs';

@Component({
  selector: 'app-adm-popup',
  templateUrl: './adm-popup.component.html',
  styleUrls: ['./adm-popup.component.less']
})
export class AdmPopupComponent implements OnChanges {

  @Input() popupProperties: any;
  @Input() admPopupSections: any;
  install_year_data = [];
  state_data = [];
  source_data = [];
  tech_data = [];
  management_data = [];
  selectedSection = 0;

  constructor(private db: DbService, private state: StateService, public rpState: RpStateService, public dialog: MatDialog) {
    this.db.fetchAdmLevels().subscribe();
  }

  tickFormat(num: any){
    // return x === 20 ? `${x}+` : `${x}`
    return num;
  }

  fq(s) {
    return s.split(`'`).join(`''`);
  }

  getInstallYearQuery(value){

    const baseQuery = `select
        install_year
        from wpdx_plus
      `;

      const queries: string[] = [];
      if (value.NAME_0) {
        queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' order by install_year`);
      }
      if (value.NAME_1) {
        queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' order by install_year`);
      }
      if (value.NAME_2) {
        queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
                clean_adm2='${this.fq(value.NAME_2)}' order by install_year`);
      }
      if (value.NAME_3) {
        queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
                clean_adm2='${this.fq(value.NAME_2)}' and clean_adm3='${this.fq(value.NAME_3)}' order by install_year`);
      }

      if (value.NAME_4) {
        queries.push(`${baseQuery}
          where install_year is not NULL and clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
                clean_adm2='${this.fq(value.NAME_2)}' and clean_adm3='${this.fq(value.NAME_3)}' and clean_adm4='${this.fq(value.NAME_4)}' order by install_year`);
      }
      
    return queries;                                                                                                                               
  }


  addQuery(value, baseQuery, count, queries, attribute){
    if (value){
      baseQuery = `${baseQuery} and clean_adm${count}='${this.fq(value)}'`;
      queries.push(`${baseQuery} group by ${attribute}`);
    }
    return baseQuery
    
  }

  getDataQuery(value, attribute){
    const values = [value.NAME_1, value.NAME_2, value.NAME_3, value.NAME_4];
    let baseQuery = `select ${attribute} as name, count(${attribute}) from
    wpdx_plus`
    const queries: string[] = [];
    if (value.NAME_0){
      baseQuery = `${baseQuery} where clean_country_name='${this.fq(value.NAME_0)}'`;
      queries.push(`${baseQuery} group by ${attribute}`);
    }
    for (let i = 0; i < values.length; i++){
      baseQuery = this.addQuery(values[i], baseQuery, i+1, queries, attribute)
    }
    return queries;

  }

  getData(column_name){
    forkJoin(this.getDataQuery(this.popupProperties, column_name).map(q => this.db.query(q))).subscribe(results => {
      const data_array = [];
      for (const result of results){
        const x = [];
        for (let j = 0; j < result.rows.length; j ++){
          if (result.rows[j].count > 0){
            x.push({'name': result.rows[j].name, 'value': result.rows[j].count});
            
          }
        }
        data_array.push(x);
      }
      if (column_name === 'water_tech_clean'){
        this.tech_data = data_array;
      } else if (column_name === 'water_source_clean'){
        this.source_data = data_array;
      } else if (column_name === 'management_clean') {
        this.management_data = data_array;
      }

    })
  }

  getInstallYearData(){
    
    forkJoin(this.getInstallYearQuery(this.popupProperties).map(q => this.db.query(q))).subscribe(results => {
      this.install_year_data = [];
      for (let i = 0; i < results.length; i++){
        
        const x = [];
        if (results[i].rows){
          for (let j = 0; j < results[i].rows.length; j++){
            x.push(+results[i].rows[j].install_year);
          }
        }
        this.install_year_data.push(x); 
      }
    });
  }

  getStateData(){
    this.state_data = [];
    for (let i = 0; i < this.admPopupSections.length; i++){
      const x = []
      if (this.admPopupSections[i].func_waterpoints > 0){
        x.push({'name': 'Functional', 'value': this.admPopupSections[i].func_waterpoints})
      }
      if (this.admPopupSections[i].non_func_waterpoints > 0){
        x.push({'name': 'Non Functional', 'value': this.admPopupSections[i].non_func_waterpoints})
      }
      this.state_data.push(x);
    }
  }

 


  ngOnChanges(): void {
    this.getInstallYearData();
    this.getStateData();
    this.getData('water_source_clean');
    this.getData('water_tech_clean');
    this.getData('management_clean');
    

  }

}
