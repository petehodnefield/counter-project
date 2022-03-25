// Set initial count
let count = 0;

var counterMonger = document.querySelector("#span");
var decreaseButton = document.querySelector(".decrease");
var resetButton = document.querySelector(".reset");
var increaseButton = document.querySelector(".increase");

console.dir(counterMonger);

var decreaseSpan = function() {
    counterMonger.innerHTML = count--;
}
var increaseSpan = function() {
    counterMonger.innerHTML = count++;
}
var resetSpan = function() {
    document.querySelector("#span").innerHTML = 0;
    count = 0;
}
decreaseButton.addEventListener("click", decreaseSpan);
increaseButton.addEventListener("click", increaseSpan);
resetButton.addEventListener("click", resetSpan);


// When the decrease button is selected, subtract count-- to the span element