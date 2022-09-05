// for..of
// array
// const mhs = ["Maulana", "Syarip", "Abdurahman"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// string
// const nama = "Maulana";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Maulana", "Syarip", "Abdurahman"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// }

// nodelist
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka() {
// return arguments.reduce((a, i) => a + i);
//   arguments.forEach((a) => (jumlah += a));
// reduce dan foreach tidak berfungsi karena arguments bukan array
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
// const mhs = {
//   nama: "Maulana",
//   umur: 20,
//   email: "maulana@gmail.com",
// };

// for (m in mhs) {
//   //   console.log(m);
//   console.log(mhs[m]);
// }

// const nama = ["Maulana", "Syarip", "Abdurahman"];

// for (n in nama) {
//   console.log(nama[n]);
// }
