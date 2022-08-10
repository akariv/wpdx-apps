import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, from, ReplaySubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  cache: any = {};
  fetchAdmLevelsResult = new ReplaySubject(1);

  constructor(private http: HttpClient) {
    this.fetchAdmLevels().subscribe(
      (result) => {
        this.fetchAdmLevelsResult.next(result);
        this.fetchAdmLevelsResult.complete();
      }
    );
  }

  b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(parseInt(p1, 16))))
  }

  query(raw_sql, cache?, page?, page_size?) {
    // console.log('QUERYING', raw_sql);
    const sql = this.b64EncodeUnicode(raw_sql)
    let key = sql;
    const params: any = {
    };
    if (page) {
      key += `/${page}`;
      params.page = page;
    }
    if (page_size) {
      key += `/${page_size}`;
      params.page_size = page_size;
    }
    if (cache && this.cache[key]) {
      return from([this.cache[key]]);
    }
    return this.http.get('https://upload.waterpointdata.org/api/db/query?query=' + encodeURIComponent(sql), {params}).pipe(
      tap((result) => {
        if (cache) {
          this.cache[key] = result;
        }
      })
    );
  }

  download(sql, format, fileName, headers) {
    sql = encodeURIComponent(btoa(sql));
    return 'https://upload.waterpointdata.org/api/db/download?query=' + sql +
            '&format=' + format +
            '&filename=' + encodeURIComponent(fileName) +
            '&headers=' + encodeURIComponent(headers.join(';'));

  }

  fetchAdmLevels() {
    const query = `
      SELECT "NAME_0" as clean_country_name,
             "NAME_1" as clean_adm1, 
             "NAME_2" as clean_adm2,
             coalesce("NAME_3", '-') as clean_adm3, 
             coalesce("NAME_4", '-') as clean_adm4,
             bounds
      FROM adm_analysis
      WHERE adm_level = 'best'
      ORDER BY 1,2,3,4,5
    `;
    return forkJoin([0, 1].map((i) => this.query(query, true, i, 10000))).pipe(
      map((results) => {
        const ret: any[] = [];
        for (const result of results) {
          ret.push(...result.rows);
        }
        return ret;
      })
    );
  }

  fetchByAdmLevel(adm_level){
    const query = `
      SELECT "NAME_0" as clean_country_name,
             "NAME_1" as clean_adm1, 
             "NAME_2" as clean_adm2,
             "NAME_3" as clean_adm3, 
             "NAME_4" as clean_adm4,
             bounds
      FROM adm_analysis
      WHERE adm_level = '${adm_level}'
      ORDER BY 1,2,3,4,5
    `;
    return forkJoin([0, 1].map((i) => this.query(query, true, i, 10000))).pipe(
      map((results) => {
        const ret: any[] = [];
        if (results[0].pages === 1){
          ret.push(...results[0].rows);
        } else {
          for (const result of results) {
            ret.push(...result.rows);
          }
        }
        return ret;
      })
    );
  }

}
