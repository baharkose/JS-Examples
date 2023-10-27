//* You are given an array of objects representing a collection of products, each with a name, price, and category. Your task is to use map, filter, and reduce to calculate the average price of products in each category, and then return an array of objects containing only the categories that have an average price above 50.

//? Bu kod, öncelikle her departmanın toplam maaşını ve çalışan sayısını hesaplar ve ardından ortalama maaşı 65000'in üzerinde olan departmanları filtreler ve sonuçları konsola yazdırır.

const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
  
//Adımlar:

// 1. her kategorinin toplam ürün fiyatı ve sayısını hesaplamak için reduce kullanılır.

const categoryPrices = products.reduce((acc, product)=>{

    //? Köşeli parantezler, JavaScript nesnelerinde özelliklere erişmek için kullanılır. Bu bağlamda !acc[employee.department] ifadesindeki köşeli parantez, acc nesnesinin içindeki belirli bir özelliğe (departman adına) erişmek için kullanılır.

    //acc'ın içerisinde product.category var mı?

    if(!acc[product.category]){
        acc[product.category] = {total:0, count:0 }
    }
    // category bölümünde total ve count özellikli obje oluşturduk.

    acc[product.category].total += product.price;
    acc[product.category].count++;

    return acc; // çalıştıktan sonra accumulatörü döndürür işlem yapması için

}, {})

console.log(categoryPrices);


// filterda neden kullanmadığımız
const averageCategories = Object.entries(categoryPrices)
console.log(averageCategories);

const islem = averageCategories.filter(([category, info]) => info.total / info.count > 50).map(([category, info])=> ({category, avaragePrice: info.total / info.count}));

console.log(islem);