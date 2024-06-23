let score=33
console.log(typeof score)

let value="33"
console.log(typeof value);


// "33ABC" => NAN
let valueInNumber=Number(value)
console.log(typeof valueInNumber)
console.log(valueInNumber)

value="33A"
valueInNumber=Number(value)
console.log(typeof valueInNumber)
console.log(valueInNumber)


let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)