//* Task : You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "IT" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 65000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" },
   ];


// Adımlar:
// 1. Her departmanın toplam maaşı ve çalışan sayısını hesaplamak için 'reduce' kullanılır.

const departmentSalaries = employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
        acc[employee.department] = { total: 0, count: 0 }; // department bölümüne total ve count adında objeler oluşturduk
    }

    acc[employee.department].total += employee.salary;
    acc[employee.department].count++;

    return acc;
}, {});

// Bu kod, her departmanın toplam maaşı ve çalışan sayısını hesaplamak için bir reduce işlemi gerçekleştiriyor. Sondaki süslü parantez ({}) başlangıç değeri olarak kullanılır. reduce fonksiyonunun başlangıç değeri, bir akümülatör olarak işlev görür. İlk olarak, boş bir nesne ({}) olarak başlatılır ve her departmanın toplam maaşı ve çalışan sayısını saklamak için kullanılır.

// İlk olarak, departmanın daha önce oluşturulup oluşturulmadığını kontrol ederiz (if (!acc[employee.department])). Eğer o departman daha önce tanımlanmamışsa, bu departman için bir nesne oluşturulur (acc[employee.department] = { total: 0, count: 0 }). Bu nesne, departmanın toplam maaşını ve çalışan sayısını saklar.

// Daha sonra, her bir çalışanın maaşı, ilgili departmanın toplam maaşına eklenir ve çalışan sayısı bir artırılır. Sonuç olarak, reduce işlemi sonunda departmentSalaries adlı bir nesne elde edilir ve her departmanın toplam maaşını ve çalışan sayısını içerir.

// Bu nedenle sondaki süslü parantez ({}), başlangıç değeri olarak kullanılarak işlemi başlatır ve sonuçları saklamak için kullanılır.


console.log(departmentSalaries);
// 2. Ortalama maaşı 65000'in üzerinde olan departmanları 'filter' ile filtrelenir
// ve departman adı ve ortalama maaşı içeren bir nesne dizisi oluşturulur.

const aboveAverageDepartments = Object.entries(departmentSalaries)
    .filter(([department, info]) => info.total / info.count > 65000)
    .map(([department, info]) => ({ department, averageSalary: info.total / info.count }));

// 3. Sonuç konsola yazdırılır.

console.log(aboveAverageDepartments);