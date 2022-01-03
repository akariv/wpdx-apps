import { Component, OnInit } from '@angular/core';
import { RpStateService } from '../rp-state.service';

@Component({
  selector: 'app-region-filter-dialog',
  templateUrl: './region-filter-dialog.component.html',
  styleUrls: ['./region-filter-dialog.component.less']
})
export class RegionFilterDialogComponent implements OnInit {

  constructor(public rpState: RpStateService) { }

  ngOnInit(): void {
  }

}
