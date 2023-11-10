// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

let string3 = "This website is for losers LOL!";
let vowels = "aeiıuüoö";







let output = string3.split("").reduce((x,y) =>{
    if(!(vowels.includes(y.toLowerCase()))){
        x = [...x,y]
    }
    return x
},[].join(""));

console.log(output);


findVowelLetter = (a) => {
    return string3.split("").map(harf=>{
        if(vowels.includes(harf)){
            return "";
        }else{
            return harf;
        }
    }).join("")
}

console.log(findVowelLetter());


// [...x, y]: Bu ifade, bir diziye yeni bir öğe (y) eklemek için kullanılır. ...x, x dizisinin tüm öğelerini (varsa) içerir ve y ise eklenmek istenen öğeyi temsil eder. Sonuç olarak, bu ifade x dizisini korurken, y öğesini diziye ekler.

const input = [
    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"]
]



function counter(a){

    a.flat().reduce((accumulator, currentValue)=>{
    if(accumulator[currentValue]){
       return accumulator[currentValue] += 1;
    }
    else{
        return accumulator[currentValue] = 1
    }
    return accumulator;
}, {});
}

counter(input)



// Write a function for searching JavaScript arrays with binary searches.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

let numbers = [1,2,3,45,5,6,7,85,4,56,4,1,2]

let aranan = 4;

let binarySearch = (array, aranan) =>{
    let sorted = array.sort((a,b) => a - b);

    let first = sorted[0];
    let last = sorted[sorted.length - 1];

    for (let i = 0; i < sorted.length; i++){
        let guess = Math.floor((first + last)/2)
        if(aranan == guess){
            return guess;
        }
        else if(aranan < guess)
    }
}

console.log(binarySearch(aranan));



