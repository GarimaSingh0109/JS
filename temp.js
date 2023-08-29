// Conversion of temerature from Celsius to Fahrenheit and vice versa
// input: temperature in Celsius or Fahrenheit
//output: temperature in Fahrenheit or Celsius
// c=5/9(f-32)
//f=9/5c+32
var celsius = 60;
var fahrenheit = 45;
//var celsius = prompt("Enter temperature in Celsius: ");
//var fahrenheit = prompt("Enter temperature in Fahrenheit: ");
var celsiusToFahrenheit = (celsius * 9 / 5) + 32;
var fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature in Celsius: " + celsius + " and in Fahrenheit: " + celsiusToFahrenheit);
console.log("Temperature in Fahrenheit: " + fahrenheit + " and in Celsius: " + fahrenheitToCelsius);
//document.write("Temperature in Celsius: " + celsius + " and in Fahrenheit: " + celsiusToFahrenheit + "<br>");
//document.write("Temperature in Fahrenheit: " + fahrenheit + " and in Celsius: " + fahrenheitToCelsius + "<br>");