// control flow (Logic flow)

// if 
if(true){
    console.log("I love you");
}

const isUserLoggedIn=true
if(isUserLoggedIn){
    console.log("move forward");
}

const score=200
if(score>100){
    const power="fly"
    console.log(`user power: ${power}`);
}

// not good way to write code
const bal=1000
if(bal>500)
    console.log("executed1"),
    console.log("rewrite1");

// nesting 
const bal1=1999
if(bal1>1000 && bal1<2000){
    console.log("execute2");
}

const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard){
    console.log("allow to buy");
}


// switch statement how to use
const month=3
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
       
    default:
        console.log("nothing matches");
        break;     
}

// for loop 
for(let i=0;i<10;i++){
    console.log(i);
}
