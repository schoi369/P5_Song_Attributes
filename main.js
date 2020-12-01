var width = 600,
    height = 500,
    margin = {top: 100, right: 50, bottom: 100, left: 50};

var svg = d3.select("body")
    .append("svg")
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)
    // .append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// d3.csv("./data/songattributes.csv", function(data) {
    

    // TODO: Preprocessing stuff, create sliders, filter, function update list of names
// });



var length_inputLeft = document.getElementById("length_slider_left");
var length_inputRight = document.getElementById("length_slider_right");

var length_slider_output_low = document.getElementById("length_slider_val_low");
var length_slider_output_high= document.getElementById("length_slider_val_high");

length_slider_output_low.innerHTML = length_inputLeft.value;
length_slider_output_high.innerHTML = length_inputRight.value;


var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");
console.log(length_inputRight.value);

function setLeftValue() {
	var _this = length_inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(length_inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";
    length_slider_output_low.innerHTML = length_inputLeft.value;
}
setLeftValue();

function setRightValue() {
	var _this = length_inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(length_inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";
    length_slider_output_high.innerHTML = length_inputRight.value;
}
setRightValue();

length_inputLeft.addEventListener("input", setLeftValue);
length_inputRight.addEventListener("input", setRightValue);
