let num = 9;
if (num <30){
    num1 = 40;
    console.log(num +" This is a local scope")
}

console.log(num);
console.log(num1);

function add (num){
    age = 20;
    console.log(num+age)
}

add(num+age)


// typecoercion
let age = 40;
let age1 = '30';

let totalAge = age+age1;
console.log(totalAge)

// typeconversion
// let age = 40;
// let age1 = '30';

// age1 = parseInt(age1);

// let totalAge = age+age1;

console.log(totalAge)