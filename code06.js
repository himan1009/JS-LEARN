// primitive

// 7 types

// 1.) String
// 2.) Number
// 3.) Number
// 4.) Boolean
// 5.) null
// 6.) undefined
// 7.) Symbol
// 8.) BigInt


// reference type (Non primitive)

// 1.) Array
// 2.) Objects
// 3.) Functions



// PRIMITIVE
const score=100
const scoreValue=100.3

let isLoggedIn=false
const outsideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)


console.log(typeof anotherId)
console.log(typeof outsideTemp)
console.log(typeof isLoggedIn)



// NON PRIMITIVE
const heros=["shaktiman", "nagaraj", "doga"];

let myObj={
    name:"himan",
    age:22,
}

const muFunc=function(){
    console.log("Hello world")
}


// Type                                   typeof

// i)             Number                               number
// ii)            String                                   string
// iii)           Boolean                               boolean
// iv)           Bigint                                   bigint
// v)            Symbol                                symbol
// vi)           Null                                      object
// vii)          Undefined                           undefined


// * Non-Premitive OR Referance OR Object datatype

//                   Type                                   typeof

// i)               Object                                object
// ii)              Array                                  object
// iii)             Function                            function(object)
