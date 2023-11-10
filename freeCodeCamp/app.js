// Promises in JavaScript

const myPromise = new Promise((resolve, reject)=>{
    // condition
})

function  addName (time, firstName){
    return new Promise((resolve, reject)=>{
        if(firstName){
            setTimeout(()=>{
                console.log(firstName);
                resolve();
            }, time)
        }else{
            reject('No such name');
        }
    })
}

addName(2000, "Joel")
    .then(()=> addName(2000, "Victoria"))
    .then(()=> addName(2000, "John"))
    .then(()=> addName(2000, "Doe"))
    .catch((err)=> console.log(err))


// Reduce in JS

let staffs = [
    { name: "Susan", age: 14, salary: 100 },
    { name: "Daniel", age: 16, salary: 120 },
    { name: "Bruno", age: 56, salary: 400 },
    { name: "Jacob", age: 15, salary: 110 },
    { name: "Sam", age: 64, salary: 500 },
    { name: "Dave", age: 56, salary: 380 },
    { name: "Neils", age: 65, salary: 540 }
  ];
    

//   Let’s now calculate the 10% tithe for all staff and get the total. We could just get the 10% from the total or first get it from each salary before adding them up.

const salaryInfo = staffs.reduce((total, staff)=>{

},
{totalSalary: 0, totalTithe: 0})



