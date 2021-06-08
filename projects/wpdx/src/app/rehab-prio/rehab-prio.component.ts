import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rehab-prio',
  templateUrl: './rehab-prio.component.html',
  styleUrls: ['./rehab-prio.component.less']
})
export class RehabPrioComponent implements OnInit {

  map = null;

  constructor() { }

  ngOnInit(): void {
    console.log('INIT?');
  }

}
