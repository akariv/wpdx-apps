import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from '../../common-components/state.service';
import { DbService } from '../../db.service';
import { ServerParamsService } from '../../server-params.service';
import { RehabPrioComponent } from '../rehab-prio.component';
import { RpStateService } from '../rp-state.service';

@Component({
  selector: 'app-rehab-prio-preview',
  templateUrl: '../rehab-prio.component.html',
  styleUrls: ['../rehab-prio.component.less']
})
export class RehabPrioPreviewComponent extends RehabPrioComponent {

  constructor(private db_: DbService, private state_: StateService, private rpState_: RpStateService, public dialog: MatDialog, private params_: ServerParamsService) {
    super(db_, state_, rpState_, dialog, params_);
    this.preview = true;
  }
}
