var width = 600,
    height = 500,
    margin = {top: 100, right: 50, bottom: 100, left: 50};

var svg = d3.select("body")
    .append("svg")
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom)

// d3.csv("./data/songattributes.csv", function(data) {
    

    // TODO: Preprocessing stuff, create sliders, filter, function update list of names
// });


//  LENGTH
var length_inputLeft = document.getElementById("length_slider_left");
var length_inputRight = document.getElementById("length_slider_right");

var length_slider_output_low = document.getElementById("length_slider_val_low");
var length_slider_output_high= document.getElementById("length_slider_val_high");

length_slider_output_low.innerHTML = length_inputLeft.value;
length_slider_output_high.innerHTML = length_inputRight.value;

var length_thumbLeft = document.querySelector("#length_thumb_left");
var length_thumbRight = document.querySelector("#length_thumb_right");
var length_range = document.querySelector("#length_range");



// ENERGY
var energy_inputLeft = document.getElementById("energy_slider_left");
var energy_inputRight = document.getElementById("energy_slider_right");

var energy_slider_output_low = document.getElementById("energy_slider_val_low");
var energy_slider_output_high= document.getElementById("energy_slider_val_high");

energy_slider_output_low.innerHTML = energy_inputLeft.value;
energy_slider_output_high.innerHTML = energy_inputRight.value;

var energy_thumbLeft = document.querySelector("#energy_thumb_left");
var energy_thumbRight = document.querySelector("#energy_thumb_right");
var energy_range = document.querySelector("#energy_range");



// SPEECHINESS
var speechiness_inputLeft = document.getElementById("speechiness_slider_left");
var speechiness_inputRight = document.getElementById("speechiness_slider_right");

var speechiness_slider_output_low = document.getElementById("speechiness_slider_val_low");
var speechiness_slider_output_high= document.getElementById("speechiness_slider_val_high");

speechiness_slider_output_low.innerHTML = speechiness_inputLeft.value;
speechiness_slider_output_high.innerHTML = speechiness_inputRight.value;

var speechiness_thumbLeft = document.querySelector("#speechiness_thumb_left");
var speechiness_thumbRight = document.querySelector("#speechiness_thumb_right");
var speechiness_range = document.querySelector("#speechiness_range");



// DANCEABILITY
var danceability_inputLeft = document.getElementById("danceability_slider_left");
var danceability_inputRight = document.getElementById("danceability_slider_right");

var danceability_slider_output_low = document.getElementById("danceability_slider_val_low");
var danceability_slider_output_high= document.getElementById("danceability_slider_val_high");

danceability_slider_output_low.innerHTML = danceability_inputLeft.value;
danceability_slider_output_high.innerHTML = danceability_inputRight.value;

var danceability_thumbLeft = document.querySelector("#danceability_thumb_left");
var danceability_thumbRight = document.querySelector("#danceability_thumb_right");
var danceability_range = document.querySelector("#danceability_range");



// UPDATES LENGTH HIGH/LOW TEXT BOXES

function setLeftValueLength() {
	var _this = length_inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(length_inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	length_thumbLeft.style.left = percent + "%";
    length_range.style.left = percent + "%";
	length_slider_output_low.innerHTML = length_inputLeft.value;
	
}
setLeftValueLength();

function setRightValueLength() {
	var _this = length_inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(length_inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	length_thumbRight.style.right = (100 - percent) + "%";
    length_range.style.right = (100 - percent) + "%";
    length_slider_output_high.innerHTML = length_inputRight.value;
}
setRightValueLength();

length_inputLeft.addEventListener("input", setLeftValueLength);
length_inputRight.addEventListener("input", setRightValueLength);

// UPDATES ENERGY HIGH/LOW TEXT BOXES
function setLeftValueEnergy() {
	var _this = energy_inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(energy_inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	energy_thumbLeft.style.left = percent + "%";
    energy_range.style.left = percent + "%";
	energy_slider_output_low.innerHTML = energy_inputLeft.value;
	
}
setLeftValueEnergy();


function setRightValueEnergy() {
	var _this = energy_inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(energy_inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	energy_thumbRight.style.right = (100 - percent) + "%";
    energy_range.style.right = (100 - percent) + "%";
    energy_slider_output_high.innerHTML = energy_inputRight.value;
}
setRightValueEnergy();

energy_inputLeft.addEventListener("input", setLeftValueEnergy);
energy_inputRight.addEventListener("input", setRightValueEnergy);

// UPDATES SPEECHINESS HIGH/LOW TEXT BOXES
function setLeftValueSpeechiness() {
	var _this = speechiness_inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(speechiness_inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	speechiness_thumbLeft.style.left = percent + "%";
    speechiness_range.style.left = percent + "%";
	speechiness_slider_output_low.innerHTML = speechiness_inputLeft.value;
	
}
setLeftValueSpeechiness();


function setRightValueSpeechiness() {
	var _this = speechiness_inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(speechiness_inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	speechiness_thumbRight.style.right = (100 - percent) + "%";
    speechiness_range.style.right = (100 - percent) + "%";
    speechiness_slider_output_high.innerHTML = speechiness_inputRight.value;
}
setRightValueSpeechiness();

speechiness_inputLeft.addEventListener("input", setLeftValueSpeechiness);
speechiness_inputRight.addEventListener("input", setRightValueSpeechiness);


// UPDATES DANCEABILITY HIGH/LOW TEXT BOXES

function setLeftValueDanceability() {
	var _this = danceability_inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(danceability_inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	danceability_thumbLeft.style.left = percent + "%";
    danceability_range.style.left = percent + "%";
	danceability_slider_output_low.innerHTML = danceability_inputLeft.value;
	
}
setLeftValueDanceability();



function setRightValueDanceability() {
	var _this = danceability_inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(danceability_inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	danceability_thumbRight.style.right = (100 - percent) + "%";
    danceability_range.style.right = (100 - percent) + "%";
    danceability_slider_output_high.innerHTML = danceability_inputRight.value;
}
setRightValueDanceability();

danceability_inputLeft.addEventListener("input", setLeftValueDanceability);
danceability_inputRight.addEventListener("input", setRightValueDanceability);
