import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnChanges, AfterViewInit{
  @Input() data: any;
  @Input() xAxisTitle: string;
  @Input() yAxisTitle: string;

  @Input() min: number;
  @Input() max: number;
  @Input() color: string;


  @ViewChild('bar') svgElement: ElementRef;
  svg;

  margin = {top: 20, right: 10, bottom: 70, left: 40};
  width = 270 - this.margin.left - this.margin.right;
  height = 360 - this.margin.top - this.margin.bottom;
  tickNumber;

  constructor() { }




  createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select('figure.bar')
    .append('svg')
    .attr('width', this.width + this.margin.left + this.margin.right)
    .attr('height', this.height + this.margin.top + this.margin.bottom)
    .append('g')
    .attr('transform',
          'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }


  drawHistogram(){

    this.tickNumber = 4;
    if(this.min !== 0){
      if ((this.max-this.min+1) < 10){
        this.tickNumber = 4;
        if(((this.max-this.min+1)%4) !== 0){
          const res = (this.max-this.min+1)%4;
          this.max = this.max + (4-res);
        }
      }
      else {
        this.tickNumber = 10;
        if (((this.max-this.min+1)%10) !== 0){

          const res = (this.max-this.min+1)%10;
          this.max = this.max + (10-res);
        }
      }
    }
    const formatCount = d3.format(',.0f');

    // create bins
    const histogram = d3.bin()
        .domain([this.min, this.max])
        .thresholds(d3.range(this.min, this.max+((this.max-this.min+1)/this.tickNumber), (this.max-this.min+1) / this.tickNumber));

    const bins = histogram(this.data);

      // create x axis
      const x = d3.scaleLinear()
      .domain([this.min, this.max])
      .range([0,this.width-this.margin.right]);

      // ticks
      const xAxis = d3.axisBottom(x)
      .tickValues(d3.range(this.min, this.max+((this.max-this.min+1)/this.tickNumber), (this.max-this.min+1) / this.tickNumber))
      .tickFormat((d) => `${d}`);

      // draw x axis
      this.svg.append('g')
          .attr('transform', 'translate(0,' + this.height + ')')
          .call(xAxis)
          .call(g => g.select('.domain').remove())
          .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-50)');


    // create y axis
    const y = d3.scaleLinear()
        .range([this.height, 0]);
        y.domain([0, d3.max(bins, (d) => d.length)]);

    // draw bars
    const bar = this.svg.selectAll('rect')
         .data(bins)
         .enter().append('g')
         .attr('class', 'bar')
         .attr('transform', (d) => 'translate(' + x(d.x0+0.1) + ',' + y(d.length) + ')');

    bar.append('rect')
         .attr('x', 1)
         .attr('width', (this.width-this.margin.right)/this.tickNumber-1)
         .attr('height', (d) => this.height - y(d.length))
         .style('fill', this.color);


    // count
    bar.append('text')
      .attr('dy', '.75em')
      .style('font-size', '10px')
      .attr('y', -15)
      .attr('x', (x(bins[0].x1) - x(bins[0].x0)) / 2)
      .attr('text-anchor', 'middle')
      .text( (d) => formatCount(d.length) !== (0+'') ? formatCount(d.length): '');



    // x axis title
    this.svg.append('text')
      .attr('transform',
            'translate(' + (this.width/2) + ' ,' +
                           (this.height + this.margin.top + 25) + ')')
      .style('text-anchor', 'middle')
      .text(this.xAxisTitle);

    // y axis title
    this.svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - this.margin.left)
      .attr('x',0 - (this.height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text(this.yAxisTitle);
  }


  ngOnChanges(): void {
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    this.drawHistogram();
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }
}
