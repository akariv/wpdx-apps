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


  // data = [
  //   {
  //     name: "text1",
  //     value: "95"
  //   },
  //   {
  //     name: "text1",
  //     value: "4"
  //   },
  //   {
  //     name: "text3",
  //     value: "1"
  //   }
  // ];

  chartId;
  svg;
  margin = 25;
  width = 650;
  height = 350;

  radius = Math.min(this.width, this.height) / 2 - this.margin;
  colors;

  createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3
      .select("figure.pie")
      .append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`)
      // .attr('width', this.width)
      //.attr('height', this.height)
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 4 + "," + this.height / 2 + ")"
      );
  }

  createColors(data = this.data): void {
    this.colors = d3
      .scaleOrdinal()
      .domain(data.map(d => d.value.toString()))
      .range([
        "#6773f1",
        "#32325d",
        "#6162b5",
        "#6586f6",
        "#8b6ced",
        "#1b1b1b",
        "#212121"
      ]);
  }

  drawChart(data=this.data){
    // Compute the position of each group on the pie
    const pie = d3.pie<any>().value((d: any) => Number(d.value));
    const data_ready = pie(data);

    let outerArc = d3
    .arc()
    .innerRadius(this.radius * 0.9)
    .outerRadius(this.radius * 0.9);

    let arc = d3
      .arc()
      .innerRadius(this.radius * 0.5) // This is the size of the donut hole
      .outerRadius(this.radius * 0.8);

      this.svg
      .selectAll("pieces")
      .data(data_ready)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(0)
          .outerRadius(this.radius)
      )
      .attr("fill", (d, i) => (d.data.color ? d.data.color : this.colors(i)))
      .attr("stroke", "#121926")
      .style("stroke-width", "1px");
  }

  constructor() { }

  ngOnChanges(): void {
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    this.createColors();
    this.drawChart();
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }

}
