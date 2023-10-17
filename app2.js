// 1. Soru: Verilen bir dizi içindeki tek sayıları bulup yeni bir diziye ekleyin.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers = [1,2,3,4,5,6,7,8]
function isEven(a){
    if(a%2==0)
    return true;
}

const filtered = numbers.filter(isEven);
console.log(filtered);

const newNumbers = [];
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i]%2==1){
        newNumbers.push(numbers[i]);
    }
}

console.log(newNumbers);



// 2. Soru: Bir dizi içindeki sayıları büyükten küçüğe sıralamak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

// let numbers = [8, 4, 6, 2, 9, 5, 7];

const sortedNumbers = numbers.sort((a, b) => a - b) ;
console.log(sortedNumbers);



// 3. Soru: Bir dizi içindeki metin öğelerini birleştirerek tek bir metin oluşturmak için hangi dizi yöntemini ve diziyi nasıl kullanırsınız?

let words = ["Merhaba", "dünya", "bu", "bir", "örnektir"];

let joinedWords = words.join(" ");
console.log(joinedWords);




// 4. Soru: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.
let sentence = "this is a sentence";
let reverseSentence =  sentence.split(" ").reverse().join(" ")
console.log(reverseSentence);

// let sentence = "JavaScript harika bir dil";



// 5. Soru: Bir metinde "u" harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?

let metin = "Bir metinde harfini içeren kaç kelime olduğunu bulmak için hangi dizi yöntemini kullanırsınız ve nasıl yaparsınız?"



let count = 0;
for(let i = 0; i < metin.length; i++){
    if(metin[i].includes('u')){
        count ++;
    }
}
console.log(count);


// let text = "There are many shorthand techniques in JavaScript that can shorten the code length, reduce redundancy, and improve the readability and maintainability of the code. This article will introduce 20 JS abbreviation techniques to improve efficiency, helping you say goodbye to the shit mountain and write elegant code easily!";

console.clear();

// 6. Soru: İki dizi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

const newList = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            newList.push(arr1[i]);
        }
    }
}

console.log(newList);


// 7. Bir isim listesindeki isimlerden ilk 10 ve son 10 ismi çıkartarak yeni bir sıralı liste oluşturun.


let isimListesi = ["Ali", "Ayşe", "Mehmet", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Mustafa", "Elif", "Baran", "Gamze", "Eren", "Dilara", "Burak", "Pınar", "İsmail", "Sibel", "Murat", "Gülşah", "Ahmet", "Hatice", "Kemal", "Sevgi", "Yusuf", "Aslı", "Can", "Zehra", "Onur", "Ebru", "Serkan", "Nazlı", "Cemal", "Gonca", "Ercan", "Esra", "Hakan", "Nur"];

