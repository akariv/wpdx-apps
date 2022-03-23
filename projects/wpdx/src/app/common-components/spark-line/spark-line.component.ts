import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.less']
})
export class SparkLineComponent implements OnChanges, AfterViewInit {

  @ViewChild('chart') svgElement: ElementRef;
  svg;

  margin = {top: 20, right: 10, bottom: 70, left: 40};
  width = 270 - this.margin.left - this.margin.right;
  height = 360 - this.margin.top - this.margin.bottom;

  innerWidth  = this.width - this.margin.left - this.margin.right;
  ineerHeight = this.height - this.margin.top - this.margin.bottom;
  dataCount = 40;

  constructor() { }

  createSvg(): void{
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select('figure.chart')
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform',
          'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  drawLine(){
    const data = d3.range(this.dataCount).map( d => Math.random() );
    const x = d3.scaleLinear().domain([0, this.dataCount]).range([0, this.innerWidth]);
    const y = d3.scaleLinear().domain([0, 1]).range([innerHeight, 0]);
  }

  ngOnChanges(): void {
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    this.drawLine();
  }

  ngAfterViewInit() {
    this.ngOnChanges();
    console.log('chao');
  }

}
