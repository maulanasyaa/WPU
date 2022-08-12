var s = "";

for (var b = 1; b <= 5; b++) {
  // baris 5
  for (var e1 = 10; e1 > b; e1--) {
    // empty awal 1 10
    s += " ";
  }
  for (var i1 = 0; i1 < b; i1++) {
    // item 1 sebelah kiri segitiga
    s += "*";
  }
  for (var i2 = 0; i2 < i1 - 1; i2++) {
    // item 2 sebelah kanan segitiga
    s += "*";
  }
  for (var e2 = 10; e2 > b; e2--) {
    // empty awal 2 10
    s += " ";
  }
  s += "\n";
  // pindah baris
}
console.log(s); // print string
