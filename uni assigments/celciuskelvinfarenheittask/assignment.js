const prompt = require("prompt-sync")(); 

function convertCelciusToFarenheit(Celcius) {
    const total = (Celcius * 9/5) + 32;
    return total
}
const TotalF = convertCelciusToFarenheit(Celcius);

function convertFarenheitToCelcius(Farenheit) {
    const total = (Farenheit - 32) * 5/9;
    return total
}
const TotalC = convertFarenheitToCelcius(Farenheit);

function convertKelvinToFarenheit(Kelvin) {
    const total = (Kelvin - 273.15) * 9/5 + 32;
    return total
}
const TotalK = convertKelvinToFarenheit(Kelvin);

function convertFarenheitToKelvin(Farenheit) {
    const total = (Farenheit - 32) * 5/9 + 273.15;
    return total
}
const TotalFK = convertFarenheitToKelvin(Farenheit);


console.log("1. Add Celcius to Farheneit\n2. Add Farenheit to Celcius\n3. Add Kelvin to Farenheit\n4. Add Farenheit to Kelvin");

const answer = parseInt(prompt("Which option do you choose?: "));

if (answer === 1) {
    var Celcius = parseFloat(prompt("Put in Celcius: "));
    var Farenheit = parseFloat(prompt("Put in Farenheit: "));
    const TotalF = convertCelciusToFarenheit(Celcius);
    console.log(TotalF + Farenheit);

} else if (answer === 2) {
    var Farenheit = parseFloat(prompt("Put in Farenheit: "));
    var Celcius = parseFloat(prompt("Put in Celcius: "));
    const TotalC = convertFarenheitToCelcius(Farenheit);
    console.log(TotalC + Celcius) 

} else if (answer === 3) {
    var Kelvin = parseFloat(prompt("Put in Kelvin: "));
    var Farenheit = parseFloat(prompt("Put in Farenheit: "));
    const TotalK = convertKelvinToFarenheit(Kelvin);
    console.log(TotalK + Kelvin)

} else if (answer === 4) {
    var Farenheit = parseFloat(prompt("Put in Farenheit: "));
    var Kelvin = parseFloat(prompt("Put in Kelvin: "));
    const TotalFK = convertFarenheitToKelvin(Farenheit);
    console.log(TotalFK + Farenheit)
}

