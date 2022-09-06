// Spread operator
// memecah iterables menjadi single element

// const mhs = ["Maulana", "Syarip", "Abdurahman"];
// console.log(...mhs[0]);

// menggabungkan 2 array
// const people = ["Maulana", "Syarip", "Abdurahman"];
// const person = ["Maul", "Syar", "Rahman"];
// const orang = [...people, "Mawl", ...person];
// const orang = people.concat(person)
// console.log(orang);

// meng-copy array
// const mhs = ["Maulana", "Syarip", "Abdurahman"];
// const mhs1 = [...mhs];
// mhs1[0] = "Mawl";
// console.log(mhs);
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// nama.innerHTML = huruf;
