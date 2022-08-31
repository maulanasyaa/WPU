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
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makann!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
};

function Mahasiswa(nama, energi) {
  // let mahasiswa = {};
  // object.create()
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  // mahasiswa.makan = methodMahasiswa.makan;
  // mahasiswa.main = methodMahasiswa.main;

  return mahasiswa;
}

let maul = Mahasiswa("Maul", 10);
let syarip = Mahasiswa("Syarip", 20);

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
