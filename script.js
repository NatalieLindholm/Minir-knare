
//Calls from html
function updateDisplay(input) {
    //updates the display
    document.querySelector(".display").innerText += input;
}

//Calls from html
function clearDisplay() {
    //Updates display
    document.querySelector(".display").innerText = "";
}

//Calls from hmtl
function calculate() {
    //variable made for eval and selects correct element
    const numbers = document.querySelector(".display").innerText

    //eval calculates qthe variable
    const result = eval(numbers)

    //updates the display with the correct answer
    document.querySelector(".display").innerText += "=" + result;
}