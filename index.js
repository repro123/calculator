const display = document.getElementById("display");

function toDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function clearAll() {
  display.value = 0;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "SyntaxError";
  }
}
