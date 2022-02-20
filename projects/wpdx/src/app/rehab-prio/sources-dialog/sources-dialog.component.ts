import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DbService } from '../../db.service';

@Component({
  selector: 'app-sources-dialog',
  templateUrl: './sources-dialog.component.html',
  styleUrls: ['./sources-dialog.component.less']
})
export class SourcesDialogComponent implements OnInit {

  _view = 'current';
  data: any[];

  constructor(private db: DbService, @Inject(MAT_DIALOG_DATA) public queryWhere: string) { }

  ngOnInit(): void {
    this.query();
  }

  set view(view: string) {
    this._view = view;
    this.query();
  }

  get view(): string {
    return this._view;
  }

  query() {
    const where = this.queryWhere;
    const query = `
      select data_lnk, dataset_title as title,
             max(created_timestamp) as created,
             array_agg(distinct source) as sources,
             array_agg(distinct clean_country_name) as countries
      from wpdx_plus
      where ${where}
      group by 1, 2 order by 3 desc
    `;
    this.data = [];
    this.db.query(query).subscribe(res => {
      this.data = res.rows || [];
    });
  }

  join(arr: string[]) {
    return arr.join(', ');
  }
}
