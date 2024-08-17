// number and maths


// 1.) NUMBERS
const score=400
console.log(score);

const balance=new Number(400)
console.log(balance);
console.log(balance.valueOf());
console.log(balance.toExponential());
console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));


const num1=23.8966
console.log(num1.toPrecision(3));

const num2=123.8966
console.log(num2.toPrecision(3));

const num3=11123.8966
console.log(num3.toPrecision(3));


const num4=10000
console.log(num4.toLocaleString());

const num5=100000000
console.log(num5.toLocaleString('en-IN'));


// 2.) MATHS
console.log(Math);

console.log(Math.abs(-4));
console.log(Math.floor(1.23));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.pow(2, 8));
console.log(Math.sqrt(64));

// random (VVI)
console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor((Math.random()*10)+1));

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);