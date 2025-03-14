// Selecting id 
let outputscreen = document.getElementById("output-screen");
// Display Function
function display(num) {
  outputscreen.value += num;
}
// Calculate Function
function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
  } catch (err) {
    alert("Invalid");
  }
}
// Clear Function
function clr() {
  outputscreen.value = "";
}
// Delete Function
function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}
