import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-spark-line',
  templateUrl: './spark-line.component.html',
  styleUrls: ['./spark-line.component.less']
})
export class SparkLineComponent implements OnChanges, AfterViewInit {

  @Input() popupProperties;
  @Input() fields: string[];
  @Input() percent = true;
  @ViewChild('chart') svgElement: ElementRef;
  svg;

  margin = {top: 10, right: 10, bottom: 20, left: 40};
  width = 360;
  height = 120;

  innerWidth  = this.width - this.margin.left - this.margin.right;
  innerHeight = this.height - this.margin.top - this.margin.bottom;
  dataCount = 9;
  
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
    const x = d3.scaleLinear().domain([0, this.dataCount]).range([0, this.innerWidth]);
    const fieldNames = this.fields.map(f => f.split(':')[0]);
    const maxes = fieldNames.map(f => d3.max(this.popupProperties[f] as number[]));
    let maxValue: number = d3.max(maxes);
    maxValue = this.percent ? d3.max([maxValue, 100]) : maxValue;
    const y = d3.scaleLinear().domain([0, maxValue]).range([this.innerHeight, 0]);
    const line: any = d3.line()
          .x((d: any, i: any) => x(i))
          .y((d: any) => y(d));

    this.svg.append('g')
      .attr('transform', 'translate(0,' + this.innerHeight + ')')
      .call(d3.axisBottom(x).tickFormat((x) => x === 0 ? 'today' : `+${x}y`));

    const yAxis = d3.axisLeft(y);
    if (maxValue === 100) {
      yAxis.tickValues([0, 25, 50, 75, 100]);
    }
    this.svg.append('g').call(yAxis);
    
    for (const field of this.fields) {
      const parts = field.split(':');
      const fieldName = parts[0];
      const color = parts[1];
      if (this.popupProperties[fieldName]) {
        this.svg.append('path')
          .datum(this.popupProperties[fieldName])
          .attr('fill', 'none')
          .attr('stroke', color)
          .attr('stroke-width', 1)
          .attr('d', line);
      }
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
