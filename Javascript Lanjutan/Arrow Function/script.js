// Function Expression
// const tampilNama = function (nama) {
//   return `Halo ${nama}`;
// };

// console.log(tampilNama("Maul"));

// Arrow Function
// note : versi lebih ringkas dari function expression

// 1 parameter
// const tampilNama = nama => {
//   return `Halo ${nama}`;
// };

// console.log(tampilNama("Maul"));

// >1 parameter
// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("maul", "Pagi"));

// implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Maul"));

// 0 parameter
// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// contoh
let mahasiswa = ["Maulana", "Syarip", "Abdurahman"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);
