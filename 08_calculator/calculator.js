const add = function(num1, num2) {
  return 0 + num1 + num2;
	
};

const subtract = function(num1, num2) {
  return 0 + num1 - num2;
	
};

const sum = function(nums = []) {
  return nums.length <= 0 ? 0 :  nums.reduce((a,b) => a+b )
  
	
};

const multiply = function(nums = []) {
  return nums.length <= 0 ? 0 :  nums.reduce((a,b) => a*b )

};

const power = function(num, powerTo) {
  return num <= 0  ? 1 : Math.pow(num, powerTo)  ;
	
};

const factorial = function(factor) {
  result = 1;

  for(let i = 1; i <= factor; i++ ){
    result = result*i
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
