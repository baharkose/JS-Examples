// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223


let x = 3256784;

let stringX = Number(x.toString().split("").reverse().join(""));
console.log(stringX);

// 2- Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let word = "madam";

let palindrome = word === word.split("").reverse().join("") ? `it is palindrome ${word}` : `${word} it is not palindrome` 

console.log(palindrome);


// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

let string = "dog"
let str = string.split("")

let solution = function (str){
    let result = [];

    for (let i = 0; i < str.length; i++){
        for (let j = i + 1; j <= str.length; j++){
           result.push(str.slice(i, j)) 
        }
        
    }
    return result;
}
console.log(solution(string));


// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

string = "webmaster";

let alpOrder = function (str){

    let sortedStr = str.split("").sort().join("");
    return sortedStr;

}

console.log(alpOrder(string));

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

const string2 = 'the quick brown fox'

let convertStr = function (str) {

    let upperCase= str.split(" ").map(index => index[0].toUpperCase() + index.slice(1).toLowerCase())
    return upperCase;

}

console.log(convertStr(string2));


// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'


