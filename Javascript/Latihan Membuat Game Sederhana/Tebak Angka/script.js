alert("Tebak angka 1 - 10 \nKamu punya 3 kesempatan!"); // first pop up
var tanya = true;
while (tanya) {
  // repeat
  var no = Math.floor(Math.random() * 11); // random number
  for (var chance = 3; chance >= 0; ) {
    // chance option
    chance--;
    var p = prompt("Masukkan angka tebakan!"); // first question
    if (p == no) {
      // rules
      alert("Kamu benar! Jawaban nya adalah : " + no);
      break;
    } else if (chance == 0) {
      alert("Kesempatan kamu sudah habis ");
      break;
    } else if (p < no) {
      alert("Kamu salah! Jawaban kamu terlalu rendah. Coba lagi!! \nKesempatan anda : " + chance);
    } else if (p > no) {
      alert("Kamu salah! Jawaban kamu terlalu tinggi. Coba lagi!! \nKesempatan anda : " + chance);
    } else {
      alert("Kamu tidak memasukkan angka! Perbaiki lagi ya jawabannya.. \nKesempatan anda : " + chance);
    }
  }
  tanya = confirm("Main lagi?"); // repeat question
}
alert("Terimakasih sudah bermain :)"); // closing
