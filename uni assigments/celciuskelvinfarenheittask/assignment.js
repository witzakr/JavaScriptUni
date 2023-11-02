const prompt = require("prompt-sync")(); // prompt module

console.log("Options: \n1. Add Celsius to Farenheit\n2. Add Fahrenheit to Celcius\n3. Add Kelvin to Farenheit\n4. Add Farenheit to Kelvin"); // listing available options

var option = parseInt(prompt("Which option do you choose?: ")); // Assing value to the variable option

var boiling_water_temp; // empty variables, cause their values are dependent on the option we choose
var water_temp;

function convertCelciusToFarenheit(water_temp) {
    const total = (water_temp * 9/5) + 32;              //formula to convert Celcius to Farenheit
    return total
}

function convertFarenheitToCelcius(water_temp) {
    const total = (water_temp - 32) * 5/9;              //formula to convert Farenheit to Celcius
    return total
}

function convertKelvinToFarenheit(water_temp) {
    const total = (water_temp- 273.15) * 9/5 + 32;      //formula to convert Kelvin to Farenheit
    return total
}

function convertFarenheitToKelvin(water_temp) {
    const total = (water_temp - 32) * 5/9 + 273.15;     //formula to convert Farenheit to Kelvin
    return total
}

if (option === 1) {
    boiling_water_temp = 212;     // assigning value of boiling water              
    water_temp = parseFloat(prompt("What is the temperature of water in the first container?: "));   // assigning value to the water_temp                                  
    console.log(`The water in the first container is ${water_temp} C and in the second container is ${boiling_water_temp} F`);         
    converted_temp = convertCelciusToFarenheit(water_temp);         //converting the temperature of water temp to the assigned scale
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

water_liters = parseFloat(prompt("How many liters are in the first container?: "));                      //assigning value to the water_liters 
boiling_water_liters = parseFloat(prompt("How many liters are in the second container?: "));            //assign value to the boiling_water_liters

function convertLitersToGrams1 (water_liters) {
    const total = water_liters * 1000;                            //converting liters to grams
    return total;
}
First_Container = convertLitersToGrams1(water_liters);           //creating variable First_Container

function convertLitersToGrams2 (boiling_water_liters) {
    const total = boiling_water_liters * 1000;
    return total;
}
Second_Container = convertLitersToGrams2(boiling_water_liters);  //creating variable Second_Container

if (option === 1) {
    console.log(`The first container weighs ${convertLitersToGrams1(water_liters)} grams, is ${water_liters} liter and has a temperature of ${converted_temp} F`);                 //if statements for printing information
    console.log(`The second container weighs ${convertLitersToGrams2(boiling_water_liters)} grams, is ${boiling_water_liters} and has a temperature of ${boiling_water_temp} F`);

} else if (option === 2) {
    console.log(`The first container weighs ${convertLitersToGrams1(water_liters)} grams, is ${water_liters} liter and has a temperature of ${converted_temp} C`);
    console.log(`The second container weighs ${convertLitersToGrams2(boiling_water_liters)} grams, is ${boiling_water_liters} and has a temperature of ${boiling_water_temp} C`);

}else if (option === 3) {
    console.log(`The first container weighs ${convertLitersToGrams1(water_liters)} grams, is ${water_liters} liter and has a temperature of ${converted_temp} F`);
    console.log(`The second container weighs ${convertLitersToGrams2(boiling_water_liters)} grams, is ${boiling_water_liters} and has a temperature of ${boiling_water_temp} F`);

}else if (option === 4) {
    console.log(`The first container weighs ${convertLitersToGrams1(water_liters)} grams, is ${water_liters} liter and has a temperature of ${converted_temp} K`);
    console.log(`The second container weighs ${convertLitersToGrams2(boiling_water_liters)} grams, is ${boiling_water_liters} and has a temperature of ${boiling_water_temp} K`);

}

function temperatureOfMixedContainer(First_Container, water_temp, Second_Container, boiling_water_temp) {
    total = (First_Container * water_temp + Second_Container * boiling_water_temp) / (First_Container + Second_Container);       // mixing water temperature formula
    return total;
}
const answer = temperatureOfMixedContainer(First_Container, water_temp, Second_Container, boiling_water_temp);

if (option === 1) {
    console.log(`The mixture is ${answer} F`)

} else if (option === 2) {
    console.log(`The mixture is ${answer} C`)             //if statements for printing information

}else if (option === 3) {
    console.log(`The mixture is ${answer} F`)

}else if (option === 4) {
    console.log(`The mixture is ${answer} K`)

}
