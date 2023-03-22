// function kuccps(points){
//     if(points >=80){
//         console.log('You Have Been admitted to Nairobi University')
//     }else if(points >=70 && points <80){
//         console.log('You Have been admitted to Kenyatta University')
//     }else if(points >=1 && points <70 ){
//         console.log('You are not qualified')
//     }else(points <1 && points >100 )
//         console.log('Invalid')
    
// }

// kuccps(78)

function season(offer){
    if(offer === "winter"){
        console.log("You will receive the winter offer!")
    }else if(offer === "summer"){
        console.log("You will receive the summer offer")
    }else{
        console.log("There is no offer right now")
    }
}

season("winter");


function kuccps(grade){
    if(grade == 'A'){
        console.log("Excellent performance portrayed");
    }else if(grade == "B"){
        console.log("Good Work");
    }else if(grade == "C"){
        console.log("Fair Enough");
    }else{
        console.log("Failed!!!");
    }
}

kuccps('A');


function zindua(studentname){
    if(studentname == 'Bjay'){
        console.log('Bjay,Welcome to Zindua ')
    }else if(studentname == 'James'){
        console.log('James,Welcome to Zindua  ')
    }else if(studentname == 'Alex'){
        console.log('Alex,Welcome to Zindua ')
    }else if(studentname == 'Happy'){
        console.log('Happy,Welcome to Zindua ')
    }else{
        console.log('Not a registered student')
    }    
}

zindua('Alex')

function kenya(){
    return("This is Kenya!")
}
console.log(kenya())
// kenya();

// let kenya =()=>console.log("Kenya")
// kenya();

let sum = (num1,num2) =>num1+num2
console.log(sum(1,2))


function Person(name, age, sex, height){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.height = height;
}

Person.prototype.greet = function(){
    console.log( `Hello I am ${this.name} I am ${this.age} years old.I am a ${this.sex}.My height as of now is ${this.height}    ` )
}


const bjay = new Person("Gabriel Bjay",19,"Male","TBD")
bjay.greet();

console.log(bjay)