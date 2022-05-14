// PREP => Parameter, Return, Example, Pseudo
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