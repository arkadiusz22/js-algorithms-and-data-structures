/**
 * @param {Number} number
 */
function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

// Test cases
console.log(factorial(3) === 6 ? "Passed" : "Failed");
console.log(factorial(4) === 24 ? "Passed" : "Failed");
console.log(factorial(10) === 3628800 ? "Passed" : "Failed");
