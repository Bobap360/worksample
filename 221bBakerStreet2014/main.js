var activeTimer;
var fillBar;
var input;

$(document).ready(function(){
	const readout = document.getElementById("readout");
	fillBar = document.getElementById("progressFill");
	const inputGroup = document.getElementById("inputGroup");
	const inputFade = document.getElementById("inputFade");
	const clueGroup = document.getElementById("clueGroup");
	const clueFade = document.getElementById("clueFade");
	const label = document.getElementById("label");
	input = document.getElementById("fclue");
	
	input.addEventListener("keypress", function(event){
		if(event.key === "Enter"){
			event.preventDefault();
			checkClue();
		}
	});
	
	//clueGroup.style.visibility = "hidden";
});

function checkClue(){
	var x = document.getElementById("fclue").value;
	
	clearTimeout(activeTimer);
	
	if(x > 0 && x <= clues.length){
		if(typeof clues[x-1] != 'undefined'){
			//clueGroup.style.visibility = "visible";
			//inputGroup.style.visibility = "hidden";
			transitionIn(150);
			readout.innerHTML = clues[x-1];
			//Timed in milliseconds / 10
			timer(30000, 30000);
		}
		else{
			readout.innerHTML = "Error: 404";
		}
	}
	else{
		label.innerHTML = "Not a Valid Clue";
		setTimeout(labelSwap, 1500);
	}
}

function timer(timeleft, timetotal){
	var progressBarWidth = (timeleft / timetotal) * 100;
	fillBar.style.width = CSS.percent(progressBarWidth);
	if(timeleft > 0){
		activeTimer = setTimeout(function(){ timer(timeleft - 20, timetotal, fillBar);}, 20);
	}
	else{
		readout.innerHTML = "Time's Up";
		transitionOut(1000);
		//clueGroup.style.visibility = "hidden";
		//inputGroup.style.visibility = "visible";
	}
}

function transitionIn(ttime){
	$("#inputFade").animate({
		opacity:1.0
	}, ttime, "linear", function() {
		inputGroup.style.visibility = "hidden";
		clueGroup.style.visibility = "visible";
		$("#clueFade").animate({
			opacity:0.0
		}, ttime, "linear")
		});
}

function transitionOut(ttime){
	document.getElementById("fclue").value = "";
	$("#clueFade").animate({
		opacity:1.0
	}, ttime, "linear", function() {
		clueGroup.style.visibility = "hidden";
		inputGroup.style.visibility = "visible";
		$("#inputFade").animate({
			opacity:0.0
		}, ttime, "linear")
		});
}

function labelSwap(){
	label.innerHTML = "Enter Clue Number";
}

function earlyEnd(){
	transitionOut(1000);
	clearTimeout(activeTimer);
}