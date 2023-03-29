const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let result = array.reduce((acumulator, currentElement) => acumulator + currentElement, 0);
	return result;
};

const multiply = function(factorsArray) {
  let product = factorsArray.reduce((acumulator, currentElement) => acumulator * currentElement);
  return product;
};

const power = function(x,n) {
  let result =x;
	for (let i = 0; i <= n-2; i++){
    result *= x;
  };
  return result;
};
 
const factorial = function(number) {
	let result = number;
  if (number === 0 || number === 1){
    return result=1;
  } else {
  for ( let i= number-1; i > 0; i--) {
    result *= i;
  }}
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
