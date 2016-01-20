function shape() {
	this.a = 0;
	this.b = 0;
}
shape.prototype.move = function(x, y) {
	// debugger;
	this.x += x;
	this.y += y;
	console.info((x) + " " + (y));
};

function Rect() {
	shape.call(this);
};
Rect.prototype = Object.create(shape.prototype);
var rect = new Rect();
rect.move(3, 4);

var tostring = Object.prototype.toString;
console.info(tostring.call(new Date));
console.info(tostring.call(new Array));
console.info(tostring.call(new Number));
console.info(tostring.call(new Object));
console.info(tostring.call(new Boolean));
console.info(tostring.call(new String));
