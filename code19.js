// OBJECT LITERAL
const user={
    username:"himan",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        console.log("git user details");
        console.log(this);
        
    }
}
console.log(user["username"]);
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}

// const userOne=User("hitesh", 12, true)
// console.log(userOne);
// // here values overwrite ho gya
// const userTwo=User("chaiaurcode", 11, false)
// console.log(userOne);

const userOne=new User("hitesh", 12, true)
const userTwo=new User("chaiaurcode", 11, false)
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);

