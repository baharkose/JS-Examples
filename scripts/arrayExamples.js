//1 write to codes finding the student number of te given array

const students = ["Ayşe", "Aysel", "Emine"," Mukadder", "Yusuf", "Emine", "Yasemin", "Ayşe"]

const findStudent = (name) => {
    let counter = 0;
    for (let student of students){
        student === name && counter++ //? short circuit
    }
    return counter;
}

//1 write to codes finding the repeated letter given a name

let isim = "bahar"

let isimArray = isim.split("");

let tekrarEden = [];

isimArray.forEach((element,index1) => {
    console.log(element, index1);
    
    isimArray.filter((harf, index2) => {
        let count = 0;
        
       if(harf === element && !(index1 === index2)){
        count++;
        tekrarEden.push(element)
       }  
    });
});

console.log(tekrarEden);





