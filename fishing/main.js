// JavaScript Document
"use strict";

var common = [];
var uncommon = [];
var rare = [];
var isCached = null;

//Wait for HTML to prep and then load
$( document ).ready(function() {
	//Check for cache
	isCached = localStorage.getItem('isCached');
	
	//Load cache if it exists
	if (isCached){
		loadFish();
	}
	
	//Set rarity levels
	for (var key in fishes){
		if (fishes[key].rarity == 'common'){
			common.push(fishes[key]);
			console.log('Added Common ' + fishes[key].name);
		}
		else if (fishes[key].rarity == 'uncommon'){
			uncommon.push(fishes[key]);
			console.log('Added Uncommon ' + fishes[key].name);
		}
		else {
			rare.push(fishes[key]);
			console.log('Added Rare ' + fishes[key].name);
		}
	}
});

	var phrases = [
		"Some people fish better with talent",
		"The fish got away",
		"Don't you feel silly",
		"Too slow",
		"He went that way!",
		"You're right, catching fish is gross",
		"Cut out the middle man, eat the bait instead",
		"Nobody saw that",
		"Focus",
		"The fish won this round",
		"Outsmarted by a fish",
		"Maybe take up a different hobby",
		"It was the lag",
		"I was rooting for the fish",
		"Maybe pray for a fish instead",
		"That was a big one"
	];
	
	var missPhrases = [
		"A fish made off with your bait",
		"Did you fall asleep?",
		"Try blinking less",
		"There's a fine line between fishing and just standing on the shore like an idiot",
		"Are you even trying?",
		"Would you even notice if a whale swam past?"
	];
	
	var toPhrases = [
		"The bait has gone soggy",
		"Good things come to those who wait",
		"Try again",
		"The sea hath fish for every man",
		"They're biding their time",
		"They'll bite eventually",
		"The waters are still"
	];
	
	var fishing = [
		"______0______",
		"______O______",
		"______o______",
		"______.______",
		"______.______",
		"______.______",
		"______.______",
		"______o______",
		"______O______",
		"______0______"
	];
	
	var jumping = [
	"You want to jump?",
	"I don't understand why",
	"That's a lot of movement",
	"Are you sure?",
	"Do you even know how?",
	"No, stop it",
	"Fine, you jump",
	"Again?",
	"Probably scared all the fish away",
	"The other fishermen are sitting still",
	"Surely you'll tire at some point",
	"At the very least you'll get bored",
	"This is absurd",
	"You look ridiculous",
	"You're still jumping"
	];
	
	var bagsize = 10;
	var itemcount = 0;
	var caught = '';
	var rand = 0;
	var i = 0;
	var x = 0;
	var fishingTimer;
	var animTimer;
	var canCatch = false;
	var didCatch = false;
	var noCatch = 0;
	var delay = 0;
	var score = 0;
	var whatHappened = '';
	var fishEverCaught = 0;
	var isFishing = false;
	var makeDark = false;
	var mute = false;
	var baitAmt = 10;
	
	//Adjust for mobile devices
	if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		 var catchdelay = 1000;
	   } 
	   else {
		 var catchdelay = 750;
	   }

$(document).on('keyup',function(key) {
    if (key.keyCode == 32 && isFishing) {
       whatHappened = "You're too busy to jump right now";
	   notifyFish();
    }
	else if (key.keyCode == 32){
		if (i<jumping.length){
			whatHappened = jumping[i];
			i++;
		}
		else{
			whatHappened = jumping[jumping.length - 1];
		}
	    notifyFish();
	}
});

function randomize(){
	console.log(common[1]);
	/*for (var key in arrayTest){
		console.log('key ' + key + ' has value ' + arrayTest[key]);
	}*/
}

