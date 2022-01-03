import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  cache: any = {};

  constructor(private http: HttpClient) {}

  query(sql, cache?) {
    sql = encodeURIComponent(btoa(sql));
    if (cache && this.cache[sql]) {
      return from([this.cache[sql]]);
    }
    return this.http.get('https://upload.waterpointdata.org/api/db/query?query=' + sql).pipe(
      tap((result) => {
        if (cache) {
          this.cache[sql] = result;
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
      SELECT clean_country_name, clean_adm1, clean_adm2, coalesce(clean_adm3, '-') as clean_adm3, coalesce(clean_adm4, '-') as clean_adm4,
            max(lat_deg) as lat_max, max(lon_deg) as lon_max, min(lat_deg) as lat_min, min(lon_deg) as lon_min
      FROM wpdx_plus
      GROUP BY 1,2,3,4,5
      ORDER BY 1,2,3,4,5
    `;
    return this.query(query, true);
  }
}
