// everytime any input is focused
// find all inputs on the page
// if the input contains text
// add class 'not focused'

function removeFocus() {
  let inputs = document.getElementsByTagName("input")
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value != "" && document.activeElement != inputs[i]) {
      inputs[i].classList.add("unfocused")
    }
  }
}