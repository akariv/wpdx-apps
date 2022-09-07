import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { timer } from 'rxjs';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnChanges, AfterViewInit {
  @Input() data: any;
  @Input() xAxisTitle: string;
  @Input() yAxisTitle: string;

  @Input() min: number;
  @Input() max: number;
  @Input() color: string;


  @ViewChild('bar') svgElement: ElementRef;

  width = 0;
  height = 0;
  svg;
  margin = {top: 20, right: 20, bottom: 70, left: 40};

  constructor() { }

  drawHistogram(){

    const width = this.width - this.margin.left - this.margin.right;
    const height = this.height - this.margin.top - this.margin.bottom;

    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select(this.svgElement.nativeElement)
      .append('svg')
      .attr('width', width + this.margin.left + this.margin.right)
      .attr('height', height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform',
            'translate(' + this.margin.left + ',' + this.margin.top + ')');

    let tickNumber = 4;
    let valueRange = this.max - this.min;
    let consolidatedRange = d3.min([valueRange, this.data.length]);
    if (consolidatedRange < 10){
      tickNumber = consolidatedRange;
    }
    else {
      tickNumber = 10;
      if (valueRange % 10 !== 0){
        const res = valueRange % 10;
        this.max = this.max + (10-res);
      }
    }
    const formatCount = d3.format(',.0f');

    // create bins
    const binWidth = valueRange / tickNumber;
    const thresholds = d3.range(this.min, this.max + binWidth/10, binWidth);
    const bins = d3.bin()
        .value(d => d[0])
        .domain([this.min, this.max])
        .thresholds(thresholds);

    const histogram = bins(this.data);
    histogram.forEach((d: any) => {
      d.count = d3.sum(d, g => g[1]);
    });

    // create x axis
    const x = d3.scaleLinear()
      .domain([this.min, this.max])
      .range([0, width]);

    // ticks
    const xAxis = d3.axisBottom(x)
      .tickValues(thresholds)
      .tickFormat((d) => `${d}`);

    // draw x axis
    this.svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis)
          .call(g => g.select('.domain').remove())
          .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('transform', 'rotate(-50)');


    // create y axis
    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(histogram as any[], (d) => d.count)]);

    // draw bars
    const bar = this.svg.selectAll('rect')
         .data(histogram)
         .enter().append('g')
         .attr('class', 'bar')
         .attr('transform', (d) => 'translate(' + x(d.x0) + ',' + y(d.count) + ')');

    bar.append('rect')
         .attr('x', 1)
         .attr('width', width / tickNumber - 2)
         .attr('height', (d) => height - y(d.count))
         .style('fill', this.color);

    // count
    bar.append('text')
      .attr('dy', '.75em')
      .style('font-size', '10px')
      .attr('y', -15)
      .attr('x', (x(histogram[0].x1) - x(histogram[0].x0)) / 2)
      .attr('text-anchor', 'middle')
      .text( (d) => formatCount(d.count) !== (0+'') ? formatCount(d.count): '');

    // x axis title
    this.svg.append('text')
      .attr('transform',
            'translate(' + (width/2) + ' ,' +
                           (height + this.margin.top + 25) + ')')
      .style('text-anchor', 'middle')
      .text(this.xAxisTitle);

    // y axis title
    this.svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - this.margin.left)
      .attr('x',0 - (height / 2))
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text(this.yAxisTitle);
  }


  ngOnChanges(changes: SimpleChanges): void {
    const el = this.svgElement?.nativeElement as HTMLElement;
    if (!el) {
      return;
    }
    this.drawHistogram();
  }

  ngAfterViewInit() {
    const el = this.svgElement?.nativeElement as HTMLElement;
    if (!el) {
      return;
    }
    timer(0).subscribe(() => {
      this.width = el.offsetWidth;
      this.height = el.offsetHeight;
      this.ngOnChanges(null);
  });
  }
}
