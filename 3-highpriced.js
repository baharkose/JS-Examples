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

const groupedProducts = new Map();

//?   Bu satırda, groupedProducts adında yeni bir Map nesnesi oluşturuluyor. Bu Map, anahtar-değer çiftlerini saklamak için kullanılır. Burada, kategorileri anahtar olarak ve her kategoriye ait ürünleri bir dizi olarak saklamak amacıyla kullanılacak.

products.forEach((product) => {
  const category = product.category; //anahtar
  if (!groupedProducts.has(category)) {
    groupedProducts.set(category, []);
  }
  groupedProducts.get(category).push(product);
});

console.log(groupedProducts);

// Ürünün kategorisi product.category ile alınıyor ve category adlı bir değişkene atanıyor.

// groupedProducts.has(category) ile groupedProducts içinde kategori zaten var mı diye kontrol ediliyor. Eğer ilgili kategori groupedProducts içinde yoksa, aşağıdaki işlemler gerçekleşir:

// groupedProducts.set(category, []): Yeni bir giriş eklenir. Bu girişin anahtarı, kategori adıdır, ve başlangıçta bu anahtara karşılık gelecek değer boş bir dizi ([]) olur.
//    Eğer kategori groupedProducts içinde zaten varsa, groupedProducts.get(category) ile bu kategoriye ait diziyi alınır ve bu diziye mevcut ürün eklenir (groupedProducts.get(category).push(product)).

// Sonuç olarak, bu kod parçası, ürünleri kategorilere göre gruplandırmak için etkili bir yol sunar. groupedProducts adındaki Map nesnesi, her kategoriye ait ürünleri içeren dizileri saklar ve her kategori adına karşılık gelen bir anahtar içerir. Bu sayede, ürünleri kategorilere göre kolayca erişebilirsiniz.

const categoryAverages = {};

// 2 değer döner 1. si kategorideki elekronikler, 2. si elbiseler

groupedProducts.forEach((productsInCategory, category) => {
    //1. objenin totali ve 2. objenin totalini ayrı alır
  const total = productsInCategory.reduce(
    (sum, product) => sum + product.price,
    0
  );
  const average = total / productsInCategory.length;
  categoryAverages[category] = average;
});

console.log(categoryAverages);

// Ortalaması 50'den büyük olan kategorileri listeleyelim
const categoriesAbove50 = Object.keys(categoryAverages).filter(
  (category) => categoryAverages[category] > 50
);

console.log("Ortalaması 50'den büyük kategoriler:");
categoriesAbove50.forEach((category) => {
  console.log(category);
});
