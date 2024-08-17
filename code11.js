// ARRAY

const myArr=[0, 1, 2, 3, 4, 5];
console.log(myArr[3]);

const myArr2= new Array(1, 2, 3, 4);

console.log(myArr2);

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

// very load wala operation h ye
myArr.unshift(9);
console.log(myArr);

myArr.shift();
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(3));


const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof myArr);
console.log(typeof newArr);

// slice and splice
console.log("A ", myArr);
const myn1=myArr.slice(2, 3)
console.log(myn1);

console.log("B ", myArr);

const myn2=myArr.splice(2, 3)
console.log("C ", myArr);
console.log(myn2);



const myHeroes=["thor", "ironman", "spiderman"];
const dc=["superman", "flash", "batman"];

// myHeroes.push(dc)
// console.log(myHeroes);
// console.log(myHeroes[3]);
// console.log(myHeroes[3][1]);

// // ye ek naya array dega toh kaam ho jayega
// const all=myHeroes.concat(dc);
// console.log(all);

// use of spread
// best way to do so for adding two array
const all1=[...myHeroes, ...dc]
console.log(all1);

// use of flat
const arr1=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real=arr1.flat(Infinity);
console.log(real);


// some new things
console.log(Array.isArray("Himan"));
console.log(Array.from("Himan"));


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3));