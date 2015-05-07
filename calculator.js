function addition(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y
}

function multiplication(x, y) {
  return x * y
}

function division(x, y) {
  return x / y
}

function squares(x) {
  return x * x
}

module.exports = {
  add: addition,
  subtract: subtraction,
  multiply: multiplication,
  divide: division,
  square: squares
}
