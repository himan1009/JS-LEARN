const user={
    username:"himan",
    price:999,


    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this);



function chai(){
    let username="hitesh"
    console.log(this);   
}
chai()


// ARROW FUNCTIONS
const chai1=()=>{
    let username="hitesh"
    console.log(this);   
}
chai1()

const chai2=()=>{
    let username="hitesh"
    console.log(this.username);   
}
chai2()

const addTwo=(num1, num2)=>{
    return num1+num2
}
console.log(addTwo(3, 5))

// implicit return 
const addTwo1=(num1, num2)=>num1+num2
console.log(addTwo1(3, 4));

const addTwo2=(num1, num2)=>(num1+num2)
console.log(addTwo2(8, 4));

// implicit return object
const addTwo3=(num1, num2)=>({username:"hitesh"})
console.log(addTwo3(5, 4));

