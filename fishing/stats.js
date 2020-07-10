// JavaScript Document
var stats = {
	'Total Fish': 0,
	'Total Casts': 0
};

function fishStats (){
	$('<div>').addClass('marketFade').attr('onclick', 'closeMarket()').appendTo('body');
	$('<div>').addClass('market').attr('id', 'statsWindow').prependTo('body');
	$('<div>').addClass('left').text('Statistics').appendTo('.market');
	
	//Populate purchase items
	for(var key in stats){
			//Item Listing
			var statListing = $('<div>').addClass('item').appendTo('.market');
			$('<div>').addClass('fleft').text(key).appendTo(statListing);
			$('<div>').addClass('fright').text(stats[key]).appendTo(statListing);
	}
}