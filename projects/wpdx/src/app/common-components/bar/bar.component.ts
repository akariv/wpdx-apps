import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnChanges, AfterViewInit {
  @Input() popupProperties: any;
  
  @ViewChild('bar') svgElement: ElementRef;

  svg;
  x;
  y;
  margin = {top: 10, right: 10, bottom: 70, left: 40};
  width = 270 - this.margin.left - this.margin.right;
  height = 360 - this.margin.top - this.margin.bottom;

  getData(popup: any){
    var x = [
      {name: "Under 5", count: popup.age_under_5},
      {name: "Under 10", count: popup.age_under_10},
      {name: "Under 15", count: popup.age_under_15},
      {name: "Above 15", count: popup.age_above_15},
    ];
    return x
  }

  private createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select("figure.bar")
    .append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")");
 }

  private drawBars(data: any[]): void {

    // Create the X-axis draw
    this.x = d3.scaleBand()
      .range([0,this.width])
      .domain(data.map(d => d.name))
      .padding(0.2);
    
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(this.x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");


    //Create y axis and draw
    this.y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .range([this.height, 0])
    this.svg.append("g")
    .call(d3.axisLeft(this.y))

    //Bars
    this.svg.selectAll(".mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr('class', 'mybar')
        .attr("x", (d => this.x(d.name)))
        .attr("y", (d => this.y(d.count)))
        .attr("width", this.x.bandwidth())
        .attr("height", (d => this.height-this.y(d.count)))
        .attr("fill", "#69b3a2")

  }
  

  constructor() { }

  ngOnChanges(): void {
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    this.drawBars(this.getData(this.popupProperties));
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }

}
