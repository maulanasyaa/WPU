var s = "";

for (var b = 1; b <= 10; b++) {
  // baris nya 10
  for (var i = 0; i < b; i++) {
    // item di tambahkan sesuai posisi baris
    s += "*";
  }
  s += "\n"; // pindah baris
}
console.log(s); // print string
