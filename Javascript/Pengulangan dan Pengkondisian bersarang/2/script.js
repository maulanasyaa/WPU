var s = "";

for (var b = 0; b <= 10; b++) {
  // barisnya 10
  for (var i = 10; i > b; i--) {
    // item mengalami pengulangan saat baris nya berpindah (item awal = 10)
    s += "*";
  }
  s += "\n"; // pindah baris
}
console.log(s); // print string
