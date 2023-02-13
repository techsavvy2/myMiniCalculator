let num1 = 8
let num2 = 2
let num3 = 5
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

document.getElementById("num3-el").textContent = num3

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2 + 5
    sumEl.textContent = "Sum: " + result
}
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function subtract() {
    let result = num1 - num2 * num3
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2 + num3
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2 - num3
    sumEl.textContent = "Sum: " + result
}