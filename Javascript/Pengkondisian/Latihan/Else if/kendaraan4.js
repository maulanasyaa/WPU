var jumlahKendaraan = 10;
var kendaraanBeroperasi = 6;

for (var noKendaraan = 1; noKendaraan <= jumlahKendaraan; noKendaraan++) {
  if (noKendaraan <= kendaraanBeroperasi && noKendaraan !== 5) {
    console.log("Kendaraan no. " + noKendaraan + " sedang beroperasi");
  } else if (noKendaraan === 5 || noKendaraan === 8 || noKendaraan === 10) {
    console.log("Kendaraan no. " + noKendaraan + " sedang lembur.");
  } else {
    console.log("Kendaraan no. " + noKendaraan + " sedang tidak beroperasi");
  }
}
