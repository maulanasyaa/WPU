// closure adalah nested function yg mengakses variabel parent scope nya
// function init() {
//   let nama = "Maulana";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init();

// closure used for :
// function factories

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("maulana");
// selamatSiang("syarip");
// selamatMalam("abdurahman");

// private method

// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();
// // add() untuk menjalankan keseluruhan add function, a untuk menjalankan inner function nya
// console.log(a());
// console.log(a());
// console.log(a());

// atau menggunakan immediately invoked function (self executing anoymous function)
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
