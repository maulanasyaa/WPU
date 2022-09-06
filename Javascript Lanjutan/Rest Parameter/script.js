// Rest parameter

// function myFunc(...args) {
//   return args;
//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["Maulana", "Syarip", "Abdurahman", "Mawl", "Syar"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Maulana",
//   frontEnd1: "Syarip",
//   frontEnd2: "Abdurahman",
//   backEnd: "Mawl",
//   ux: "Syar",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filtering
// function filterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }

// console.log(filterBy("number", 1, 2, "Maulana", false, 10, true, "Syarip"));
