// Calculator program

const display = document.getElementById('display')

function appendToDisplay(input) {
  display.value += input
}

function clearDisplay() {
  display.value = ''
}

function calculate() {
  try {
    display.value = eval(display.value)
  } catch (error) {
    display.value = 'Error'
  }
}

document.addEventListener('keydown', (e) => {
  const num = Number(e.key)
  if (num >= 0 && num <= 9) {
    appendToDisplay(e.key)
  } else if (e.key == '.') {
    appendToDisplay(e.key)
  } else if (e.key == 'Enter') {
    document.activeElement.blur()
    calculate()
  } else if (e.key == '*' || e.key == '/' || e.key == '+' || e.key == '-') {
    appendToDisplay(e.key)
  } else if (e.key.toLowerCase() == 'c') {
    clearDisplay()
  }
})
