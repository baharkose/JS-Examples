// arrays iterations questions (forEach, map, filter, reduce)


// soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız? 

let numbers1 = [1, 2, 3, 45, 65]

let sum = 0;

numbers1.forEach(item =>{
    sum += item
})

let result = numbers1.reduce((sum, item) => sum + item,0 )
console.log(result);





// soru 2: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

let numbers3 = [1, 2, 3, 4, 5];

const kare = numbers3.map(item => item**2)

console.log(kare);



// soru 3: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.

let numbers4 = [1, 2, 3, 4, 5];




// soru 4: Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).

// let numbers5 = [1, 2, 3, 4, 5];

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [];

// originalArray.forEach(item => {
//     reversedArray.unshift(item);
// });

// console.log(reversedArray);

// const numbers = [18, 24, 34, 300, 5];
// const reversedNumbers = [];

// numbers.forEach((number, index) => {
//   reversedNumbers[numbers.length - 1 - index] = number;
// });

// console.log(reversedNumbers);


// soru 5: Soru: Bir dizi içindeki metin öğeleri içeren bir dizi verildiğinde, her öğeyi tersine çevirerek yeni bir dizi oluşturun.
// çıktı : ["tpircSavaJ", "nohtyP", "avaJ", "++C"]

// let words = ["JavaScript", "Python", "Java", "C++"];

// let newWords = words.map((item) => (item.split("").reverse().join('')));
// console.log(newWords);


// soru 6: Soru: Bir dizi içindeki asal sayıları filtreleyerek  yeni bir dizi oluşturun.

// let numbers6 = [1, 2, 3, 8,18,  21, 23, 17, 55, 41, 44, 18, 53, 42, 19];
// let newArray = []

// let AsalNumbers = numbers6.filter((item) =>{
//     if (item <= 1) {
//         return false; // 1 ve daha küçük sayılar asal değil.
//     }

//     for(let i=2; i < item; i++){
        
//         if (item % i === 0){
//             return false;
//         }
//     }  
//     newArray.push(item);
//     return true;

    
// });
// console.log(AsalNumbers);
// console.log(newArray);


// let numbers6 = [1, 2, 3, 8, 21, 23, 41, 44, 53];
// let newArray = [];

// let AsalNumbers = numbers6.filter((item) => {
//     if (item <= 1) {
//         return false; // 1 ve daha küçük sayılar asal değil.
//     }

//     for (let i = 2; i < item; i++) {
//         if (item % i === 0) {
//             return false; // Asal olmayan bir sayı bulundu.
//         }
//     }

//     newArray.push(item); // Asal sayıları yeni diziye ekleyin.
//     return true;
// });

// console.log(AsalNumbers); // Asal sayılar.
// console.log(newArray); // Tüm sayılar (asal ve asal olmayan).



// soru 7: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.

let numbers7 = [1, 2, 3, 4, 5];

let cift = numbers7.map((item)=> item**2);
console.log(cift);

let cift2 = cift.filter((item)=> item%2==0)
console.log(cift2);

let ikiKat = cift2.reduce((sum, item) => sum + (item*2), 0); //süslü parantez ile işlem yapıldığında başlangıç değeri belirlenir ancak reduce de sum gibi değişkenlere başlangıç değeri tanımlanmalıdır.

console.log(ikiKat);

// let toplam = ikiKat.reduce((sum, item) => sum += item)
// console.log(toplam);
// console.log(toplam)

// let tek = numbers7.map((item)=> item**2).filter((item)=> item%2==0).map((item) => (item * 2)).reduce((sum, item) => sum += item)


// console.log(tek);

