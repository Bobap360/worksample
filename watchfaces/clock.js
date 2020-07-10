// JavaScript Document
"use strict";

//Variables

var start_time = new Date();

var seconds = start_time.getSeconds();
var minutes = start_time.getMinutes();
var hours = start_time.getHours();

var framerate = 7;
var rate = 1;

//Private
var setframerate = framerate;
var speed = (6/framerate) * rate;
var minspeed = speed/60;
var hourspeed = speed/720;
var moveint = 1000/framerate;

var sec_deg = seconds * 6;

var min_deg = (minutes * 6) + (sec_deg/60);

var hour_deg = (hours * 30) + (min_deg/12);

var clockSweep;
var clockClear;

var tick = false;

//Initialize
$( document ).ready(function() {
	
	clockSweep = setInterval(draw, moveint);
	clockClear = setInterval(clearRot, 1000);
	
});

function faster(){
	if(rate<4096){
		rate = rate * 2;
		speed = (6/framerate) * rate;
		
		//Increase framerate to match speed
		if (rate <= 8){
			framerate = framerate * 2;
			moveint = 1000/framerate;
			clearInterval(clockSweep);
			clockSweep = setInterval(draw, moveint);
		}

		minspeed = speed/60;
		hourspeed = speed/720;
		document.getElementById("rate").innerHTML = rate + "x";
		document.getElementById("decrease").style.visibility = "visible";
		document.getElementById("uiCover").style.visibility = "visible";
	}
	if(rate == 4096) {
		document.getElementById("increase").style.visibility = "hidden";
	}
}

function slower(){
	if(rate>1){	
		
		//Decrease framerate to match speed
		if(rate <= 8){
			framerate = framerate/2;
			console.log("Decreasing");
			moveint = 1000/framerate;
			clearInterval(clockSweep);
			clockSweep = setInterval(draw, moveint);
		}

		rate = rate / 2;
		speed = (6/framerate) * rate;
		minspeed = speed/60;
		hourspeed = speed/720;
		document.getElementById("rate").innerHTML = rate + "x";
		document.getElementById("increase").style.visibility = "visible";
	}
	if(rate == 1) {
		document.getElementById("decrease").style.visibility = "hidden";
		document.getElementById("uiCover").style.visibility = "hidden";
	}
}

function clearRot(){
	if(sec_deg >= 360){
		//console.log("Clear " + 360*Math.floor(sec_deg/360));
		sec_deg -= 360*Math.floor(sec_deg/360);
		//console.log(" " + sec_deg + " left");
		if (min_deg >= 360){
			min_deg -= 360*Math.floor(min_deg/360);
			if(hour_deg >= 360){
				hour_deg -= 360;
			}
		}
	}
}

function draw(){
	sec_deg += speed;
	min_deg += minspeed;
	hour_deg += hourspeed;
	
	//console.log('Running');
	document.getElementById("Second").style.transform = "rotate(" + sec_deg + "deg)";
	document.getElementById("Minute").style.transform = "rotate(" + min_deg + "deg)";
	document.getElementById("Hour").style.transform = "rotate(" + hour_deg + "deg)";
}

function swapTick(){
	tick = !tick;
	if(tick){
		document.getElementById("tickFill").style.backgroundColor = "#ccc";
		document.getElementById("speedCover").style.visibility = "visible";
		sec_deg = 6*(Math.floor(sec_deg/6));
		framerate = 1;
		rate = 1;
		recalculate();
	}
	else {
		document.getElementById("tickFill").style.backgroundColor = "#fff";
		document.getElementById("speedCover").style.visibility = "hidden";
		document.getElementById("decrease").style.visibility = "hidden";
		framerate = setframerate;
		recalculate();
	}
}

function recalculate(){
	speed = (6/framerate) * rate;
	minspeed = speed/60;
	hourspeed = speed/720;
	moveint = 1000/framerate;
	document.getElementById("rate").innerHTML = rate + "x";
	clearTimeout(clockSweep);
	clockSweep = setInterval(draw, moveint);
}

function loadClock(el) {
	$("#designs").addClass("flip");
	$("#container").removeClass("flip");
	//document.getElementById("designs").style.marginLeft = "100%";
	var newDesign = "img/" + el.id.replace("d","") + "/" + el.id + "bg.svg";
	document.getElementById("background").src = newDesign;
	document.getElementById("Hour").src = newDesign.replace("bg","h");
	document.getElementById("Minute").src = newDesign.replace("bg","m");
	document.getElementById("Second").src = newDesign.replace("bg","s");
	//document.getElementById("designs").style.visibility = "hidden";
}

function loadPage(el) {
	window.open(el.id, "_self");
}

function goToIndex(){
	$('#designs').removeClass('flip');
	$('#container').addClass('flip');
	//document.getElementById("designs").style.marginLeft = "auto";
	//document.getElementById("designs").style.visibility = "visible";
}