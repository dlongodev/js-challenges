// PREP => Parameter, Return, Example, Pseudo
//------------------------------------------------------------------------------------------------------

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.In this Kata, we will restrict ourselves to decimal(base 10).

// For example, take 153(3 digits), which is narcisstic:

// 1 ^ 3 + 5 ^ 3 + 3 ^ 3 = 1 + 125 + 27 = 153
// and 1652(4 digits), which isn't:

// 1 ^ 4 + 6 ^ 4 + 5 ^ 4 + 2 ^ 4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false(not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g.PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non - zero integers will be passed into the function.

function narcissistic(value) {
    // split the value into array of numbers
    const valArr = ("" + value).split("")
    //map the array to create an array to the power of it's length
    const powerArr = valArr.map(val => {
        return Math.pow(parseInt(val), valArr.length)
    })
    // add the values in the array
    const sum = powerArr.reduce((a, b) => a + b)
    // if the sum is equal the value, return true, else return false
    return sum === value
    // Code me to return true or false
}

console.log(narcissistic(153)) //true
console.log(narcissistic(371)) //true
console.log(narcissistic(1652)) //false


//------------------------------------------------------------------------------------------------------
// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
    let newArr = a.filter(i => !b.includes(i))
    return newArr
}
// If a value is present in b, all of its occurrences must be removed from the other:
console.log(arrayDiff([1, 2], [1]))
// [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]))
// [1, 3]