//Trigger fishing loop
function fish() {
	//Cast the line
	if (baitAmt > 0){
		baitAmt --;
		document.getElementById("baitAmt").innerHTML = "Bait: " + baitAmt;
		document.getElementById("fishbutton").innerHTML = '<div id="fish" class="button" onclick="hookFish()"> Reel In </div>';
		isFishing = true;
		document.getElementById("bobber").style.fontFamily = "Lucida Console";
		document.getElementById("bobber").innerHTML = fishing[0];
		huntFish();
	}
	else{
		whatHappened = "You're out of bait";
		notifyFish();
	}
}

//Bobber animation
function animFish(){
	canCatch = true;
	didCatch = true;
	animTimer = setTimeout(animFish, (catchdelay/fishing.length));
	if(x == 3 && mute == false){
		var audio = new Audio('Bobber Splash.mp3');
		audio.play();
	}
	
	if (x < fishing.length){
		document.getElementById("bobber").innerHTML = fishing[x];
	}
	else {
		clearTimeout(animTimer);
		console.log('running');
		canCatch = false;
		animTimer = setTimeout(noFish, 2000);
	}
	x++;	
}

function transitionFish(){
	$('#bobber').animate({opacity:0}, 500, 'linear', (function (){
		document.getElementById("bobber").style.fontFamily = "Lucida Console";
		document.getElementById("bobber").innerHTML = fishing[0];
		$('#bobber').animate({opacity:1}, 500, 'linear', huntFish());
	}));
}

//Main fishing loop
function huntFish(){
	delay = Math.floor(Math.random()*14500) + 500;
	console.log(delay);
	if (delay > 2500){
		fishingTimer = setTimeout(animFish, delay);
	}
	else{
		fishingTimer = setTimeout(noFish, 15000);
	}
}

// Reeled in, but caught nothing
function noFish(){
	if (didCatch){
			whatHappened = missPhrases[Math.floor(Math.random() * missPhrases.length)];
			notifyFish();
		}
		
	else {
		whatHappened = toPhrases[Math.floor(Math.random() * toPhrases.length)];
		notifyFish();
	}
	
	if (noCatch < 4){
		noCatch ++;
	}
	resetFish();
}

//Resets all required variables
function resetFish(){
	clearTimeout(fishingTimer);
	clearTimeout(animTimer);
	document.getElementById("bobber").style.fontFamily = "Times";
	document.getElementById("bobber").innerHTML = "Cast your line";
	document.getElementById("fishbutton").innerHTML = '<div id="fish" class="button" onclick="fish()"> Cast </div>';
	canCatch = false;
	didCatch = false;
	isFishing = false;
	x = 0;
}

//Check to see if you caught a fish
function hookFish(){
	if (canCatch == true){
		whatFish();
	}
	
	else {
		if (didCatch){
			whatHappened = phrases[Math.floor(Math.random() * phrases.length)];
			notifyFish();
		}
		else {
			whatHappened = "Patience";
			notifyFish();
		}
	}
	resetFish();
	noCatch = 0;
}

//Randomizer for fish
function whatFish(){
	rand = Math.floor((Math.random() * 101));
	if (rand >= 0 && rand < 65){
		caught = common[Math.floor(Math.random() * common.length)];
	}
	else if (rand >= 65 && rand < 95 ){
		caught = uncommon[Math.floor(Math.random() * uncommon.length)];
	}
	else if(rand >= 95  && rand <= 100){
		caught = rare[Math.floor(Math.random() * rare.length)];
	}
	whatHappened = "You caught " + caught.name;
	countFish();
	//document.getElementById("feed").innerHTML = "You've caught a " + caught.name;
}

