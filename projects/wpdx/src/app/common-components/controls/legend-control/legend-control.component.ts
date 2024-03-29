import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-legend-control',
  templateUrl: './legend-control.component.html',
  styleUrls: ['./legend-control.component.less']
})
export class LegendControlComponent {

  @Input() title = 'Legend';
  @Input() expanded = true;

  constructor() { }

}
