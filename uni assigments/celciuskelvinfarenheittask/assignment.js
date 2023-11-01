const prompt = require("prompt-sync")(); // prompt module

console.log("Options: \n1. Add Celsius to Farenheit\n2. Add Fahrenheit to Celcius\n3. Add Kelvin to Farenheit\n4. Add Farenheit to Kelvin"); // listing available options

var option = parseInt(prompt("Which option do you choose?: "));

var boiling_water_temp;
var water_temp;

function convertCelciusToFarenheit(water_temp) {
    const total = (water_temp * 9/5) + 32;
    return total
}

function convertFarenheitToCelcius(water_temp) {
    const total = (water_temp - 32) * 5/9;
    return total
}

function convertKelvinToFarenheit(water_temp) {
    const total = (water_temp- 273.15) * 9/5 + 32;
    return total
}

function convertFarenheitToKelvin(water_temp) {
    const total = (water_temp - 32) * 5/9 + 273.15;
    return total
}

if (option === 1) {
    boiling_water_temp = 212;
    water_temp = parseFloat(prompt("What is the temperature of water in the first container?: "));
    console.log(`The water in the first container is ${water_temp} C and in the second container is ${boiling_water_temp} F`);
    converted_temp = convertCelciusToFarenheit(water_temp);
    console.log(`Converted temperature is ${converted_temp} F`);

} else if (option === 2) {
    boiling_water_temp = 100;
    water_temp = parseFloat(prompt("What is the temperature of water in the first container?: "));
    console.log(`The water in the first container is ${water_temp} F and in the second container is ${boiling_water_temp} C`);
    converted_temp = convertFarenheitToCelcius(water_temp);
    console.log(`Converted temperature is ${converted_temp} C`);

} else if (option === 3) {
    boiling_water_temp = 212;
    water_temp = parseFloat(prompt("What is the temperature of water in the first container?: "));
    console.log(`The water in the first container is ${water_temp} K and in the second container is ${boiling_water_temp} F`);
    converted_temp = convertKelvinToFarenheit(water_temp);
    console.log(`Converted temperature is ${converted_temp} F`);

} else if (option === 4) {
    boiling_water_temp = 373.15;
    water_temp = parseFloat(prompt("What is the temperature of water in the first container?: "));
    console.log(`The water in the first container is ${water_temp} F and in the second container is ${boiling_water_temp} K`);
    converted_temp = convertFarenheitToKelvin(water_temp);
    console.log(`Converted temperature is ${converted_temp} K`);
}

water_liters = parseFloat(prompt("How many liters are in the first container?: "));
boiling_water_liters = parseFloat(prompt("How many liters are in the second container?: "));

function convertLitersToGrams1 (water_liters) {
    const total = water_liters * 1000;
    return total;
}
First_Container = convertLitersToGrams1(water_liters);

function convertLitersToGrams2 (boiling_water_liters) {
    const total = boiling_water_liters * 1000;
    return total;
}
Second_Container = convertLitersToGrams2(boiling_water_liters);

console.log(`The first container weighs ${convertLitersToGrams1(water_liters)} grams, is ${water_liters} liter and has a temperature of ${water_temp} C`);
console.log(`The second container weighs ${convertLitersToGrams2(boiling_water_liters)} grams, is ${boiling_water_liters} and has a temperature of ${boiling_water_temp} C`);

function temperatureOfMixedContainer(First_Container, water_temp, Second_Container, boiling_water_temp) {
    total = (First_Container * water_temp + Second_Container * boiling_water_temp) / (First_Container + Second_Container);
    return total;
}
const answer = temperatureOfMixedContainer(First_Container, water_temp, Second_Container, boiling_water_temp);

if (option === 1) {
    console.log(`The mixture is ${answer} F`)

} else if (option === 2) {
    console.log(`The mixture is ${answer} C`)

}else if (option === 3) {
    console.log(`The mixture is ${answer} F`)

}else if (option === 4) {
    console.log(`The mixture is ${answer} K`)

}
