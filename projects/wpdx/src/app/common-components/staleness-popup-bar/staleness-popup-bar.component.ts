import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-staleness-popup-bar',
  templateUrl: './staleness-popup-bar.component.html',
  styleUrls: ['./staleness-popup-bar.component.less']
})
export class StalenessPopupBarComponent implements OnChanges {

  @Input() popupProperties: any;

  data: any[] = [];

  constructor() { }

  ngOnChanges() {
    if (this.popupProperties) {
      this.data = [
        [3, this.popupProperties.age_under_5],
        [7, this.popupProperties.age_under_10],
        [13, this.popupProperties.age_under_15],
        [17, this.popupProperties.age_above_15],
      ];

    }
  }
}
