console.log("merhaba");
// 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını if/else ve ternary yapı ile konsola yazdıran kodu yazınız.

// const age = 55;
// const ciziten = confirm("Are you a ciziten of Turkey")
// console.log(ciziten);

// if (age >= 18 && ciziten){
//     console.log("You can vote");
// }
// else{
//     console.log("You cannot vote");
// }

// ((age >= 18) && ciziten) ? console.log(`you are ${age} years old. You can vote`): console.log(`you are ${age} years old you cant vote`);
// console.log(result);

// 2- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

// function a(){
//     console.log("ben bir void fonksiyonum");
//     //bir olay tetiklemek için
// }

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(5,8));

// function calc(celsius){
//     const hesap = (celsius * 9/5) + 32;
//     return hesap;
// }

// console.log(calc(30));



// 3- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

// const string = "hello world";
// // console.log(str.length);
// const reverseString = (str) => {
//     let newStr = "";
//     for (let i = str.length-1; i >= 0; i--){
//         // console.log(str[i]);
//         newStr += str[i];
//     }
//     return newStr;
// };
// console.log(reverseString(string));

// 4- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

// const string = "hello world";
// // console.log(str.length);
// const reverseString = (str) => {
//     let newStr = "";
//     for (let i = str.length-1; i >= 0; i--){
//         // console.log(str[i]);
//         newStr += str[i];
//     }
//     if

//     return newStr;
// };
// console.log(reverseString(string));


// 5- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?

const vowels ="aeioöüu"
const string = "hello world"
const findVowels =(str) => {
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str.vowels; j++) {

        }

    }
}


// 6- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// 7- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız? 2, 3, 5, 7, 11, … şeklinde devam eden, kendisinden ve 1'den başka pozitif böleni olmayan 2 ve 2'den büyük sayılara “asal sayı” denir.

// 8-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// 9- Bir kelime ve bir harf olmak üzere İki adet string parametre alan ve girilen harften girilen kelime içinde kaç adet olduğunu sonuç olarak dönen bir fonksiyon yazınız.
// Girilen harf kelime içinde yoksa 0 dönmeli.
// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// Notes:
// The first argument can be an empty string
