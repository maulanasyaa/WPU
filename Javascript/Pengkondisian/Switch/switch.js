// contoh 1
// var angka = parseInt(prompt("masukkan angka : "));

// switch (angka) {
//   case 1:
//     alert("anda memasukkan angka 1.");
//     break;
//   case 2:
//     alert("anda memasukkan angka 2.");
//     break;
//   case 3:
//     alert("anda memasukkan angka 3.");
//     break;
//   default:
//     alert("angka yang anda masukkan salah.");
// }

var item = prompt("pilih makanan/minuman yang disediakan: \n (susu, daging, roti, burger, cola)");

switch (item) {
  case "susu":
    alert("anda memilih makanan/minuman SEHAT.");
    break;
  case "daging":
    alert("anda memilih makanan/minuman SEHAT.");
    break;
  case "roti":
    alert("anda memilih makanan/minuman SEHAT.");
    break;
  case "burger":
  case "cola":
    alert("anda memilih makanan/minuman TIDAK SEHAT.");
    // jika perintah sama maka bisa menggunakan 1 perintah untuk lebih dari 1 case (menghapus break)
    break;
  default:
    alert("yang anda masukkan salah.");
}
