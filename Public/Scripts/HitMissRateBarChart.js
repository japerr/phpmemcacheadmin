/* http://www.d3noob.org/2014/02/making-bar-chart-in-d3js.html */
(function(d3) {
	var margin = {top: 5, right: 20, bottom: 23, left: 23},
    width = 280 - margin.left - margin.right,
    height = 145 - margin.top - margin.bottom;
	
	var barChart = d3.select("#hit-miss-rate");
	
	data = [
		{ label: "Hit", color: "#2a707b", value: barChart.attr("data-hit") },
		{ label: "Miss", color: "#b5463f", value: barChart.attr("data-miss") },
	];

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .1)
		.domain(data.map(function(d) { return d.label; }));	
	  
	var y = d3.scale.linear()
		.range([height, 0])
		.domain([0, 100]);
	
	var xAxis = d3.svg.axis()
		.scale(x)
		.tickSize(6,0)
		.orient('bottom');
		
	var yAxis = d3.svg.axis()
		.scale(y)
		.tickSize(3)
		.orient('left')
		.ticks(6);
		
	var chart = barChart
		.append('svg')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
	  
	chart.append('g')
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);
		
	chart.append("g")
		.attr("class", "y axis")
		.call(yAxis);
	  
	var bars = chart.selectAll(".bar")
		.data(data)
		.enter()
		.append("g")
		.attr("class", "bar");
		
	bars.append("rect")
		.style("fill", function(d) { 
			return d.color; 
		})
		.attr("x", function(d) {
			return x(d.label); 
		})
		.attr("width", x.rangeBand())
		.attr("y", function(d) { 
			return y(d.value); 
		})
		.attr("height", function(d) { 
			return height - y(d.value); 
		});
		
	bars.append("text")
		.attr("class", "label")
		.attr("text-anchor", "middle")
		.text(function(d) {
			return d.value; 
		})
		.attr("x", function(d, i) {
			return x(d.label) + x.rangeBand() / 2;
		})
		.attr("y", function(d) {
			return y(d.value) - 1;
		});		
	
}(window.d3));