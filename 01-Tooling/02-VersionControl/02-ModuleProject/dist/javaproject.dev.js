"use strict";

/**Write a function that takes a number and returns true 
if it is a positive number and false if it is a negative number.*/
var isNumberPositive = function isNumberPositive(num) {
  if (num < 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};

isNumberPositive(-1);
isNumberPositive(3);
isNumberPositive(-20);
/**Write a function that takes a number of days 
 * and converts it into an age. */

var convertDaysToAge = function convertDaysToAge(days) {
  var age = parseFloat(days / 365).toFixed(1);
  console.log("".concat(days, " days is the same as ").concat(age, " years old."));
};

convertDaysToAge(9739);
convertDaysToAge(52782);
convertDaysToAge(7482);
/**Write a function that takes three numbers 
 and returns the largest of the three numbers. */

var getLargestNumber = function getLargestNumber(num1, num2, num3) {
  var largest = Math.max(num1, num2, num3);
  console.log("The largest number is ".concat(largest, "."));
};

getLargestNumber(2, 9, 10);
getLargestNumber(434, 942, 882);
getLargestNumber(2973, 9812, 9182);