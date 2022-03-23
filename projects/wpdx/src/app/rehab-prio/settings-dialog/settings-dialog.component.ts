import { Component, OnInit } from '@angular/core';
import { RpStateService } from '../rp-state.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.less']
})
export class SettingsDialogComponent {

  constructor(public rpState: RpStateService) { }

}
