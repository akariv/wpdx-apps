import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerParamsService {

  params = new ReplaySubject<any>(1);

  constructor(private http: HttpClient) {
    const url = `${environment.endpoint}/api/datarecords/parameters`
    this.http.get(url).subscribe((resp) => {
      const records = resp['result'] || [];
      const ret: any = {};
      records.forEach((record) => {
        const vrec = record.value;
        let value: any = null;
        try {
          const i = parseInt(vrec.value, 10);
          if (isFinite(i)) {
            value = i;
          }
        } catch {}
        if (value === null) {
          try {
            const i = parseFloat(vrec.value);
            if (isFinite(i)) {
              value = i;
            }
          } catch {}
        }
        if (value === null) {
          value = vrec.value;
        }
        ret[vrec.id] = value;
      });
      this.params.next(ret);
    });
  }

}
