function init() {
	var name = "Mozilla";

	function displayName() {
		name = "chrome";
		console.info(name);
	}
	console.info(name);
	return displayName();
	console.info(name);
}
init();

//create new object
var a = {
	a: 1
};
var a = ["a", "b", "c"];

function F() {
	return a;
}
//use construct to create object

function graph() {
	this.a1 = [];
	this.b1 = [];
}
graph.prototype = {
	pushPar: function(v) {
		console.info(this.a1.push(v).toString());
	}
}

var g = new graph();
g.pushPar(1);

if (g.hasOwnProperty('a1')) {
	console.info("拥有属性a1");
}


function o1(a) {
	this.a = a;
}

o1.prototype = {
	var1: null,
	dosomething: function() {
       console.info(arguments[0]);
	}
}

function o2(a, b) {
	o1.call(this, a);
	this.b = b;
}
o2.prototype = Object.create(o1.prototype, {
	var2: {
		value: null,
		enumerable: true,
		configurable: true,
		writable: true
	},
	dosomething: {
		value: function() {
			o1.prototype.dosomething.apply(this,arguments);

		},
		enumerable: true,
		configurable: true,
		writable: true
	}
})
o2.prototype.constructor = o2;
var o2Object=new o2();
o2Object.dosomething("dd");

/*var o3Object=new Object();
o3Object.[[Prototype]] = o2.prototype;
o2.call(o3Object);*/

//得到对象的原型
console.info(Object.getPrototypeOf(o2Object));
// 'use strict';

if (true) {
  var x = 5;
}
console.log(x); 


var myvar = "my value";

(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

console.info("1.1" + "1.1"=="1.11.1");
console.info((+"1.1") + (+"1.1") == 2.2);

var str = "this string \
is broken \
across multiple\
lines."
console.log(str); 

var poem = 
"Roses are red,\n\
Violets are blue.\n\
I'm schizophrenic,\n\
And so am I."
console.info(poem);