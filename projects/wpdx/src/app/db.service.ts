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

}
