// Event Handler
// const close = document.querySelector(".close");
// const card = document.querySelector(".card");

// close.addEventListener("click", () => {
//   card.style.display = "none";
// });

// DOM Traversal

// const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", (e) => {
//     // e berisi event yang sedang terjadi
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// close.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // prevent default
//     e.stopPropagation(); // menghentikan event bubbling
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("click", (e) => {
//     alert("ok");
//   });
// });

// const nama = document.querySelector(".nama");
// console.log(nama.nextElementSibling.nextElementSibling);

// cara yang lebih efektif
const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault;
  }
});
