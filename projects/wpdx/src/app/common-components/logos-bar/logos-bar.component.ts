import { Component, Input, OnInit } from '@angular/core';
import { AirtableService } from '../../airtable.service';

@Component({
  selector: 'app-logos-bar',
  templateUrl: './logos-bar.component.html',
  styleUrls: ['./logos-bar.component.less']
})
export class LogosBarComponent implements OnInit {

  @Input() logosKey: string;

  logos = [];

  constructor(private airtable: AirtableService) { }

  ngOnInit(): void {
    if (this.logosKey) {
      this.airtable.fetchLogos(this.logosKey).subscribe((logos) => {
        console.log('LGOSO', logos);
        this.logos = logos;
      });
    }
  }

}