//Log caught fish
function countFish(){
		if (itemcount < bagsize){
			caught.amount ++;
			caught.total ++;
			fishEverCaught++;
			if (caught.amount == 1){
				itemcount ++;
				var additem = $('<div>').addClass('item').appendTo('div#inventory');
				var addname = $('<div>').attr('id', caught.name).addClass('name').text(caught.name).attr('onclick', 'trashFish(this)').appendTo(additem);
				$('<div>').addClass(caught.name + 'Amt').addClass('amount').text(caught.amount).appendTo(additem);
				$('<div>').addClass('tooltip').text('Release').appendTo(addname);

				document.getElementById("bagsize").innerHTML = itemcount + '/' + bagsize;
			}
			else {
				itemcount ++;
				var getListings = document.getElementsByClassName(caught.name + 'Amt');
				for(var i = 0; i < getListings.length; i++){
					console.log("Additional amount loop");
					getListings[i].innerHTML = caught.amount;
				}
				document.getElementById("bagsize").innerHTML = itemcount + '/' + bagsize;
			}
		}
		else {
			whatHappened = "You have no more room";
		}
		notifyFish();
		saveFish();
}

//Tells the player when something happens
function notifyFish(){
	var text = $('<div>').addClass('notification').css('opacity', '0').text(whatHappened).prependTo('div#feed');
	text.animate({opacity:1}, 500, 'linear');
	var bottom = $('#fade').position().top + $('#fade').outerHeight(true);
		
		$('.notification').each(function() {
		
			if($(this).position().top > bottom){
				$(this).remove();
			}
		
		});
}

function openMarket (){
	$('<div>').addClass('marketFade').attr('onclick', 'closeMarket()').appendTo('body');
	$('<div>').addClass('market').prependTo('body');
	$('.score').clone().appendTo('.market');
	$('.baitAmt').clone().appendTo('.market');
	$('<div>').addClass('sell').attr('id', 'sell').text('Sell').appendTo('.market');
	$('<div>').addClass('buy').text('Buy').appendTo('.market');
	
	//Populate purchase items
	for(var key in market){
		console.log(market[key]);
		if(market[key].available){
			//Item Listing
			var buyItem = $('<div>').addClass('item').appendTo('.buy');
			var buyName = $('<div>').addClass('name').attr('onclick', 'buyFish(this)').attr('id', key).text(market[key].name).appendTo(buyItem);
			
			//Description Tooltip
			var question = $('<div>').addClass('amount').text('?').appendTo(buyItem);
			var descTooltip = $('<div>').addClass('tooltip').appendTo(question);
			$('<div>').addClass('description').text(market[key].description).appendTo(descTooltip);
			
			//Price Tooltip
			var buyTooltip = $('<div>').addClass('tooltip').appendTo(buyName);
			$('<div>').addClass('name').text('Cost').appendTo(buyTooltip);
			$('<div>').addClass('amount').text(market[key].cost).appendTo(buyTooltip);
		}
	}
	
	//Populate sale items
	$('#inventory .name').each(function(index){
		var itemName = $(this).text();
		itemName = itemName.replace("Release", "");
		
		//Item
		var mktItem = $('<div>').addClass('item').appendTo('.sell');
		var mktName = $('<div>').attr('id', itemName).attr('onclick', 'sellFish(this)').addClass('name').text(itemName).appendTo(mktItem);
		$('<div>').addClass(itemName + 'Amt').addClass('amount').text(fishes[itemName].amount).appendTo(mktItem);
		//Tooltip
		var mktTooltip = $('<div>').addClass('tooltip').appendTo(mktName);
		$('<div>').addClass('name').text('Sell').appendTo(mktTooltip);
		$('<div>').addClass('amount').text(fishes[itemName].score).appendTo(mktTooltip);
	});
}

function closeMarket (){
	$('.marketFade').remove();
	$('.market').remove();
}

function buyFish(el){
	var whichBuy = $(el).attr('id');
	if(score >= market[whichBuy].cost){
			//Update monies
			market[whichBuy].bought();
			score -= market[whichBuy].cost;
			var getListings = document.getElementsByClassName('score');
			for(var i = 0; i < getListings.length; i++){
				getListings[i].innerHTML = "Money: " + score;
			}
			
			//Tell the player what happened
			if(vowelFish(market[whichBuy].name.charAt(0))){
				whatHappened = 'You bought an ' + market[whichBuy].name;
			}
			
			else {
				whatHappened = 'You bought a ' + market[whichBuy].name;
			}
			
			notifyFish();
			saveFish();
	}
	
	else {
		whatHappened = "You don't have enough money";
		notifyFish();
	}
}

