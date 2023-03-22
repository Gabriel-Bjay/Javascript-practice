// Empty array for the african countries
let africanCountries = [];

// The set for East African countries
let eastAfricanCountries = new Set(["Kenya", "Uganda", "Tanzania", "Rwanda", "Burundi"]);


eastAfricanCountries.add('Somalia');
eastAfricanCountries.add('DRC');

console.log(eastAfricanCountries);

eastAfricanCountries.forEach((country) => {
  africanCountries.push(country);
});

console.log(africanCountries);


const toyotas = [];

const cars = new Set (["Corolla","Premio","Camry","RAV4","Tundra","Tacoma"])

cars.add("Prius","4 Runner")
cars.delete("Corolla")

console.log(cars)

cars.forEach((car) =>{
    toyotas.push(car);
});

console.log(toyotas);