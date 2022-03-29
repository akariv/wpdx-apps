import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.less']
})
export class SparkLineComponent implements OnChanges, AfterViewInit {

  @Input() popupProperties;
  @ViewChild('chart') svgElement: ElementRef;
  svg;

  margin = {top: 10, right: 10, bottom: 20, left: 40};
  width = 360;
  height = 120;

  innerWidth  = this.width - this.margin.left - this.margin.right;
  innerHeight = this.height - this.margin.top - this.margin.bottom;
  dataCount = 9;
  
  functionalProb = [0.1, 0.3, 0.1, 0.7, 0.8, 1, 0, 0.5, 0.1, 0.2];

  non_functionalProb = [0.2, 0.4, 0.5, 1, 0.7, 0.9, 0.8, 0.2, 0, 1]

  constructor() { }

  createSvg(): void{
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select('figure.chart')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform',
          'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  drawLine(){
    // const data = d3.range(this.dataCount).map( d => Math.random());
    const x = d3.scaleLinear().domain([0,this.dataCount]).range([0, this.innerWidth]);
    const y = d3.scaleLinear().domain([0, 100]).range([this.innerHeight, 0]);
    const line: any = d3.line()
          .x((d: any, i: any) => x(i))
          .y((d: any) => y(d));

    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.innerHeight + ')')
      .call(d3.axisBottom(x).tickFormat((x) => x === 0 ? 'today' : `+${x}y`));

    this.svg.append('g')
      .call(d3.axisLeft(y).tickValues([0, 25, 50, 75, 100]));
    
    if (this.popupProperties.yesPredictions){
      this.svg.append('path').datum(this.popupProperties.yesPredictions)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1)
      .attr('d', line);
    }
    
    if (this.popupProperties.noPredictions){
      this.svg.append('path').datum(this.popupProperties.noPredictions)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 1)
      .attr('d', line);
    }
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
  }

}
