// 1. HTML Fragments

// const mhs = {
//   nama: "Maulana Syarip Abdurahman",
//   umur: 20,
//   email: "maulana@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="email">${mhs.email}</span>
// </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Maulana",
//     email: "maulana@gmail.com",
//   },
//   {
//     nama: "Syarip",
//     email: "syarip@gmail.com",
//   },
//   {
//     nama: "Abdurahman",
//     email: "abdurahman@gmail.com",
//   },
// ];

// const el = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`
//       )
//       .join("")}
// </div>`;

// 3. Conditional
// ternary
// const lagu = {
//   judul: "Always",
//   penyanyi: "Rex Orange County",
//   feat: "maul",
// };

// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyanyi}</li>
// <li>${lagu.judul} ${lagu.feat ? `feat. ${lagu.feat}` : ""}</li>
// </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
  nama: "Maulana Syarip Abdurahman",
  semester: 5,
  mataKuliah: ["Rekayasa Web", "Analisis dan Perancangan Sistem Informasi", "Pemrograman Sistem Interaktif", "Perancangan Sistem Berorientasi Object"],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
        ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
