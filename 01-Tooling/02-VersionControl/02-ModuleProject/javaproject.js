/**Write a function that takes a number and returns true 
if it is a positive number and false if it is a negative number.*/
const isNumberPositive = (num) => {
        if (num < 0){
        console.log (false);
    } else {
        console.log (true);
    }
}

isNumberPositive(-1);
isNumberPositive(3);
isNumberPositive(-20)

/**Write a function that takes a number of days 
 * and converts it into an age. */

const convertDaysToAge = (days) => {
    const age = parseFloat(days / 365).toFixed(1);
    console.log(`${days} days is the same as ${age} years old.`)
}

convertDaysToAge (9739);
convertDaysToAge (52782);
convertDaysToAge (7482);

/**Write a function that takes three numbers 
 and returns the largest of the three numbers. */

 const getLargestNumber = (num1, num2, num3) => {
    const largest = Math.max (num1, num2, num3);
    console.log(`The largest number is ${largest}.`)
 }

 getLargestNumber (2, 9, 10);
 getLargestNumber (434, 942, 882);
 getLargestNumber (2973, 9812, 9182);

 /**Write a function that takes an array of names and returns 
  * the last name from the array of names */


 const getLastName = (names) => {
    for(let i = 0; i < names.length; i++){
        if (i === names.length - 1){
            return names[i];
        }
    }
}

let lastName = getLastName(["Charlie", "Rob", "Andy"]);
console.log(lastName);

lastName = getLastName(["Ash", "Stu"]);
console.log(lastName);

/** Write a function that takes an array 
 * of numbers and returns true if all of the numbers 
 * are positive. It should return false if there are one or 
 * more negative numbers in the array.*/

const allNumbersPositive = (numbers) => {
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < 0){
            return false;
        } else {
            return true;
        }
    }
}

console.log(allNumbersPositive([2, 4, 5]));
console.log(allNumbersPositive([-5, 4, 6]));
