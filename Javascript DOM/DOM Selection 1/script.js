// DOM Selection
// document.getElementById() -> element

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ddd";
judul.innerHTML = "MaulanaS";

// document.getElementsByTagName() -> HTMLCollection

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElemetsByClassName -> HTMLCollection

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari javascript";
