// Destructuring Variable / Assignment

// Desctructuring Array
// const perkenalan = ["Halo", "nama", "saya", "Maulana Syarip Abdurahman"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
// };

// const { nama, umur } = mhs;
// console.log(nama);

// assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
// });
// console.log(nama);

// assign ke variabel baru
// const mhs = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// memberikan default value
// const mhs = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(email);

// memberikan nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
//   email: "maulana@gmail.com",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
//   email: "maulana@gmail.com",
// };

// const { nama, ...values } = mhs;
// console.log(values);

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: "Maulana Syarip Abdurahman",
  umur: 20,
  email: "maulana@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}

console.log(getIdMhs(mhs));
