import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-waterpoint-popup',
  templateUrl: './base-waterpoint-popup.component.html',
  styleUrls: ['./base-waterpoint-popup.component.less']
})
export class BaseWaterpointPopupComponent implements OnInit {

  @Input() popupProperties: any;

  constructor() { }

  ngOnInit(): void {
  }

}
