function celsiusToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
}

function fahrenheitToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheitInput").value);
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.";
}