import { Component, OnInit } from '@angular/core';
import { RpStateService } from '../rp-state.service';

@Component({
  selector: 'app-attribute-filter-dialog',
  templateUrl: './attribute-filter-dialog.component.html',
  styleUrls: ['./attribute-filter-dialog.component.less']
})
export class AttributeFilterDialogComponent implements OnInit {

  constructor(public rpState: RpStateService) { }

  ngOnInit(): void {
  }

}
