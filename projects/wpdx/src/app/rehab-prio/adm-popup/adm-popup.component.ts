import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-adm-popup',
  templateUrl: './adm-popup.component.html',
  styleUrls: ['./adm-popup.component.less']
})
export class AdmPopupComponent implements OnInit {

  @Input() popupProperties: any;
  @Input() admPopupSections: any;

  constructor() { }

  ngOnInit(): void {
  }

}
