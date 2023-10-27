const numbers = [1,2,3,4,5,6,7,8,9,10,11]

let result = numbers.map((item) => item**2)
console.log(result);


// pozitif sayıların toplamını bulunuz

let numbers2 = [1,2,-3,4,-5,6,-7,8]
console.log(numbers2.filter((item)=> item > 0).reduce((sum, num)=> sum + num,0));

const result2 = numbers2.reduce((sum, int)=> int > 0 ? sum + int: sum + 0, 0)

console.log(result2);


//? calculate mean, median and number of elements in

const numbers3 = [12, 46 , 32, 64]

const mean = numbers3.sort((a,b) => a - b).reduce((sum, number)=> sum + number, 0) / numbers3.length;


const result3 = numbers3.reduce((sum,int, index, array) =>{
    sum.mean += int / array.length;

    if(array.length %2 ===0){
        if(index === array.length/2 -1){
            sum.median  = int
        }
        else if(index === array.length/2){
            sum.median += int
            sum.median /= 2
        }else{
           if(index === array.length-1/2) sum.median = int; 
        }
    }
    return sum;
}
, {mean:0, median:0})

console.log(result3);


//? Hangi harften kaç tane vardır?

const input8 = [
    ["a", "b", "c"],
    ["c","d","f"],
    ["d","f","g"],
]








