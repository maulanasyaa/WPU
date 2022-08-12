// DOM Node Manipulation
// buat elemen baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir section a
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

// menggunakan insertBefore
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

// hapus element
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replace element
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul baru");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

//

pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";
