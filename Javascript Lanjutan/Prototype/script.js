// Cara untuk membuat Object pada javascript

// 1. Object Literal
// note : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//   nama: "Maul",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makann!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Syarip",
//   energi: 15,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makann!`);
//   },
// };

// 2. Function Declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makann!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },
// };

// function Mahasiswa(nama, energi) {
// let mahasiswa = {};
// object.create()
// let mahasiswa = Object.create(methodMahasiswa);
// mahasiswa.nama = nama;
// mahasiswa.energi = energi;
// mahasiswa.makan = methodMahasiswa.makan;
// mahasiswa.main = methodMahasiswa.main;

//   return mahasiswa;
// }

// let maul = Mahasiswa("Maul", 10);
// let syarip = Mahasiswa("Syarip", 20);

// PROTOTYPE
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat main!`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `Halo ${this.nama}, selamat tidur!`;
// };

// let maul = new Mahasiswa("Maul", 10);

// class version
// class itu menjalankan prototype di dalam nya
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main!`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let maul = new Mahasiswa("maul", 10);
let syarip = new Mahasiswa("syarip", 10);

// 3.  Constructor Function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makann!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   };
// }

// let maul = new Mahasiswa("maul", 20);
