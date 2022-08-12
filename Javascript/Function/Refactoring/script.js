// Refactoring adalah mengubah kode agar menjadi lebih baik tapa mengubah fungsionalitasnya
function jumlahVolumeDuaKubus(a, b) {
  // a dan b sebagai parameter
  // let volumeA;
  // let volumeB;
  // let result;

  // volumeA = a * a * a;
  // volumeB = b * b * b;
  // result = volumeA + volumeB;
  // return result;
  // di refactoring menjadi..
  return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(5, 2));
// 5 dan 2 adalah argument (memberikan nilai pada parameter)
