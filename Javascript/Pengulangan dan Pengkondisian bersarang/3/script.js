var s = "";

for (var b = 0; b < 10; b++) {
  // barisnya 10
  for (var e = 0; e < b; e++) {
    // menambah kan string empty pada setiap baris ++
    s += " ";
  }
  for (var i = 10; i > b; i--) {
    // item mengalami pengurangan setiap berpindah baris (item awal 10)
    s += "*";
  }
  s += "\n"; // pindah baris
}
console.log(s); // print string
