// const post = {
//     id :0,
//     likes: 0,
//     username: "trippie.blackkk",
//     timestamp: "15:15",
//     comments: [ ]
// }



// const posts =[
//  {
//     id :1,
//     likes: 0,
//     username: "trippie.blackkk",
//     timestamp: "15:15",
//     comments: [
//         {
//             username: "africandummie" ,
//             comment: "Yeee",
//             id: "hjefdyuvhch"
//         }
//     ]
// }
// ];

// posts.push(
//     post,    { id :2,
//     likes: 0,
//     username: "trippie.blackkk",
//     timestamp: "16:15",
//     comments: [   ]},{
//     id :3,
//     likes: 0,
//     username: "loskii",
//     timestamp: "15:10",
//     comments: [    ]},
//     {    id :4,
//         likes: 2000,
//         username: "makaraa",
//         timestamp: "20:15",
//         comments: [  ]},
//         {    id :5,
//             likes: 0,
//             username: "unrully",
//             timestamp: "17:15",
//             comments: [ ]}
    
// )

posts.map((items,index) =>{
    return{...items , shares: 0}
}).forEach((item,index) =>{
    console.log(
    `
    ${item.username}    |  ${item.timestamp}
    IMAGE
    ${item.like}likes  |${item.comments.length}comments  | ${item.shares}shares
    `

    )
} )



// console.log(posts)


const cars = new Map([
    ['Toyota', 'Corolla'],
    ['Ford', 'Mustang'],
    ['BMW', 'X5'],
    ['Honda', 'Civic'],
    ['Mercedes-Benz', 'S-Class'],
    ['Volkswagen', 'Golf'],
    ['Audi', 'A4'],
    ['Nissan', 'Altima'],
    ['Chevrolet', 'Impala'],
    ['Tesla', 'Model S']
  ]);
  
  cars.delete('Chevrolet');
  
  cars.set('Hyundai', 'Elantra');
  
  if (cars.has('Tesla')) {
    console.log('The tesla car exists in my cars map!!!!');
  }
  for (const [key, value] of cars) {
    console.log(`The ${key}company is the one that  makes the ${value}`);
  }
  