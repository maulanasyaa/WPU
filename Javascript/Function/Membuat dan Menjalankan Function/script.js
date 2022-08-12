function jumlahVolumeDuaKubus(a, b) {
  // a dan b sebagai parameter
  let volumeA;
  let volumeB;
  let result;

  volumeA = a * a * a;
  volumeB = b * b * b;
  result = volumeA + volumeB;
  return result;
}

alert(jumlahVolumeDuaKubus(5, 2));
// 5 dan 2 adalah argument (memberikan nilai pada parameter)
