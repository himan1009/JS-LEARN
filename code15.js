// HOISTING WALA CONCEPT

console.log(addOne(6))

function addOne(num){
    return num+1
}

console.log(addOne(5))

const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))
