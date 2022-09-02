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
// let mahasiswa = ["Maulana", "Syarip", "Abdurahman"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

// Konsep this pada arrow function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Maul";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   };
// };

// const maul = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Maul";
//   this.umur = 20;
//   this.sayHello = () => {
//     console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   };
// };

// const maul = new Mahasiswa();

// const Mahasiswa = function () {
//   this.nama = "Maul";
//   this.umur = 20;
//   this.sayHello = function () {
//     console.log(`Halo nama saya ${this.nama}, dan saya berumur ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 5000);
// };

// const maul = new Mahasiswa();

// real case
const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
  //   setTimeout menggunakan arrow function karena ingin menggunakan this = box
});
