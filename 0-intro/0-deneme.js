const myMap = new Map();
myMap.set("anahtar", "ayşe")
const deger = myMap.get("anahtar")
console.log(deger);
const varMi = myMap.has("anahtar")
console.log(varMi);


const input = [1, -4, 12, 0, -3, 30, 42, -150];
const sum = input.filter(number => number>0).reduce((acc, number)=> acc + number, 0);

console.log(sum);

const input2 = "John Ronald Reuel Tolkien"

const words = input2.split(" ")

let initials = "";

for (word of words){
    initials += word[0].toUpperCase();
}

console.log(initials);

const names = ["Alice", "Bob", "Charlie"];

const nameLengths = names.map(name => name.length)
console.log(nameLengths);

const words1 = ["apple", "banana", "cherry"];
//Write your code here
const capitalizedWords = words1.map(word => word.toUpperCase())

console.log(capitalizedWords) //['APPLE', 'BANANA', 'CHERRY']