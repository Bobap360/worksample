// JavaScript Document
var market = {
	
	'fishing pole' : {
		name: 'Fishing Pole',
		amount: 1,
		cost: 100,
		note: 'a better fishing pole',
		available: true,
		description: 'Catches better fish',
		bought: function (){
				console.log("Doesn't do anything");
			}
	},
	
	bait : {
		name: 'Bait',
		amount: -1,
		cost: 5,
		available: true,
		note: 'more bait',
		description: 'Required to catch fish',
		bought: function (){
			baitAmt ++;
			var getListings = document.getElementsByClassName('baitAmt');
			for(var i = 0; i < getListings.length; i++){
				getListings[i].innerHTML = "Bait: " + baitAmt;
			}
		}
	},
	
	'Ice Chest' : {
		name: 'Ice Chest',
		amount: 1,
		cost: 300,
		available: true,
		note: 'another ice chest',
		description: 'Stores more fish',
		bought: function (){
			bagsize += 5;
			document.getElementById("bagsize").innerHTML = itemcount + '/' + bagsize;
		}
	}
	
	
};

var arrayTest = {id1 : 100, id2: 200, 'id with spaces': 300};