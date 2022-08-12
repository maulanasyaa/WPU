// Rekursif adalah fungsi yang memanggil dirinya sendiri
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

console.log(faktorial(5));
