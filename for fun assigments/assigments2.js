const prompt = require("prompt-sync")();
const fs = require("fs");

class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
}

let cars = []; 


const clearList = prompt("Do you want to clear the list of cars? (yes/no): ");
if (clearList.toLowerCase() === "yes") {
    cars = []; 
}


const numberOfCarsToAdd = parseInt(prompt("How many cars do you want to add to the list?: "));

for (let i = 0; i < numberOfCarsToAdd; i++) {
    const name = prompt(`Enter the name of car #${i + 1}: `);
    const model = prompt(`Enter the model of car #${i + 1}: `);
    const year = prompt(`Enter the year of car #${i + 1}: `);


    const car = new Car(name, model, year);
    cars.push(car);
}

const jsonData = JSON.stringify(cars, null, 3);
fs.writeFileSync("cars.json", jsonData);

console.log("List of cars:");
cars.forEach((car, index) => {
    console.log(`Car ${index + 1}: Name - ${car.name}, Model - ${car.model}, Year - ${car.year}`);
});

console.log("Data has been saved to cars.json");
