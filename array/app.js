const array1 = [1,2,23,56,78,55]
const array2 = [1,2,23,56,78,55]
const array3 = [1,2,23,56,78,55]

const array4 = array1.concat(array2, array3)
console.log(array4);

console.log(array1.indexOf(23)); // index numarasını verir yoksa -1 döner
console.log(array1.includes(23)); // true ya da false döner
console.log(Array.isArray(array1)); // dizi olup olmadığını görüntüleme