//array how to used
["a", "b", "c"].forEach(function(item, index, array) {
	console.info(item);
});
//the length of array is always bigger than the max index and plus 1
var a = ["1", "2", "3"];
a[5] = "4";
console.info(a.length);
//only limit array that not ha undefined item
for (var i = 0, item; item = a[i++];) {
	console.info(item);
}
b=["5","6","7"];
console.info(a.toString());
console.info(a.toLocaleString());
console.info(a.concat(b));//origin array not change
console.info(a.join(";"));//connect to string gap by ; 
console.info(a.pop());//delete the last letter
console.info(a.toString());
console.info(a.push(5));//add the letter at last
console.info(a.toString());
console.info(a.reverse());//reverse the index letter
console.info(a.toString());
console.info(a.shift()); // delete the first letter
console.info(a.toString());
console.info(a.slice(0,4));//
console.info(a.toString());
console.info(a.splice(0,3));
console.info(a.toString());
console.info(a.unshift(8,9));// add letter by first
console.info(a.toString());

//闭包函数
/*var arrayTest=
function as(x){
	function b(y){
		return s=x+y;
	};
};

console.info(arrayTest(3)(4));*/

function add(){
	var sum=0.0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum;
}
function avg1(){
	var sum=0.0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum/arguments.length;
}
function avg(arr){
	var sum=0.0;
	for(var i=0;i<arr.length;i++){
		sum+=arr[i];
	}
	return sum/arr.length;
}
console.info(add(2,3,4,1));
console.info(avg1(2,3,4,1,0));
console.info(avg([2,3,4,1,0]));

console.info(avg1.apply(null,[2,3,4,1,0]));//use array as container to pass parameter
console.info(avg.call(null,[2,3,4,1,0]));//pass parameter

//scope is different
var a1=4;
var b1=8;
(function(){
	var b1=3;
	a1+=b1;
})();
console.info(a1);
console.info(b1);


function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName:function(){
        	 return this.first + ' ' + this.last;
        },
        fullNameReversed:function(){
           return this.last + '' + this.first;
        }
    };
}
/*function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first
}*/
s = makePerson("Simon", "Willison");
console.info(s.fullName());
/*personFullName(s); // Simon Willison
personFullNameReversed(s); // Willison, Simon*/