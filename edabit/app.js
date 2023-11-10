// 1'den girilen sayıya kadar olan sayıların toplamını veren fonksiyon.

// let girilenSayı = 4;
// console.log(Array(girilenSayı));
// console.log(Array(girilenSayı).fill(1));
// console.log(Array(girilenSayı).fill(1).map((eleman, indis) => eleman + indis));
// console.log(Array(girilenSayı).fill(1).map((eleman, indis) => eleman + indis).reduce((sum, sayı) => sum + sayı, 0));

/* Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

*/

// function sevenBoom(arr) {
//     return arr.join("").includes("7") ? "Boom!" : 'there is no 7 in the array';
// }

/*Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).

fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"

Notes
Code letters must be uppercase.
Date of birth is given in D/M/YYYY format.
The conversion table for months is already in the starting code.
Y is not a vowel.

*/

// const months = {
//     1: "A",
//     2: "B",
//     3: "C",
//     4: "D",
//     5: "E",
//     6: "H",
//     7: "L",
//     8: "M",
//     9: "P",
//     10: "R",
//     11: "S",
//     12: "T"
// }

// const sesli = ["a", "e", "i", "o", "u"];

// function fiscalCode(person) {
//     let result = "";

//     result += obje.name.split("").filter((harf) => !sesli.includes(harf)).join("").toUpperCase();
//     return result;
// }

// console.log(fiscalCode({
//     name: "Brendan",
//     surname: "Eich",
//     gender: "M",
//     dob: "1/12/1961"
// }) == "CHEBND61T01")
// console.log(fiscalCode({
//     name: "Helen",
//     surname: "Yu",
//     gender: "F",
//     dob: "1/12/1950"
// }) == "YUXHLN50T41")
// console.log(fiscalCode({
//     name: "Al",
//     surname: "Capone",
//     gender: "M",
//     dob: "17/1/1899"
// }) == "CPNLAX99A17")
// console.log(fiscalCode({
//     name: "Mickey",
//     surname: "Mouse",
//     gender: "M",
//     dob: "16/1/1928"
// }) == "MSOMKY28A16")
// console.log(fiscalCode({
//     name: "Marie",
//     surname: "Curie",
//     gender: "F",
//     dob: "7/11/1867"
// }) == "CRUMRA67S47")