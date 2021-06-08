import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import * as marked from 'marked';
import { AirtableService } from '../../airtable.service';
import { FirstTimeService } from '../../first-time.service';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-airtable-layout',
  templateUrl: './airtable-layout.component.html',
  styleUrls: ['./airtable-layout.component.less']
})
export class AirtableLayoutComponent implements OnInit {

  @Input() id: string;
  @Input() mapStyle: string;
  @Input() interactionLayers: string[] = [];
  @Output() map = new EventEmitter<any>();
  @Output() mapPopup = new EventEmitter<any>();

  marked = marked;

  title = '';
  about = '';
  panel = '';

  constructor(private airtable: AirtableService,
              public layout: LayoutService,
              private firstTime: FirstTimeService) { }

  ngOnInit(): void {
    console.log('INIT', this.id);
    this.airtable.fetchWpdxTools().subscribe((mapping) => {
      const settings: any = mapping[this.id];
      this.title = settings.Title;
      this.about = settings.About;
    });
    if (this.firstTime.firstTime(this.id)) {
      this.panel = 'about';
    }
  }

}
