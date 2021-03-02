import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AirtableService } from '../../airtable.service';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-about-panel',
  templateUrl: './about-panel.component.html',
  styleUrls: ['./about-panel.component.less']
})
export class AboutPanelComponent implements OnInit {

  @Input() open = false;
  @Input() logosKey: string;
  @Output() closed = new EventEmitter<void>();

  constructor(public layout: LayoutService) {}

  ngOnInit(): void {
  }

  get position() {
    return this.layout.mobile() ? 'bottom' : 'right';
  }

}
