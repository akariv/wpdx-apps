import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.less']
})
export class SidePanelComponent {

  @Input() open = false;
  @Input() position = 'right';

  constructor() { }

}
