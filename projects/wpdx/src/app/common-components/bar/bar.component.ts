import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.less']
})
export class BarComponent implements OnInit {
  @Input() popupProperties: any;
  
  private svg;
  private margin = {top: 50, right: 10, bottom: 70, left: 40};
  private  width = 270 - this.margin.left - this.margin.right;
  private  height = 360 - this.margin.top - this.margin.bottom;

  getData(data: any){
    var x = [
      {name: "Under 5", count: data.age_under_5},
      {name: "Under 10", count: data.age_under_10},
      {name: "Under 15", count: data.age_under_15},
      {name: "Above 15", count: data.age_above_15},
    ];
    return x
  }
  private createSvg(): void {
    this.svg = d3.select("figure#bar")
    .append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")");
 }

  private drawBars(data: any[]): void {

    // Create the X-axis draw
    const x = d3.scaleBand()
      .range([0,this.width])
      .domain(data.map(d => d.name))
      .padding(0.2);
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    //Create y axis and draw
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)])
      .range([this.height, 0])
    this.svg.append("g")
    .call(d3.axisLeft(y))

    //Bars
    this.svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", (d => x(d.name)))
        .attr("y", (d => y(d.count)))
        .attr("width", x.bandwidth())
        .attr("height", (d => this.height-y(d.count)))
        .attr("fill", "#69b3a2")

  }
  

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.getData(this.popupProperties));
  }

}
