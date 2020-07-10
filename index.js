// JavaScript Document
"use strict";

var animTick;
var frame = 0;
var duration = 6000;
var framecount = 360;

$( document ).ready(function() {

	animTick = setInterval(advFrame, duration/74);
	
});

function advFrame(){
	if (frame < framecount){
		frame += 5;
		document.getElementById("sheetAnim").innerHTML = '<use xlink:href="#' + frame + '" />';
	}
	else {
		frame = 5;
		document.getElementById("sheetAnim").innerHTML = '<use xlink:href="#' + frame + '" />';
	}
}