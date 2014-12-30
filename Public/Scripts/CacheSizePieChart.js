/* http://zeroviscosity.com/d3-js-step-by-step/step-0-intro */
(function(d3) {
	var width = 274, 
	height = 233,
	radius = Math.min(width, height) / 2,
	donutWidth = 35,
	legendRectSize = 22,
    legendSpacing = 4;
	
	var pieChart = d3.select("#cache-size");
	
	data = [
		{ label: "Wasted", color: "#B5463F",  value: pieChart.attr("data-wasted") },
		{ label: "Used", color: "#2A707B",  value: pieChart.attr("data-used") },
		{ label: "Free", color: "#FFFFFF",  value: pieChart.attr("data-free") }
	];
		
	var svg = pieChart
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.append("g")
		.attr("transform", "translate(" + (width / 2) + "," + (height / 2) + ")");
	
    var arc = d3.svg.arc()
		.innerRadius(radius - donutWidth)
		.outerRadius(radius);
	
	var pie = d3.layout.pie()
		.value(function(d) { 
			return d.value; 
		});

	var path = svg.selectAll('path')
		.data(pie(data))
		.enter()
		.append('path')
		.attr('d', arc)
		.attr('fill', function(d, i) { 
			return d.data.color;
		});
		
	var legend = svg.selectAll('.legend')
		.data(data)
		.enter()
		.append('g')
		.attr('class', 'legend')
		.attr('transform', function(d, i) {
			var height = legendRectSize + legendSpacing;
			var offset =  height * data.length / 2;
			var horz = -2.33 * legendRectSize;
			var vert = i * height - offset;
			return 'translate(' + horz + ',' + vert + ')';
		});

	legend.append('rect')
		.data(data)
		.attr('width', legendRectSize)
		.attr('height', legendRectSize)
		.style('fill', function(d, i) 
		{
			return d.color;
		});

	legend.append('text')
		.data(data)
		.attr('x', legendRectSize + legendSpacing)
		.attr('y', legendRectSize - legendSpacing)
		.attr("class", "label")
		.text(function(d) { 
			return d.label + ' ' + d.value + '%'; 
		}); 		
}(window.d3));