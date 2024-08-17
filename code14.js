// scopes

let a=10
const b=20
var c=30
var f=1999
console.log(a);
console.log(b);
console.log(c);

if(true){
    let d=10
    const e=18
    var f=90
}

// console.log(d);
// console.log(e);

// yaha pe var ka scope nhi khtm hua 
console.log(f);


function one(){
    const username='himan'
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()
