// for(let num = 0; num <= 100 ; num ++){
//     if(num % 2 == 1){
//         console.log( num + '  Is Odd')
//     }
// } 

// let num1 =5;
// while(num1 <= 7 ){
//     console.log('Kenya')
//     num1++;
// }

// function greet (){
//     let name = 'Makara'
//     if (name ==Bjay){
//         console.log(`'Hey ${name} how are you'`)
//     }else{
//         console.log('You Are An Impostor!')
//     }
    
// }

// greet ();

 

// kuccps(95);

// objects
// let kenya = {
//     capital: 'Nairobi',
//     continent: 'Africa',
//     region: 'East Africa',
//     culture: 'Corruption',
//     stability: 'Not Stable',
//     motto: function(){
//         console.log('Harambeeee!');
//     }
// }

// console.log(kenya.capital)
// console.log(kenya.continent)
// console.log(kenya.region)
// console.log(kenya.culture)
// console.log(kenya.stability)
// console.log(kenya.motto())

// let timeframe = 'afternoon'
// switch(timeframe){
//     case 'morning':
//         console.log('Good Morning User!');
//         break;
//     case 'afternoon':
//         console.log('Good Afternoon User!');
//         break;
//     case 'evening':
//         console.log('Good Evening User!');      
//         break;
//      default:
//         console.log('Hello User!');    
// }

// The while loops

// let i = 4;
// while (i > 1){ 
//     console.log(i);
//     i++;
//     if(i==20){
//         break;
//     }
// }

// let k = 4;
// while (k < 20){ 
//     if(k ==10){
//         continue;
//     }
    
//     k++;

// }
// console.log(k);


// for(let k =4; k<20;k++){
    
//     if(k %2==0){
//         continue;
//     }
//     console.log(k);
// }

// for(let a = 0; a<=200;a++){
//     console.log(a);
// }

const text = "bjay mburu";


let finalvalue = "";
for (let i = 0; i<text.length ;i++){
    finalvalue=finalvalue+text.charAt(i).toUpperCase() 
}
console.log(finalvalue)


let numbers = ""
for (let i=0 ; i<=8 ;i ++){
    numbers = numbers + "  "+ i;
}
console.log(numbers)

for(let i = 0; i< 6; i++){
    let output = ""
    for(let j = 0;j <= i+1; j++){
        output += "*";
    }
    console.log(output)
}

console.log ("Hello World!!")

for(let i = 5; i> 0; i--){
    let output = ""
    for(let j = 0;j < i+1; j++){
        output += "*";
        
    }
    console.log(output)
}

// The while loops
let name1 = "bjay mburu"
let i = 0;
let finalname= ""
while(i<name1.length){
    finalname += name1.charAt(i).toUpperCase();
    i++;
}
console.log(finalname)
