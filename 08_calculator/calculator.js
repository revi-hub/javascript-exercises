const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce( (sum, curr) => sum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce( (total, curr) => total * curr);
};

const power = function(a, b) {
  let result = a;
  for(let i = 1; i < b; i++){
    result = result * a;
  }
  return result;
};

const factorial = function(a) {
  if(a == 0)
  return 1;
let result = 1;
	for(let i = 2; i <= a; i++){
    result *= i
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
