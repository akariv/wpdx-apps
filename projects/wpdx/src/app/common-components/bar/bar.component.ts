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
  // x;
  // y;
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
    var data = Array(x[0].count).fill(3);
    data = data.concat(Array(x[1].count).fill(7));
    data = data.concat(Array(x[2].count).fill(13));
    data = data.concat(Array(x[3].count).fill(25));
  
    return data
  }

  createSvg(): void {
    this.svgElement.nativeElement.innerHTML = '';
    this.svg = d3.select("figure.bar")
    .append("svg")
    .attr("width", this.width + this.margin.left + this.margin.right)
    .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + this.margin.left + "," + this.margin.top + ")");
 }

  drawHistogram(data: any[number]){

    var formatCount = d3.format(",.0f");

    // create x axis
    var x = d3.scaleLinear()
      .domain([0, 20])    
      .range([0,this.width]);

    // draw x axis
    this.svg.append("g")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3.axisBottom(x).ticks(4));

    // create bins
    var histogram = d3.bin()
        .domain([0,20]) 
        .thresholds(x.ticks(4));

    var bins = histogram(data);

    // create y axis
    var y = d3.scaleLinear()
        .range([this.height, 0]);
        y.domain([0, d3.max(bins, function(d) { return d.length; })]);

    // draw y axis
    this.svg.append("g")
        .call(d3.axisLeft(y))
        .selectAll("text")
        .attr("transform", "rotate(-30)");

    // draw bars
    var bar = this.svg.selectAll("rect")
         .data(bins)
         .enter().append("g")
         .attr("class", "bar")
         .attr("transform", function(d) { return "translate(" + x(d.x0+0.2) + "," + y(d.length) + ")"; })

    bar.append("rect")
         .attr("x", 1)
         .attr("width", 50)
         .attr("height", function(d) { 
           return 240 - y(d.length); })
         .style("fill", '#756bb1');

 

    // bar.append("text")
    //   .attr("dy", ".75em") // why?
    //   .attr("y", 6)
    //   .attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
    //   .attr("text-anchor", "middle")
    //   .text(function(d) { return (formatCount(d.length) != (0+"") ? formatCount(d.length): ""); });


    // x axis title
    this.svg.append("text")
      .attr("transform",
      "translate(" + (this.width/2) + " ," + 
                     (this.height + this.margin.top -10) + ")")
      .style("text-anchor", "middle")
      .text("Time in Years");

    // y axis title
    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - this.margin.left)
      .attr("x",0 - (this.height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Count");   
 
  }

  
  

  constructor() { }

  ngOnChanges(): void {
    if (!this.svgElement?.nativeElement) {
      return;
    }
    this.createSvg();
    this.drawHistogram(this.getData(this.popupProperties));
  }

  ngAfterViewInit() {
    this.ngOnChanges();
  }

}
