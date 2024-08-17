// OBJECTS
// PART 1


const mySym = Symbol("key1");
const jsUser = {
    name: "himan",
    age: 18,
    loc: "bihar",
    email: "hk@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "saturday"],
    [mySym]: "mykey1",
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

jsUser.email="himan@gmail.com";

// freeze hone ke baad no change
// Object.freeze(jsUser)

console.log(jsUser.email);

jsUser.email="himanshu@gmail.com";
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());


jsUser.greeting2=function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());


// PART 2

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
tinderUser.mySym="key232"
console.log(tinderUser);

const regUser={
    email:"hkk@gmail.com",
    fullName:{
        userFullName:{
            firstName:"himan",
            lastName:"kumar"
        }
    }
}

console.log(regUser.fullName.userFullName);
console.log(regUser.fullName.userFullName.lastName);


const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

const obj3=Object.assign({}, obj1, obj2);
const obj4={...obj1, ...obj2}
console.log(obj3);
console.log(obj4);



const users=[
    {
        id:1,
        email:"hk@gmail.com"
    },
    {
        id:2,
        email:"himan@gmail.com"
    }
]

console.log(users[0].email);
console.log(users[1].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));



// PART 3
// destructring

const course={
    courseName:"js",
    price:"999",
    courseInstructor:"himan"
}

console.log(course.courseInstructor)
const {courseInstructor, courseName:name}=course
console.log(courseInstructor);
console.log(name);


// APIs
// json format
const boy = {
    "name":"himan",
    "class":"engineering",
    "roll":"98"
}
console.log(boy);

