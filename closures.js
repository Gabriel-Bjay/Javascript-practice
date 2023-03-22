function greet(name){
    console.log("How are you doing," + name)
    return function(){
        console.log("Hello!" + name)
    }
}

let bob = greet("bob")
// This is a closure
let bjay = greet("bjay")
bob();
bjay();