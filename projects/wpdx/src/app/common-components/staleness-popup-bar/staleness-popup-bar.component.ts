import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-staleness-popup-bar',
  templateUrl: './staleness-popup-bar.component.html',
  styleUrls: ['./staleness-popup-bar.component.less']
})
export class StalenessPopupBarComponent  {

  @Input() popupProperties: any;

  constructor() { }

  getData(popup: any){
    const x = [
      {name: 'Under 5', count: popup.age_under_5},
      {name: 'Under 10', count: popup.age_under_10},
      {name: 'Under 15', count: popup.age_under_15},
      {name: 'Above 15', count: popup.age_above_15},
    ];
    let data = Array(x[0].count).fill(3);
    data = data.concat(Array(x[1].count).fill(7));
    data = data.concat(Array(x[2].count).fill(13));
    data = data.concat(Array(x[3].count).fill(17));

    return data;
  }

}
