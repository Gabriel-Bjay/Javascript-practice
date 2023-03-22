// Practicing The If statements

let number = 105

if (number <= 100 && number >0 ){
    console.log("This are The required number of students")
}else{
    console.log("There are more than required students")
}

// Practising The Switch Statements

const userstatus = "Not Here"
switch (userstatus){
    case "Active":
        console.log("User 1 Is Active Now")
        break;
    case "Offline" :
        console.log("User 1 Is Offline Now")  
        break;
    case "Not Here":
        console.log("User Doesn't Want To Be Disturbed!!")
        break;
    default:
        console.log("User 1")
}

// Practisisng Using Functions

function timeline(time){
    if(time == "oldage"){
        console.log("Welcome to old stone age section")
    }else if(time == "middleage"){
        console.log("Welcome to the middle stone age section")
    }else if(time == "newage"){
        console.log("Welcome to the new stone age section")
    }else{
        console.log("Welcome to the stone age sections")
    }
}

timeline("oldage")

// Practising creating arrays
const names = ["Bjay","Gabriel","Mburu","Trippie","Makara","Daman" ]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])
console.log(names[5])


// All these should come before the console.log
// To add first value of array
names.unshift("Redd")
// To add to the last part of the array
names.push("Black")
// To remove first value of array
names.shift()
// To remove last value of array
names.pop()

// practising creating objects

const staff ={
    director: "Joe Biden" ,
    chairbom: "Harris Clinton" ,
    principal: "Leah Rachel",
    deputyprincipal: "Stefflon Don",
    assistantdirector:function(){
        console.log("Hello!!")
    }
}

console.log(staff.chairbom)
console.log(staff.director)
console.log(staff.principal)
console.log(staff.assistantdirector)
console.log(staff.deputyprincipal)