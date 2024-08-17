// string
console.log("HELLO");
console.log('himan');
console.log("Hello"+' himan')

const name="hitesh"
const repoCount=50
console.log(name + repoCount+" value");

// string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// another way to do so
const gameName= new String("himan")
console.log(gameName)

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.endsWith("n"));
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('m'));

// yaha pe last 3 index include nhi hoga
const newString=gameName.substring(0, 3);
console.log(newString);

// slice
const anotherString=gameName.slice(0, 4);
console.log(anotherString);

// trim 
const newString1="    himan     ";
console.log(newString1.trim());

// replace
const url="https://himan.com/himan%20kumar"
console.log(url.replace('%20', '-'));
console.log(url.includes("himan"));

// conversion of string in array based on something 
// split
const newString2="My name is Himanshu";
console.log(newString2.split(" "));