"use strict";

/**Write a function that takes a number and returns true 
if it is a positive number and false if it is a negative number.*/
var positiveOrNegative = function positiveOrNegative(num) {
  if (num < 0) {
    console.log(false);
  } else {
    console.log(true);
  }
};

positiveOrNegative(-1);
positiveOrNegative(3);
positiveOrNegative(-20);
/**Write a function that takes a number of days 
 * and converts it into an age. */

var convertDaysToAge = function convertDaysToAge(days) {
  var age = parseFloat(days / 365).toFixed(1);
  console.log("".concat(days, " days is the same as ").concat(age, " years old."));
};

convertDaysToAge(9739);
convertDaysToAge(52782);
convertDaysToAge(7482);