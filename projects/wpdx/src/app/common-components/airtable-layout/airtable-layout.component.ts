import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

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
  @Input() filters: {id: string; title: string; icon: string}[] = [];
  @Output() map = new EventEmitter<any>();
  @Output() mapPopup = new EventEmitter<any>();
  @Output() filterSelected = new EventEmitter<string>();

  @ViewChild('drawer') drawer: MatDrawer;

  marked = marked;

  title = '';
  about = '';
  panel = '';
  selectedFilter: string = null;

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

  selectFilter(id) {
    if (this.selectedFilter === id) {
      return;
    }
    this.selectedFilter = id;
    let x = Promise.resolve(null);
    if (this.drawer.opened) {
      x = this.drawer.close();
    }
    x.then(() => {
      this.filterSelected.emit(id);
    }).then(() => {
      this.drawer.open();
    });
  }

}
