//* 1 CAPITAL LETTERS: The purpose of this coding challenge is to capitalize the first letter of each word in the given long text.


const text = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.`

// //! 1-  Öncelikle diziyi boşluklara göre ayırdık.
const array = text.split(" ")
console.log(array);

const array2 = []

// //! 2- Yalnızca ilk harfi büyütmek için her kelimenin ilk harfine ulaştık.
for(let i = 0; i < array.length; i++){
    let ayri = array[i].split("")
    array2.push(ayri)
}

console.log(array2);

//! 3- Yalnızca ilk harfi büyütmek için her kelimenin ilk harfine ulaştık. Ve yeni bir dizinin içine taşıdık.

//! 4- Dizinin ilk harfini çekip büyük harf yaptık. Ardından içteki diziyi join ile birleştirdik.

for(let j=0; j<array2.length; j++){
    array2[j][0] = array2[j][0].toUpperCase();
    array2[j] = array2[j].join("")

}

//! Son olarak boşluklara göre ayırdığımız diziyi tekrar join ile eski haline getirdik.

const array3 = array2.join(" ");
console.log(array3);



const upperArray = text.split(" ")

const upArray = upperArray.map((element) => element = element.charAt(0).toUpperCase) //* her elemanın o indexine ulaşır charAt

console.log(upArray);


const upperFunc = function(e){
    e = e.charAt(0).toUpperCase();
    console.log(e);
}



const newA = upperArray.forEach((element)=> upperFunc(element))
console.log(newA);

const arrayX = text.split(" ").map((a) => a[0].toUpperCase() + a.slice(1).toLowerCase())
console.log(arrayX);

const esitleme = array.join(" ");
console.log(esitleme);


const upperA