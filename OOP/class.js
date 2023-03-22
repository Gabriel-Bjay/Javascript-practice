// class Country {
//     constructor (name,region,county){
//         this.name = name;
//         this.region = region;
//         this.county = county;
//     }

//     states (){
//         console.log("The Country has 50 states")
//     }
//     home(){
//         console.log(`${this.name} is the name of my country`)
//     }
//     located(){
//         console.log(`${this.name} Is located in the ${this.region}n region`)
//     }
//     counties(){
//         console.log(`${this.name} has a total of ${this.county} counties`)
//     }

// }

// let myCountry = new Country ("Kenya","East Africa","47" )
// console.log(myCountry)
// myCountry.states()
// myCountry.home()
// myCountry.counties()
// myCountry.located()



class InventoryItem{
    constructor(name,quantity,price){
        this.name= name;
        this.quantity=quantity;
        this.price=price;
    }
}

class InventoryManagementSystem{
    constructor(){
        this.inventory = [];
    }
    addInventoryItem(inventoryItem){
        this.inventory.push(inventoryItem);
    }
    getInventoryValue() {
        return this.inventory.reduce((total, item) => total + (item.quantity * item.price), 0);
    }
    
}

const inventoryManagementSystem = new InventoryManagementSystem();
inventoryManagementSystem.addInventoryItem(item = new InventoryItem ("Pen",16,50));
inventoryManagementSystem.addInventoryItem(item = new InventoryItem ("Book",10,100));
console.log(inventoryManagementSystem.getInventoryValue());