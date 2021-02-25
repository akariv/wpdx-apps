import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-about-panel',
  templateUrl: './about-panel.component.html',
  styleUrls: ['./about-panel.component.less']
})
export class AboutPanelComponent implements OnInit {

  @Input() open = false;
  @Output() close = new EventEmitter<void>();

  constructor(public layout: LayoutService) { }

  ngOnInit(): void {
  }

  get position() {
    return this.layout.mobile() ? 'bottom' : 'right';
  }

}
