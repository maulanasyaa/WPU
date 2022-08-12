// Pengulangan
var tanya = true;
while (tanya) {
  // Menangkap pilihan player
  var p = prompt("Tentukan pilihan kamu! | Kertas, Gunting, Batu?");

  // Menangkap pilihan computer
  // Menentukan angka random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "kertas";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "batu";
  }
  // Mengatur rules
  var hasil = " ";

  if (p == comp) {
    hasil = "SERI!";
  } else if (p == "kertas") {
    //   if (comp == "Batu") {
    //     hasil = "MENANG!";
    //   } else {
    //     hasil = "KALAH!";
    //   }
    hasil = comp == "batu" ? "MENANG!" : "KALAH!";
  } else if (p == "gunting") {
    hasil = comp == "kertas" ? "MENANG!" : "KALAH!";
  } else if (p == "batu") {
    hasil = comp == "gunting" ? "MENANG!" : "KALAH!";
  } else {
    hasil = "Memasukkan pilihan yang salah";
  }
  // Output
  alert("Kamu memilih : " + p + " dan Computer memilih : " + comp + "\nHasilnya adalah Kamu " + hasil);

  tanya = confirm("Main lagi?");
}
alert("Terimakasih sudah bermain :)");
