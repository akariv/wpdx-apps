import { Component, OnInit } from '@angular/core';
import { StateService } from '../../common-components/state.service';
import { DbService } from '../../db.service';
import { RehabPrioComponent } from '../rehab-prio.component';

@Component({
  selector: 'app-rehab-prio-preview',
  templateUrl: '../rehab-prio.component.html',
  styleUrls: ['../rehab-prio.component.less']
})
export class RehabPrioPreviewComponent extends RehabPrioComponent {

  constructor(private db_: DbService, private state_: StateService) {
    super(db_, state_);
  }
}
