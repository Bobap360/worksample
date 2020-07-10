// JavaScript Document
"use strict";

//Variables
//City Assets
var cities = ['Cities_Cairo.svg', 'Cities_Paris.svg', 'Cities_San_Francisco.svg','Cities_New_York.svg', 'Cities_Tokyo.svg', 'Cities_Rio.svg', 'Cities_London.svg', 'Cities_Shanghai.svg', 'Cities_Sydney.svg'];
//Fisheye Assets
var citiesFish = ['Cities_Fish_Cairo.svg', 'Cities_Fish_Paris.svg', 'Cities_Fish_San_Francisco.svg','Cities_Fish_New_York.svg', 'Cities_Fish_Tokyo.svg', 'Cities_Fish_Rio.svg', 'Cities_Fish_London.svg', 'Cities_Fish_Shanghai.svg', 'Cities_Fish_Sydney.svg'];
//Name List
var cityNames = ['Cairo', 'Paris', 'San Francisco', 'New York', 'Tokyo', 'Rio', 'London', 'Shanghai', 'Sydney'];
var lastColor = 'gray';
//Position in array
var cityCount = 0;
var fisheye = false;
//Current image set
var background = cities;

//Initialize clock
var start_time = new Date();
//Individual Clock Variables
var seconds = start_time.getSeconds();
var minutes = start_time.getMinutes();
var hours = start_time.getHours();

//Controls speed of the clock
var framerate = 24;
var rate = 1;

//Private
var speed = (6/framerate) * rate;
var minspeed = speed/60;
var hourspeed = minspeed/12;
var inc = 1000/rate;
var moveint = 1000/framerate;

//Current second hand rotation
var sec_deg = (seconds * 6) - 90;
var sec_rad = 0;
//Current minute hand rotation
var min_deg = (minutes * 6) - 90;
var min_rad = 0;
//Current hour hand rotation
var hour_deg = (hours * 30) - 90;
var hour_rad = 0;

var clockTick;
var clockSweep;

//Color palette
var color = 'gray';

//Initialize
$( document ).ready(function() {
	if (hours > 12) {
			hours -= 12;
		}
	
	$('<div>').attr('id','seconds').text(seconds).appendTo('div#clock');
	$('<div>').attr('id','minutes').text(minutes).appendTo('div#clock');
	$('<div>').attr('id','hours').text(hours).appendTo('div#clock');
	
	for(var i=0; i < cityNames.length; i++){
		var newItem = $('<div>').attr('id', i).addClass('place').text(cityNames[i]).appendTo(myDropdown);
	}
	$(document).on("click", "div.place" , function() {goToBackground(this);});

	clockTick = setInterval(tick, inc);
	clockSweep = setInterval(draw, moveint);
	
	document.getElementById("background").setAttribute('src', background[0]);
	$('#background').addClass('gray');
	
	SVGLoad();
	
});

$( ".colorButton" ).hover(function(){
	
});

//Increment time
function tick(){
	seconds ++;
	sec_deg = (seconds * 6) - 90;
	//Increment Seconds
		if (seconds >= 60){
			seconds = 0;
			minutes ++;
			document.getElementById("minutes").innerHTML = minutes;
			min_deg = (minutes * 6) - 90;
			//Increment Minutes
			if (minutes >= 60){
				minutes = 0;
				hours ++;
				document.getElementById("minutes").innerHTML = minutes;
				document.getElementById("hours").innerHTML = hours;
				hour_deg = (hours * 30) - 90;
				//Increment Hours
				if (hours > 12){
					hours = 1;
					document.getElementById("hours").innerHTML = hours;
				}
			}
		}
	document.getElementById("seconds").innerHTML = seconds;
}

function draw(){
	
	//console.log('Running');
	
	sec_deg = sec_deg + speed;
	sec_rad = sec_deg * Math.PI / 180;
	document.getElementById("seconds").style.left = (285 + 210 * Math.cos(sec_rad)) + 'px';
	document.getElementById("seconds").style.top = (282 + 210 * Math.sin(sec_rad)) + 'px';
	
	min_deg = min_deg + minspeed;
	min_rad = min_deg * Math.PI /180;
	document.getElementById("minutes").style.left = (278 + 155 * Math.cos(min_rad)) + 'px';
	document.getElementById("minutes").style.top = (274 + 155 * Math.sin(min_rad)) + 'px';
	
	hour_deg = hour_deg + hourspeed;
	hour_rad = hour_deg * Math.PI / 180;
	document.getElementById("hours").style.left = (267 + 90 * Math.cos(hour_rad)) + 'px';
	document.getElementById("hours").style.top = (261 + 90 * Math.sin(hour_rad)) + 'px';
}

function nextBg (){
	if (cityCount < background.length - 1){
		cityCount++;
	}
	else {
		cityCount = 0;
	}
	$('#currentCity').text(cityNames[cityCount]);
	console.log('Changing background to ' + background[cityCount]);
	$('#background').remove();
	$('<img>').addClass('inject-me').addClass(color).attr('id', 'background').attr('src', background[cityCount]).appendTo('#clock');
	SVGLoad();
}

function lastBg (){
	if (cityCount > 0){
		cityCount--;
	}
	else {
		cityCount = background.length - 1;
	}
	$('#currentCity').text(cityNames[cityCount]);
	console.log('Changing background to ' + background[cityCount]);
	$('#background').remove();
	$('<img>').addClass('inject-me').addClass(color).attr('id', 'background').attr('src', background[cityCount]).appendTo('#clock');
	SVGLoad();
}

//Jumps to Select Background
function goToBackground(el){
	cityCount = $(el).attr('id');
	$('#currentCity').text(cityNames[cityCount]);
	
	console.log('Changing background to ' + background[cityCount]);
	$('#background').remove();
	$('<img>').addClass('inject-me').addClass(color).attr('id', 'background').attr('src', background[cityCount]).appendTo('#clock');
	SVGLoad();
}

function switchStyle (){
	fisheye = !fisheye;
	
	//Swap to fisheye
	if (fisheye){
		background = citiesFish;
		document.getElementById("fisheye").style.background = 'url(distortionIconFish.svg)';
	}
	//Swap to plain
	else {
		background = cities;
		document.getElementById("fisheye").style.background = 'url(distortionIconFlat.svg)';
	}
	
	//If out of scope, use last in array
	if (cityCount > background.length - 1){
		cityCount = background.length -1;
	}
	
	//Reload image
	$('#background').remove();
	$('<img>').addClass('inject-me').addClass(color).attr('id', 'background').attr('src', background[cityCount]).appendTo('#clock');
	SVGLoad();
}

//Grabs color from button and changes class to match
function switchColor(el){
	document.getElementById(color).style.borderColor = "black";
	document.getElementById(color).style.transform = null;
	color = $(el).attr('id');
	$("#background").attr("class", color);
	document.getElementById(color).style.transform = "scale(0.9)";
	document.getElementById(color).style.borderColor = "rgba(0,0,0,0.3)";
	//console.log('Changing color to ' + color);
}

//Replaces image content
function SVGLoad(){
	// Elements to inject
  	var mySVGsToInject = document.querySelectorAll('img.inject-me');
  	// Do the injection
  	SVGInjector(mySVGsToInject);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}