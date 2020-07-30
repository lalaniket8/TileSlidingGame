var Mouse = {
	left : false,
	X : 0,
	Y : 0,
	oldX : 0,
	oldY : 0,
	delX : 0,
	delY : 0
};

var mouseDownCallback = undefined;

var addMouseDownCallback = function(f){
	mouseDownCallback = f;
};

$('#canvas').mousedown(function(e){
	Mouse.left = true;
	if(mouseDownCallback != undefined)
		mouseDownCallback(e);
});

var mouseUpCallback = undefined;

var addMouseUpCallback = function(f){
	mouseUpCallback = f;
};

$('#canvas').mouseup(function(e){
	Mouse.left = false;
	if(mouseUpCallback != undefined)
		mouseUpCallback(e);
});

var mouseMoveCallback = undefined;

var addMouseMoveCallback = function(f){
	mouseMoveCallback = f;
};

$('#canvas').mousemove(function(e){
	Mouse.X = e.offsetX;
	Mouse.Y = e.offsetY;
	if(mouseMoveCallback != undefined)
		mouseMoveCallback(e);
});

var mouseLeaveCallback = undefined;

var addMouseLeaveCallback = function(f){
	mouseLeaveCallback = f;
};

$('#canvas').mouseleave(function(e){
	Mouse.left = false;
	if(mouseLeaveCallback != undefined)
		mouseLeaveCallback(e);
});
