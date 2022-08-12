var s = "";

for (var b = 0; b < 5; b++) {
  // barisnya 5
  for (var i = 0; i < 10; i++) {
    // baris pertama awalan item
    if (i % 2 == 0) {
      s += "#";
    } else {
      s += " ";
    }
  }
  s += "\n"; // pindah baris
  for (var i = 0; i < 10; i++) {
    // baris kedua awalan empty
    if (i % 2 == 1) {
      s += "#";
    } else {
      s += " ";
    }
  }
  s += "\n"; // pindah baris
}
console.log(s); // print string
