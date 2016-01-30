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

function betterExampleNeeded() {
    var a = 1;
    function oneMoreThanA() {
    	var b=0;
        return b + a + 1;
    }
    return oneMoreThanA();
}

console.info(betterExampleNeeded());


function fn1(a){
	return function fn2(b){
		return a + b;
	}
}
function fn1(a){
	return function fn2(b){
		return a + b;
	}
}
var fun1=fn1(2);
var fun2=fn1(3);
console.info(fn1(2)(2));
console.info(fun1(3));
console.info(fun2(4));