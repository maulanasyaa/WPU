var s = "";

for (var b1 = 1; b1 <= 5; b1++) {
  // barisnya 5
  for (var e1 = 5; e1 > b1; e1--) {
    // empty awal 1 5
    s += " ";
  }
  for (var i1 = 0; i1 < b1; i1++) {
    // item 1 sebelah kiri atas segitiga
    s += "*";
  }
  for (var i2 = 0; i2 < i1 - 1; i2++) {
    // item 2 sebelah kanan atas segitiga
    s += "*";
  }
  for (var e2 = 5; e2 > b1; e2--) {
    // empty awal 2 5
    s += " ";
  }
  s += "\n"; // pindah baris
}
for (var b2 = 1; b2 <= 5; b2++) {
  // barisnya 5
  for (var e3 = 1; e3 < b2; e3++) {
    // empty awal 3 1
    s += " ";
  }
  for (var i3 = 5; i3 >= b2; i3--) {
    // item 3 sebelah kiri bawah segitiga
    s += "*";
  }
  for (var i4 = 5; i4 > i3 + 1; i4--) {
    // item 4 sebelah kanan bawah segitiga
    s += "*";
  }
  for (var e4 = 1; e4 < b2; e4++) {
    // empty awal 4 1
    s += " ";
  }
  s += "\n"; // pindah baris
}
console.log(s); // print string
