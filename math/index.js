function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(multiply(10, 20));
console.log(divide(10, 20));

export default {
  add,
  subtract,
  multiply,
  divide,
};
