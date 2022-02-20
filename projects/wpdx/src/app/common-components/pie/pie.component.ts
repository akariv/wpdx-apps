import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.less']
})
export class PieComponent implements OnChanges, AfterViewInit {

  @ViewChild('bar') svgElement: ElementRef;

  svg;
  
  margin = {top: 20, right: 10, bottom: 70, left: 40};
  width = 270 - this.margin.left - this.margin.right;
  height = 360 - this.margin.top - this.margin.bottom;
  radius = Math.min(this.width, this.height) / 2;

  createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select('figure.bar')
    .append('svg')
    .append('g')
    .attr('class', 'slices')
    .attr('class', 'labels')
    .attr('class', 'lines');
  }

  constructor() { }

  ngOnChanges(): void {
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    // this.drawHistogram();
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }

}
