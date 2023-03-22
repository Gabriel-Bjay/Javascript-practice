const uberPrice = 555;
const uberDrivername = "Trippie"
const uberDriverearnings = (70/100 * uberPrice)
const uberEarnings = (uberPrice-uberDriverearnings)

const output= 
   `${uberDrivername} took a customer to Nairobi hospital and the price added up to Kshs${uberPrice}. From that he would get a total of Kshs${uberDriverearnings} and the rest which is Kshs${uberEarnings} would be taken by the uber app. `
   console.log(output)

function add(a,b){
   console.log('hEllo')
   return a+b;
   
}   

add(1,2)