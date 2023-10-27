/**Write a function that takes a number and returns true 
if it is a positive number and false if it is a negative number.*/
const positiveOrNegative = (num) => {
        if (num < 0){
        console.log (false);
    } else {
        console.log (true);
    }
}

positiveOrNegative(-1);
positiveOrNegative(3);
positiveOrNegative(-20)

/**Write a function that takes a number of days 
 * and converts it into an age. */

const convertDaysToAge = (days) => {
    const age = parseFloat(days / 365).toFixed(1);
    console.log(`${days} days is the same as ${age} years old.`)
}

convertDaysToAge (9739);
convertDaysToAge (52782);
convertDaysToAge (7482);