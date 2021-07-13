import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  query(sql) {
    sql = encodeURIComponent(btoa(sql));
    return this.http.get('https://upload.waterpointdata.org/api/db/query?query=' + sql);
  }

  download(sql, format, fileName, headers) {
    sql = encodeURIComponent(btoa(sql));
    return 'https://upload.waterpointdata.org/api/db/download?query=' + sql +
            '&format=' + format +
            '&filename=' + encodeURIComponent(fileName) +
            '&headers=' + encodeURIComponent(headers.join(';'));

  }

}
