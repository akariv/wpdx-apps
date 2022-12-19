import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { timer } from 'rxjs';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.less']
})
export class PieComponent implements OnChanges, AfterViewInit {

  @ViewChild('pie') svgElement: ElementRef;
  @Input() data: any;

  chartId;
  svg;
  mySvg;
  margin = 5;
  width = 0;
  height = 0;

  radius = 0;
  colors;

  constructor() { }

  createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.mySvg = d3
      .select(this.svgElement.nativeElement)
      .append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`)
      .attr('width', this.width)
      .attr('height', this.height)
    this.svg = this.mySvg
      .append('g')
      .attr(
        'transform',
        'translate(' + (this.radius + this.margin) + ',' + this.height / 2 + ')'
      );
  }

  createColors(data = this.data): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(data.map(d => d.value.toString()))
      .range(d3.schemePastel1);
  }

  drawChart(data=this.data){
    // Compute the position of each group on the pie
    const pie = d3.pie<any>().value((d: any) => Number(d.value));
    const dataReady = pie(data);

    this.svg
      .selectAll('pieces')
      .data(dataReady)
      .enter()
      .append('path')
      .attr(
        'd',
        d3
          .arc()
          .innerRadius(0)
          .outerRadius(this.radius)
      )
      .attr('fill', (d, i) => (d.data.color ? d.data.color : this.colors(i)))
      .attr('stroke', '#121926')
      .style('stroke-width', '1px');

    const legendG = this.mySvg.selectAll('.legend') // note appending it to mySvg and not svg to make positioning easier
      .data(pie(data))
      .enter().append('g')
      .attr('transform', (d,i) =>
        'translate(' + (this.radius * 2 + this.margin * 2) + ',' + (i * 16) + ')')
      .attr('class', 'legend');


    legendG.append('rect') // make a matching color rect
      .attr('y', 10)
      .attr('width', 14)
      .attr('height', 14)
      .attr('fill', (d, i) => this.colors(i));

    legendG.append('text') // add the text
      .text((d) => d.value.toLocaleString('en-US') + '  ' + d.data.name)
      .style('font-size', '12px')
      .attr('y', 21)
      .attr('x', 20);

  }

  ngOnChanges(): void {
    const el: HTMLElement = this.svgElement?.nativeElement;
    if (!el) {
      return;
    }
    timer(100).subscribe(() => {
      this.width = el.offsetWidth;
      this.height = el.offsetHeight;
      this.radius = this.height * 0.4 - this.margin;
      this.createSvg();
      this.createColors();
      this.data = this.data.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));
      this.drawChart();
    });
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }

}
