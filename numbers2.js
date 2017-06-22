// Write a function isOdd(num) which takes as the argument num a number.
// It returns a boolean, true if num is odd, and false otherwise.
// Examples:
// isOdd(2) => false
// isOdd(5) => true
// isOdd(-17) => true

function isOdd(num) {
  var bool = num % 2 !== 0;
  return bool;
}

//or

function is0dd(num) {
return num % 2 !==0;
  }

// Write a function plusFive(num) which takes as the argument num a number.
// It returns the sum of num and 5.
// Examples:
// plusFive(0) => 5
// plusFive(-2) => 3
// plusFive(21) => 26

function plusFive(num) { // function definition
  var sum = num + 5;
  return sum;
}

console.log("--plusFive--")
console.log(plusFive(0)); // a function call
console.log(plusFive(-2)); // a function call
console.log(plusFive(21)); // a function call


// Write a function threeOrSeven(num) which takes as the argument num a number.
// It returns a boolean, true if the number is divisible by 3 or 7, and false otherwise.
// Examples:
// threeOrSeven(3) => true
// threeOrSeven(35) => true
// threeOrSeven(10) => false
// threeOrSeven(21) => true

function threeOrSeven(num) {
 return num % 3 === 0 || num % 7 === 0

}

console.log{"--threeOrSeven--"}
console.log(threeOrSeven(3) === true);
console.log(threeOrSeven(35) === true);
console.log(threeOrSeven(10) === false);
console.log(threeOrSeven(21) === true);

// Order of Operations: Evaluate each expression.

1 + 1 * 5;

(1 + 1) * 5;

1 + 2 - 5 / 6 - 1;

5 * 5 % 13;

5 / (-1 * (5 - (-10)));
