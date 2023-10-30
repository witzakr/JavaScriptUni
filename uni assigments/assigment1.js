const prompt = require("prompt-sync")();

var Celcius = parseFloat(prompt("Put in Celcius: "))
var Farenheit = parseFloat(prompt("Put in Farenheit: "))
var Kelvin = parseFloat(prompt("Put in Kelvin: "))

function convertCelciusToFarenheit(Celcius) {
    const total = (Celcius * 9/5) + 32;
    return total
}
const TotalF = convertCelciusToFarenheit(Celcius)

function convertFarenheitToCelcius(Farenheit) {
    const total = (Farenheit - 32) * 5/9;
    return total
}
const TotalC = convertFarenheitToCelcius(Farenheit)

function convertKelvinToFarenheit(Kelvin) {
    const total = (Kelvin - 273.15) * 9/5 + 32;
    return total
}
const TotalK = convertKelvinToFarenheit(Kelvin)

function convertFarenheitToKelvin(Farenheit) {
    const total = (Farenheit - 32) * 5/9 + 273.15;
    return total
}
const TotalFK = convertFarenheitToKelvin(Farenheit)


console.log(TotalF + Farenheit)
console.log(TotalC + Celcius) 
console.log(TotalK + Kelvin)
console.log(TotalFK + Farenheit)
