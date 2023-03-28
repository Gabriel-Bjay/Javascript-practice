console.log("task 1");

setTimeout(()=>console.log("task 2"),6000)

console.log("task 3");

const multiply = (a ,b) => (a*b)
const square = n => multiply(n,n)
const printSquare = n =>console.log(square(n));

printSquare(6);

let years =function age(){
    console.log("I'm 19 years old")
}

function person (name,years){
    console.log("My name is " + " " + "and I am " + " " + "years old")
}
person("John" ,"19")