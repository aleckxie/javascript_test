console.info("hard codeing");
/*document.querySelector('html').onclick=function(){

}*/
test = "ddd";
var test = test || 'the answer';
console.info(test);

//命名空间
var name = name || {};
//创建子命名空间
name.event = {};
//创建容器
name.commonMethod = {
	regexForName: "",
	regexforPhone: "",
	validationName: function(MyName) {

	},
	validationPhone: function(phone) {

	}
};
name.event = {
	addListener(el, type, fn) {

		},
		removeListener(el, type, fn) {

		},
		getEvent(el) {

		}
};
name.event.addListener("your", "type", function() {

});
//内嵌函数
console.info(Math.random());


//创建类
function person() {
	console.info("create person");
}
//或者
var person = function(name) {
		this.name = name; //给对象定义属性
		console.info("create person name is :" + name);
	}
	//给对象定义方法
person.prototype.sayHello = function() {
	console.info("hello," + this.name);
}
person.prototype.sayYourName = function(){
	console.info("say your name");
}
var person1 = new person("aleck");
person1.sayHello();

//添加一个引用来调用sayHello

var sayHelloFun=person1.sayHello;
sayHelloFun();
console.info(sayHelloFun === person1.sayHello);
console.info(sayHelloFun === person.prototype.sayHello);
sayHelloFun.call(person1);

//继承
function student(name,walk){
	person.call(this,name);//继承父类
	this.walk = walk;
}

student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;

//覆盖父类方法
//
student.prototype.sayHello=function(){
	console.info("hello,your name is "+this.name+"  your walk is"+this.walk);
}
//添加新方法
student.prototype.sayGoodBye=function(){
	console.info("sayGoodBye");
}

var student1=new student("alic","333 step");
student1.sayHello();
student1.sayGoodBye();
student1.sayYourName();

console.info(student1 instanceof person);
console.info(student1 instanceof student);

console.info("test");

console.info(0.1+0.2);
//十进制
console.info(parseInt("123",10));
//八进制
console.info(parseInt("0123",8));
//十六进制
console.info(parseInt("0x123",16));
//二进制
console.info(parseInt("11",2));
console.info(+ "11");
+ "0x10";
console.info(parseInt("你好",10));

console.info(NaN+5);

console.info(isNaN(NaN));

console.info(isFinite(1/0));

console.info("hello".length);

console.info("hello".charAt(0));

console.info("hello,good bye".replace("hello","hi"));

console.info("hello".toUpperCase());

function add(){
	var sum=0;
	for(var i=0;i<arguments.length;i++){
		sum += arguments[i];
	}
	return sum;
}
console.info(add(1,2,3,4));

888888888888888888888;

101010011;
