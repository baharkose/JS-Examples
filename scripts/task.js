// const kelime = prompt("kelime giriniz")
// console.log(kelime);


const kelime = "bahar";



for (let i = 0; i < kelime.length; i++){

    console.log(kelime[i], i);
    
    for (let j = 1; j < kelime.length-1; j){

        console.log(kelime[j], j);

        if(kelime[i]===kelime[j]){
            console.log("false");
            break;
        }
        else{
            console.log("true");

        }
        j++;
    }
}
