import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AirtableService {

  AIRTABLE_BASE = 'https://api.airtable.com/v0';
  BASE_WPDX_TOOLS = 'appuaFaGEiIMszJYb';
  BASE_KEY = 'keyGX9PZzIM6ioXXa';

  constructor(private http: HttpClient) {
  }

  airtableFetch(base, table, view, record?, fields?) {
    const headers = {
      'Authorization': `Bearer ${this.BASE_KEY}`
    };
    let url = `${this.AIRTABLE_BASE}/${base}/${table}`;
    let params: any = {};
    if (record) {
      url += `/${record}`;
    } else {
      params = {
        maxRecords: 1000,
        view,
      };
      if (fields) {
        params.fields = fields;
      }
    }
    return this.http.get(
      url, {headers, params}
    );
  }

  airtableToMapping() {
    return map((response: any) => {
      const ret = {};
      response.records.forEach((i) => {
        ret[i.fields.key] = Object.assign(i.fields, {id: i.id});
      });
      return ret;
    });
  }

  airtableToArray() {
    return map((response: any) => {
      const ret = [];
      response.records.forEach((i) => {
        ret.push(Object.assign(i.fields, {id: i.id}));
      });
      return ret;
    });
  }

  fetchWpdxTools() {
    return this.airtableFetch(this.BASE_WPDX_TOOLS, 'Tool Descriptions', 'website').pipe(
      this.airtableToMapping()
    );
  }

  fetchLogos(logosKey) {
    return this.airtableFetch(this.BASE_WPDX_TOOLS, 'Logos', 'website').pipe(
      this.airtableToArray(),
      map((logos: any[]) => logos.filter((l) => (l.tool.indexOf(logosKey) >= 0)))
    );
  }

}
