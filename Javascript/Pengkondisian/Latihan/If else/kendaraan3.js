var jumlahKendaraan = 10;
var kendaraanBeroperasi = 6;

for (var noKendaraan = 1; noKendaraan <= jumlahKendaraan; noKendaraan++) {
  if (noKendaraan <= kendaraanBeroperasi) {
    console.log("Kendaraan no. " + noKendaraan + " beroperasi dengan baik.");
  } else {
    console.log("Kendaraan no. " + noKendaraan + " sedang tidak beroperasi.");
  }
}
