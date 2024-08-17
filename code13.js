// FUNCTIONS
// PART 1
console.log("H");
console.log("I");
console.log("M");
console.log("A");
console.log("N");

function myName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
}

myName();

function add(num1, num2){
    console.log(num1+num2);
}
add(3, 4);
add("3", "4")
add("A", 3)
add(3, null)
add(3, 56)

const res=add(3, 6);
console.log("result is ", res);


function add1(num1, num2){
    let result=num1+num2;
    return result;
}

const finRes=add1(3, 7)
console.log("result is ", finRes);

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("himanshu"))
console.log(loginUserMessage());


// PART 2
// shopping cart

function calCartPrice(...num1){
    return num1;
}
console.log(calCartPrice(200, 400, 500, 600));


// object me function add kr rhe h or phir access kr rhe h 
const user={
    username:"himan",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)


// array me function ka use and accessing ka tareeka
const myArr=[200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArr));

