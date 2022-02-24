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

  getDataQuery(value, attribute){
    const baseQuery = `select ${attribute}, count(${attribute}) from 
    wpdx_plus`
    const queries: string[] = [];
    if (value.NAME_0) {
      queries.push(`${baseQuery}
        where clean_country_name='${this.fq(value.NAME_0)}' group by ${attribute}`);
    }
    if (value.NAME_1) {
      queries.push(`${baseQuery}
        where clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' group by ${attribute}`);
    }
    if (value.NAME_2) {
      queries.push(`${baseQuery}
        where clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
              clean_adm2='${this.fq(value.NAME_2)}' group by ${attribute}`);
    }
    if (value.NAME_3) {
      queries.push(`${baseQuery}
        where clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
              clean_adm2='${this.fq(value.NAME_2)}' and clean_adm3='${this.fq(value.NAME_3)}' group by ${attribute}`);
    }

    if (value.NAME_4) {
      queries.push(`${baseQuery}
        where clean_country_name='${this.fq(value.NAME_0)}' and clean_adm1='${this.fq(value.NAME_1)}' and 
              clean_adm2='${this.fq(value.NAME_2)}' and clean_adm3='${this.fq(value.NAME_3)}' and clean_adm4='${this.fq(value.NAME_4)}' group by ${attribute}`);
    }
    return queries;

  }

  getManagementData(){
    forkJoin(this.getDataQuery(this.popupProperties, 'management_clean').map(q => this.db.query(q))).subscribe(results => {
      this.management_data = [];
      for (let i = 0; i < results.length; i++){
        const x = [];
        for (let j = 0; j < results[i].rows.length; j++){
          x.push({'name': results[i].rows[j].management_clean, 'value': results[i].rows[j].count});
        }
        this.management_data.push(x);
      }
    })
  }

  getTechData(){
    forkJoin(this.getDataQuery(this.popupProperties, 'water_tech_clean').map(q => this.db.query(q))).subscribe(results => {
      this.tech_data = [];
      for (let i = 0; i < results.length; i++){
        const x = [];
        for (let j = 0; j < results[i].rows.length; j++){
          x.push({'name': results[i].rows[j].water_tech_clean, 'value': results[i].rows[j].count});
        }
        this.tech_data.push(x);
      }
    })
  }

  getSourceData(){
    forkJoin(this.getDataQuery(this.popupProperties, 'water_source_clean').map(q => this.db.query(q))).subscribe(results => {
      this.source_data = [];
      for (let i = 0; i < results.length; i++){
        const x = [];
        for (let j = 0; j < results[i].rows.length; j++){
          x.push({'name': results[i].rows[j].water_source_clean, 'value': results[i].rows[j].count});
        }
        this.source_data.push(x);
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
      this.state_data.push([{'name': 'functional', 'value': this.admPopupSections[i].func_waterpoints},
      {'name': 'non_functional', 'value': this.admPopupSections[i].non_func_waterpoints}]);
    }
  }

 


  ngOnChanges(): void {
    this.getInstallYearData();
    this.getStateData();
    this.getSourceData();
    this.getTechData();
    this.getManagementData();
  }

}
