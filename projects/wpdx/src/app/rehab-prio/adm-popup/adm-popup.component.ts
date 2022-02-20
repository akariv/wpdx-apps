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
  data = [];
  index_array = [];

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
  getQuery(value){

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

  getData(){
    
    forkJoin(this.getQuery(this.popupProperties).map(q => this.db.query(q))).subscribe(results => {
      this.data = [];
      for (let i = 0; i < results.length; i++){
        
        const x = [];
        if (results[i].rows){
          for (let j = 0; j < results[i].rows.length; j++){
            x.push(+results[i].rows[j].install_year);
          }
        }
        this.data.push(x); 
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getData();
  }

}
