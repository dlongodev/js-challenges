// PREP => Parameter, Return, Example, Pseudo
//------------------------------------------------------------------------------------------------------
// Write a function that determines whether the passed in arrays are similar.Similar means they contain the same elements, and the same number of occurrences of elements.

function arraysSimilar(arr1, arr2) {
    // check if the length are equal
    // check if arrays have same value
    arr1 = arr1.sort((a, b) => a - b)
    arr2 = arr2.sort((a, b) => a - b)

    return arr1.lenth > arr2.lenth
        ? arr1.every((value, index) => value === arr2[index])
        : arr2.every((value, index) => value === arr1[index])
}


const arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]


console.log(arraysSimilar(arr1, arr2)); // Should equal true
console.log(arraysSimilar(arr2, arr3)); // Should equal false
console.log(arraysSimilar(arr3, arr4)); // Should equal false
//------------------------------------------------------------------------------------------------------
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    //replace vowels with empty string using regex
    let newStr = str.replace(/[aeiouAEIOU]/g, "")
    return newStr;
}

console.log(disemvowel("This website is for losers LOL!"))