(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 900,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.thumb_design_10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.thumb_design_9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Design15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_13();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_11();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.Design2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.thumb_design_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,200);


(lib.ButtonOverlay = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.051)").s().p("AxkRlMAAAgjJMAjJAAAMAAAAjJg");
	this.shape.setTransform(112.5,112.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,225,225);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Overlay_01.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design02.html", "_self");
		});
		this.Overlay_02.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design03.html", "_self");
		});
		this.Overlay_03.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design05.html", "_self");
		});
		this.Overlay_04.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design06.html", "_self");
		});
		this.Overlay_05.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design07.html", "_self");
		});
		this.Overlay_06.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design08.html", "_self");
		});
		this.Overlay_07.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design09.html", "_self");
		});
		this.Overlay_08.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design10.html", "_self");
		});
		this.Overlay_09.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design11.html", "_self");
		});
		this.Overlay_10.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design12.html", "_self");
		});
		this.Overlay_11.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design13.html", "_self");
		});
		this.Overlay_12.addEventListener("click", function () {
			window.open("http://backrowstudio.com/vivante/design15.html", "_self");
		});
		
		var frequency = 30;
		stage.enableMouseOver(frequency);
		
		this.Link_02.addEventListener("mouseover", on_01.bind(this));
		this.Overlay_01.addEventListener("mouseout", off_01.bind(this));
		
		this.Link_03.addEventListener("mouseover", on_02.bind(this));
		this.Overlay_02.addEventListener("mouseout", off_02.bind(this));
		
		this.Link_05.addEventListener("mouseover", on_03.bind(this));
		this.Overlay_03.addEventListener("mouseout", off_03.bind(this));
		
		this.Link_06.addEventListener("mouseover", on_04.bind(this));
		this.Overlay_04.addEventListener("mouseout", off_04.bind(this));
		
		this.Link_07.addEventListener("mouseover", on_05.bind(this));
		this.Overlay_05.addEventListener("mouseout", off_05.bind(this));
		
		this.Link_08.addEventListener("mouseover", on_06.bind(this));
		this.Overlay_06.addEventListener("mouseout", off_06.bind(this));
		
		this.Link_09.addEventListener("mouseover", on_07.bind(this));
		this.Overlay_07.addEventListener("mouseout", off_07.bind(this));
		
		this.Link_10.addEventListener("mouseover", on_08.bind(this));
		this.Overlay_08.addEventListener("mouseout", off_08.bind(this));
		
		this.Link_11.addEventListener("mouseover", on_09.bind(this));
		this.Overlay_09.addEventListener("mouseout", off_09.bind(this));
		
		this.Link_12.addEventListener("mouseover", on_10.bind(this));
		this.Overlay_10.addEventListener("mouseout", off_10.bind(this));
		
		this.Link_13.addEventListener("mouseover", on_11.bind(this));
		this.Overlay_11.addEventListener("mouseout", off_11.bind(this));
		
		this.Link_15.addEventListener("mouseover", on_12.bind(this));
		this.Overlay_12.addEventListener("mouseout", off_12.bind(this));
		
		function on_01() {this.Overlay_01.visible = true;}
		function off_01(){this.Overlay_01.visible = false;}
		
		function on_02() {this.Overlay_02.visible = true;}
		function off_02(){this.Overlay_02.visible = false;}
		
		function on_03() {this.Overlay_03.visible = true;}
		function off_03(){this.Overlay_03.visible = false;}
		
		function on_04() {this.Overlay_04.visible = true;}
		function off_04(){this.Overlay_04.visible = false;}
		
		function on_05() {this.Overlay_05.visible = true;}
		function off_05(){this.Overlay_05.visible = false;}
		
		function on_06() {this.Overlay_06.visible = true;}
		function off_06(){this.Overlay_06.visible = false;}
		
		function on_07() {this.Overlay_07.visible = true;}
		function off_07(){this.Overlay_07.visible = false;}
		
		function on_08() {this.Overlay_08.visible = true;}
		function off_08(){this.Overlay_08.visible = false;}
		
		function on_09() {this.Overlay_09.visible = true;}
		function off_09(){this.Overlay_09.visible = false;}
		
		function on_10() {this.Overlay_10.visible = true;}
		function off_10(){this.Overlay_10.visible = false;}
		
		function on_11() {this.Overlay_11.visible = true;}
		function off_11(){this.Overlay_11.visible = false;}
		
		function on_12() {this.Overlay_12.visible = true;}
		function off_12(){this.Overlay_12.visible = false;}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Overlays
	this.Overlay_13 = new lib.ButtonOverlay();
	this.Overlay_13.setTransform(112.5,787.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_13.visible = false;

	this.Overlay_14 = new lib.ButtonOverlay();
	this.Overlay_14.setTransform(337.5,787.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_14.visible = false;

	this.Overlay_15 = new lib.ButtonOverlay();
	this.Overlay_15.setTransform(562.5,787.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_15.visible = false;

	this.Overlay_16 = new lib.ButtonOverlay();
	this.Overlay_16.setTransform(787.5,787.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_16.visible = false;

	this.Overlay_12 = new lib.ButtonOverlay();
	this.Overlay_12.setTransform(787.5,562.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_12.visible = false;

	this.Overlay_11 = new lib.ButtonOverlay();
	this.Overlay_11.setTransform(562.5,562.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_11.visible = false;

	this.Overlay_10 = new lib.ButtonOverlay();
	this.Overlay_10.setTransform(337.5,562.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_10.visible = false;

	this.Overlay_09 = new lib.ButtonOverlay();
	this.Overlay_09.setTransform(112.5,562.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_09.visible = false;

	this.Overlay_05 = new lib.ButtonOverlay();
	this.Overlay_05.setTransform(112.5,337.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_05.visible = false;

	this.Overlay_06 = new lib.ButtonOverlay();
	this.Overlay_06.setTransform(337.5,337.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_06.visible = false;

	this.Overlay_07 = new lib.ButtonOverlay();
	this.Overlay_07.setTransform(562.5,337.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_07.visible = false;

	this.Overlay_08 = new lib.ButtonOverlay();
	this.Overlay_08.setTransform(787.5,337.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_08.visible = false;

	this.Overlay_04 = new lib.ButtonOverlay();
	this.Overlay_04.setTransform(787.5,112.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_04.visible = false;

	this.Overlay_03 = new lib.ButtonOverlay();
	this.Overlay_03.setTransform(562.5,112.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_03.visible = false;

	this.Overlay_02 = new lib.ButtonOverlay();
	this.Overlay_02.setTransform(337.5,112.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_02.visible = false;

	this.Overlay_01 = new lib.ButtonOverlay();
	this.Overlay_01.setTransform(112.5,112.5,1,1,0,0,0,112.5,112.5);
	this.Overlay_01.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Overlay_01},{t:this.Overlay_02},{t:this.Overlay_03},{t:this.Overlay_04},{t:this.Overlay_08},{t:this.Overlay_07},{t:this.Overlay_06},{t:this.Overlay_05},{t:this.Overlay_09},{t:this.Overlay_10},{t:this.Overlay_11},{t:this.Overlay_12},{t:this.Overlay_16},{t:this.Overlay_15},{t:this.Overlay_14},{t:this.Overlay_13}]}).wait(1));

	// Links
	this.Link_15 = new lib.Design15();
	this.Link_15.setTransform(787.4,559.6,0.964,0.964,0,0,0,100,100);

	this.Link_13 = new lib.Design13();
	this.Link_13.setTransform(562.8,559.6,0.964,0.964,0,0,0,100,100);

	this.Link_02 = new lib.Design2();
	this.Link_02.setTransform(112.6,108.4,0.964,0.964,0,0,0,100,100);

	this.Link_03 = new lib.Design3();
	this.Link_03.setTransform(338.2,108.4,0.964,0.964,0,0,0,100,100);

	this.Link_05 = new lib.Design5();
	this.Link_05.setTransform(562.9,108.4,0.964,0.964,0,0,0,100.1,100);

	this.Link_06 = new lib.Design6();
	this.Link_06.setTransform(787.4,108.4,0.964,0.964,0,0,0,100,100);

	this.Link_07 = new lib.Design7();
	this.Link_07.setTransform(112.6,332.1,0.964,0.964,0,0,0,100,100);

	this.Link_08 = new lib.Design8();
	this.Link_08.setTransform(338.2,332.1,0.964,0.964,0,0,0,100,100);

	this.Link_09 = new lib.Design9();
	this.Link_09.setTransform(562.9,332.1,0.964,0.964,0,0,0,100.1,100);

	this.Link_10 = new lib.Design10();
	this.Link_10.setTransform(787.4,332.1,0.964,0.964,0,0,0,100,100);

	this.Link_11 = new lib.Design11();
	this.Link_11.setTransform(112.6,559.6,0.964,0.964,0,0,0,100,100);

	this.Link_12 = new lib.Design12();
	this.Link_12.setTransform(338.2,559.6,0.964,0.964,0,0,0,100,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Link_12},{t:this.Link_11},{t:this.Link_10},{t:this.Link_09},{t:this.Link_08},{t:this.Link_07},{t:this.Link_06},{t:this.Link_05},{t:this.Link_03},{t:this.Link_02},{t:this.Link_13},{t:this.Link_15}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,450,900,900);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;