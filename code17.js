// IIFE (immediately invoked functions expressions)


// normal function 

// function chai(){
//     console.log("DB CONNENCTED");
// }
// chai()

// iife function
// global scope ke pollution se problem aati h usko hatane ke liye use krte h
(function chai2(){
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected two ${name}`);   
})("himan")