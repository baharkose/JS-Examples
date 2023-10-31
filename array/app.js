// 1- Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

let x = 3256784;

let stringX = Number(x.toString().split("").reverse().join(""));
console.log(stringX);

// 2- Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

let word = "madam";

let palindrome =
  word === word.split("").reverse().join("")
    ? `it is palindrome ${word}`
    : `${word} it is not palindrome`;

console.log(palindrome);

//3- Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

let string = "dog";
let str = string.split("");

let solution = function (str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
};
console.log(solution(string));

//4- Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

string = "webmaster";

let alpOrder = function (str) {
  let sortedStr = str.split("").sort().join("");
  return sortedStr;
};

console.log(alpOrder(string));

//5- Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

const string2 = "the quick brown fox";

let convertStr = function (str) {
  let upperCase = str
    .split(" ")
    .map((index) => index[0].toUpperCase() + index.slice(1).toLowerCase());
  return upperCase;
};

console.log(convertStr(string2));

//6- Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

let kelime = "Web Development Tutorial";

let result = kelime.split(" ");

let longest = "";

//1. ÇÖZÜM

// for (let i = 0; i < result.length; i++) {

//   if (result[i].length > longest.length) {
//     longest = result[i];
//   }
  
// }

// 2. ÇÖZÜM

let sayilar = [1,23,565,44]


let sum = sayilar.reduce((acc,b) => acc + b, 0)
console.log(sum);

let longestWord = sayilar.reduce((uzunKelime, kelime) => (kelime.length > uzunKelime.length ? kelime : uzunKelime), "") 

console.log(longestWord);

// console.log(`Longest word is: ${longest}`);




//7- Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

let string3 = 'The quick brown fox';

// const vowels = ["a","e","i","ı","u","ü","o","ö"];
const vowels = "aeiıuüoö"
let count = 0;

for (let k = 0; k < string3.length; k++) {
    if(vowels.includes(string3[k])){
        count ++;
    }
}

console.log(count);

let result3 = string3.split("")



//REDUCE VERSION

const findVowels = (sentence) => {
    const vowelsArr = ["a","e","i","u","o","A","E","I","U","O"]
    let arr = sentence.split("")
    let counter = arr.reduce((count, letter) => {
        if(vowelsArr.includes(letter)){
            count++  
        }
        return count
    }, 0)
    console.log(counter)
}

findVowels("The quick brown fox")



// let result3 = string3.split("").reduce((count, element) => Number((element.includes(vowels))),0)
// console.log(result3);

//8- Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.


function prime(number) {

    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
         if (number % i === 0 || number % (i + 2) === 0) return false;
    }

  return true;
}

console.log(prime(12));
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// 9. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.
