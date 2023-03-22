function Car (make,model){
    this.make=make;
    this.model=model;
    this.year=new Date().getFullYear();
}

let myCar = new Car("Toyota","Camri");
console.log(myCar);

function Country(name,region,continent,president,gdp){
    this.name=name;
    this.region=region;
    this.continent=continent;
    this.president=president;
    this.gdp=gdp;
}


let thisCountry = new Country("United States Of America","North America","North America","Joe Biden","22.67 trillion USD (2021, IMF)")

// The prototype is used to add properties

Country.prototype.states =function(){
    console.log("This country has 50 states");
};
Country.prototype.independence = function(){
    console.log("The USA got its Independence from Britain in July 4th 1776")
}




thisCountry.states();
thisCountry.independence();


console.log(thisCountry)
console.log(Country.prototype)


function ElectricCar(make,model) {
    Car.call(this,make,model)
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

let myElectricCar = new ElectricCar("Tesla", "Model S")

console.log(myElectricCar)
console.log(myElectricCar instanceof ElectricCar ) 
console.log(myElectricCar  instanceof Car )

function Bird (name,age,color){
    this.name = name;
    this.age = age;
    this.color = color;

}

let myBird = new Bird("Elvira","6 Months","Black")
console.log(myBird)

function Dog (name,age,color){
    this.name = "Dusty";
    this.age = "7 Years";
    this.color = "Brown";
//    Bird.call(this,name,age,color)
}

// Dog.prototype = Object.create(Bird.prototype)
// Dog.prototype.constructor = Dog;

let hound = new Dog()

console.log(hound)