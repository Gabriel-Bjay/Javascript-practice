// let cars = ['Toyota','Range ','Ford','Suzuki','Honda','Hyundai']
// let age = [10 ,12 ,16,19,14,11]

// cars.push('Tesla')
// cars.unshift('Ferrari')
// cars.pop()

// console.log(cars[3])
// console.log(cars)
// console.log(cars[1])
// console.log(cars[4])
// console.log(cars[cars.length-1])

// age.sort()
// console.log(age);
// cars.reverse()
// console.log(cars)
 
// cars.forEach(function(car){
//     console.log(car)
// })


// let anything = [2,4.33,'Listing']

let cars = [['Model S','Model Y','Model X'],['Mark X','Allion','Premio'],['1','2','3','4']]
// console.log(cars)

for(let i=0 ; i<cars.length ;i++ ){
    console.log(cars[i], i)
} 
 
// iterating through an array
cars.forEach((cars,index) =>{
    console.log(cars,index)
})


// the for in loop


// for(let car in cars ){
//     console.log(car)
//     console.log(cars[car])
// }

// // Nested loops
// for(let car in cars ){
//     for(let i in cars[car]){
//         console.log(i)
//         console.log(cars[car][i])
//     }
// }



// for(let i=1; i<=10;i++){
//     console.log(i);
// }

