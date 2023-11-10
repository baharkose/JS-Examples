let data= ['C1234 - John Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']


let body = document.querySelector("body")
let table = document.createElement("table")
body.appendChild(table)

let header = ["studentNo", "nameSurname", "location", "department"]

let tr = document.createElement("tr")
table.appendChild(tr)

let td = ""

for (let i = 0; i <header.length; i++) {
    td = document.createElement("td")
    tr.appendChild(td)
    td.textContent = header[i]
}

data.forEach((item)=>{
    let elemanlar = item.split(",")
    let studentNo = elemanlar[0].split("-")[0]
    let nameSurname = elemanlar[0].split("-")[1]
    let lokasyon = elemanlar[1]
    let department = elemanlar[2]
    console.log(studentNo);

    let satir = table.insertRow();
// tabloya eleman pushlama işlemi

    satir.insertCell().innerText = studentNo
    // hücre içerisine eleman ekleme
    satir.insertCell().innerText = nameSurname
    satir.insertCell().innerText = lokasyon
    satir.insertCell().innerText = department


})

