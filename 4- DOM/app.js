const paragraf = document.querySelectorAll("p")
console.log(paragraf);

let birinci = document.querySelector("#first")
console.log(birinci);

console.log(document.querySelectorAll("p"));


document.querySelectorAll("p").forEach(item => console.log(item))

document.querySelectorAll("p").textContent = "hasan"
const array = [...document.querySelectorAll("p")]
array.map((item) => (item.className = "id"));

console.log(array);
// diziyi sıfırlama array.length = 0

const paragraf2 = document.querySelectorAll("p")

let len = paragraf2.length;



console.log(len);
for (let i = 0; i < len; i++) {
    paragraf2[i].style.fontSize="2rem";
    if(i%2==0){
        paragraf2[i].style.color = "green"
    }
    else{
        paragraf2[i].style.color ="red"
    }
}



