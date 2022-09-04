// Tagged Templates
// const nama = "Maulana Syarip Abdurahman";
// const umur = 20;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
// }

// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);

// Highlight

const nama = "Maulana Syarip Abdurahman";
const umur = 20;
const email = "maulana@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
}

const str = highlight`Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan email saya adalah : ${email}`;

document.body.innerHTML = str;

// penggunaan lain dari Tagged Template
// escaping html tags, translation & internationalization, styled components