function vowelFish(nameCheck){
	if(nameCheck == 'A' || nameCheck == 'E' || nameCheck == 'I' || nameCheck == 'O'|| nameCheck == 'U'){
		return true;
	}
			
	else {
		return false;
	}
}

//Trades fish in for cash money
function sellFish(el){
		itemcount --;		
		var whichSell = $(el).attr('id');
		var getListings = document.getElementsByClassName(whichSell + 'Amt');
		
		console.log(getListings);
		
		whichSell = fishes[whichSell];
		
		score += whichSell.score;
		//document.getElementById("score").innerHTML = "Money: " + score;
		whichSell.amount -= 1;
		document.getElementById("bagsize").innerHTML = itemcount + '/' + bagsize;
		
		for(var i = 0; i < getListings.length; i++){
			console.log("Sell loop");
			getListings[i].innerHTML = whichSell.amount;
		}
		
		if (whichSell.amount <= 0){
			for(var i = getListings.length - 1; i >= 0; i--){
				console.log('Remove key ' + i);
				getListings[i].closest('.item').remove();
				console.log(getListings);
			}
		}
		
		getListings = document.getElementsByClassName('score');
		
		for(var i = 0; i < getListings.length; i++){
			getListings[i].innerHTML = "Money: " + score;
		}
		
		whatHappened = "You sold a " + whichSell.name;
		notifyFish(whichSell.sell);
		saveFish();
}

function trashFish(el){
	itemcount --;		
	var whichSell = $(el).attr('id');
	
	whichSell = fishes[whichSell];
	
	whichSell.amount -= 1;
	document.getElementById("bagsize").innerHTML = itemcount + '/' + bagsize;
	var parent = $(el).closest('.item');
	$(parent).children('.amount').text(whichSell.amount);
	console.log(whichSell.name);

	if (whichSell.amount <= 0){
		$(el).closest('.item').remove();
	}
	
	whatHappened = "You threw a " + whichSell.name + " back";
	notifyFish();
	saveFish();
}

//Saves data
function saveFish(){
	localStorage.setItem('isCached', true);
	localStorage.setItem('fishes', JSON.stringify(fishes));
	localStorage.setItem('cashMoney', JSON.stringify(score));
	localStorage.setItem('stuff', JSON.stringify(itemcount));
	localStorage.setItem('inventory', document.getElementById('inventory').innerHTML);
	localStorage.setItem('baitAmt', baitAmt);
	console.log('Saved');
}

//Resets save data
function newFish(){
	localStorage.clear();
	location.reload();
}

//Loads saved data
function loadFish(){
	var store = localStorage.getItem('fishes');
	fishes = JSON.parse(store);
	console.log('Loaded');
	document.getElementById('inventory').innerHTML = localStorage.getItem('inventory');
	score = JSON.parse(localStorage.getItem('cashMoney'));
	itemcount = JSON.parse(localStorage.getItem('stuff'));
	document.getElementById('score').innerHTML = "Money: " + score;
	document.getElementById('dark-css').disabled = JSON.parse(localStorage.getItem('makeDark'));
	baitAmt = localStorage.getItem('baitAmt')
	document.getElementById("baitAmt").innerHTML = "Bait: " + baitAmt;
}

//Changes color scheme
function darkFish(){
	var darktheme = document.getElementById('dark-css');
	
	if(darktheme.disabled){
		darktheme.disabled = false;
		localStorage.setItem('makeDark', JSON.stringify(false));
	}
	
	else{
		darktheme.disabled = true;
		localStorage.setItem('makeDark', true);
	}
}

function muteFish(){
	if (mute){
		mute = false;
		document.getElementById('mute').innerHTML = 'mute';
	}
	else {
		mute = true;
		document.getElementById('mute').innerHTML = 'unmute';
	}
}