
var width = 600,
    height = 500,
    margin = {top: 100, right: 50, bottom: 100, left: 50};

var svg = d3.select('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom),
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("./data/songattributes.csv", function(data) {
    

    // TODO: Preprocessing stuff, create sliders, filter, function update list of names





});
