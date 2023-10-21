// Array Questions:
// How to get removed elements of a given array until the passed function returns true in JavaScript ?

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

//? 1- Using slice

numbers.splice(0,5)
console.log(numbers);

//! shift başlangıçtaki elemanı siler - removed the first element in array

//? Using shift and for
const numbers1 = [1,2,3,4,5,6,7,8,9,10,11,12]

for(let i = 0; i < numbers1.length; i++){
    i < 6 && numbers1.shift() // pop() -> sondan beş eleman siler. removed last 5 element
}

console.log(numbers1);

//? Using slice

const numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12]

//removing elements less than 5 and returning them

let limiter = 5;

//function which slices the array taking limiter as parameter

let retrieveRemoved = function (array, limiter){
    let i;
    for(i = 0; i < array.length; i++){
        // If the number value is greater or equal than limiter
        if(array[i] >= limiter){
            return array.slice(0,i);
        }
    }
    return array.slice(i);
}

let removed = retrieveRemoved(numbers2, limiter);console.log("the removed elements: ", removed);
console.log(numbers2);






// How to filter values from an array for which the comparator function does not return true in JavaScript ?





// How many numbers in the given array are less/equal to the given value using the percentile formula ?



// How to remove specific elements from the left of a given array of elements using JavaScript ?



// How to convert a 2D array to a comma-separated values (CSV) string in JavaScript ?



// How to count number of occurrences of repeated names in an array of objects in JavaScript ?




// How to count number of data types in an array in JavaScript ?



// How to remove falsy values from an array in JavaScript ?



// How to move specified number of elements to the end of an array in JavaScript ?



// How to flatten a given array up to the specified depth in JavaScript ?





// How to get the standard deviation of an array of numbers using JavaScript ?




// How to get symmetric difference between two arrays in JavaScript ?





// How to get n largest elements from array in JavaScript ?





// How to find every element that exists in any of two given arrays once using JavaScript ?






// How to find all elements in a given array except for the first one using JavaScript ?





// How to remove n elements from the end of a given array in JavaScript ?





// How to create an object from two arrays in JavaScript?






// How to create a string by joining the elements of an array in JavaScript ?




// How to splice an array without mutating the original Array?




// Swapping two array elements in a single line using JavaScript
// How to create HTML list from JavaScript array ?



// How to get the same value from another array and assign to object of arrays?



// How to truncate an array in JavaScript ?



// How to print object by id in an array of objects in JavaScript?



// How to convert a number into array in JavaScript ?




// How to print unique elements from two unsorted arrays using JavaScript ?



// How to transform a JavaScript iterator into an array?





// How to add elements to an existing array dynamically in JavaScript ?




// How to replace an item from an array in JavaScript?