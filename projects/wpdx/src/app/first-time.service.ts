import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstTimeService {

  constructor() { }

  firstTime(service) {
    const key = 'WPDX-FT-' + service;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, 'TRUE');
      return true;
    }
    return false;
  }
}
