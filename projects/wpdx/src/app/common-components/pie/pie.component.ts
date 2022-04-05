import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

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
  margin = 25;
  width = 650;
  height = 350;

  radius = Math.min(this.width, this.height) / 2 - this.margin;
  colors;

  constructor() { }

  createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.mySvg = d3
      .select(this.svgElement.nativeElement)
      .append('svg')
      .attr('viewBox', `0 0 ${this.width} ${this.height}`);
      // .attr('width', this.width)
      //.attr('height', this.height)
    this.svg = this.mySvg
      .append('g')
      .attr(
        'transform',
        'translate(' + this.width / 4 + ',' + this.height / 2 + ')'
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

    const outerArc = d3
    .arc()
    .innerRadius(this.radius * 0.9)
    .outerRadius(this.radius * 0.9);

    const arc = d3
      .arc()
      .innerRadius(this.radius * 0.5) // This is the size of the donut hole
      .outerRadius(this.radius * 0.8);

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
        'translate(' + this.width/2 + ',' + (i *40) + ')')
      .attr('class', 'legend');


    legendG.append('rect') // make a matching color rect
      .attr('y', 10)
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', (d, i) => this.colors(i));

    legendG.append('text') // add the text
      .text((d) => d.value.toLocaleString('en-US') + '  ' + d.data.name)
      .style('font-size', 35)
      .attr('y', 30)
      .attr('x', 22);

  }



  ngOnChanges(): void {
    // console.log(this.data);
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    this.createColors();
    this.data = this.data.sort((a,b) => (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0));
    this.drawChart();
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }

}
