// convertToKelvin(tempCelsius) that converts Celsius to Kelvin
// convertToKelvin(tempFahrenheit) that converts Fahrenheit to Kelvin
 
function convertToKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273.15);
    return tempKelvin;
}

function convertToKelvin(tempFahrenheit){
    let tempKelvin = Math.abs(tempFahrenheit - 32)*5 / 9 + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(28.9))
console.log(convertToKelvin(35))