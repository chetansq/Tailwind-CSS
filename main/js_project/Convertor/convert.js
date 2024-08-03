let input_text = document.getElementById("text");


let fahrenheit = document.getElementById("fan");
let celcius = document.getElementById("cel");

function fahrenheit_() {
    fahrenheit.innerText = (input_text.value * (9 / 5) + 32).toFixed(2);
}

function celcius_() {
    celcius.innerText = ((input_text.value - 32) * 5 / 9).toFixed(2);


}

