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

  margin = {top: 20, right: 10, bottom: 70, left: 40};
  width = 270 - this.margin.left - this.margin.right;
  height = 360 - this.margin.top - this.margin.bottom;

  innerWidth  = this.width - this.margin.left - this.margin.right;
  innerHeight = this.height - this.margin.top - this.margin.bottom;
  dataCount = 10;
  
  functionalProb = [0.1, 0.3, 0.1, 0.7, 0.8, 1, 0, 0.5, 0.1, 0.2];

  non_functionalProb = [0.2, 0.4, 0.5, 1, 0.7, 0.9, 0.8, 0.2, 0, 1]

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
    // const data = d3.range(this.dataCount).map( d => Math.random());
    const x = d3.scaleLinear().domain([0,this.dataCount]).range([0, this.innerWidth]);
    const y = d3.scaleLinear().domain([0, 1]).range([this.innerHeight, 0]);
    const line: any = d3.line()
          .x((d: any, i: any) => x(i))
          .y((d: any) => y(d));

    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.innerHeight + ')')
      .call(d3.axisBottom(x));

    this.svg.append('g')
      .call(d3.axisLeft(y));
    
    if (this.popupProperties.yesPredictions !== 0){
      this.svg.append('path').datum(this.popupProperties.yesPredictions)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1)
      .attr('d', line);
    }
    

    if (this.popupProperties.noPredictions !== 0){
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
