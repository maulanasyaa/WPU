var jumlahKendaraan = 10;
var noKendaraan = 1;
var kendaraanBeroperasi = 7;

while (noKendaraan <= kendaraanBeroperasi) {
  console.log("Kendaraan no. " + noKendaraan + " beroperasi dengan baik.");
  noKendaraan++;
}

for (noKendaraan = kendaraanBeroperasi + 1; noKendaraan <= jumlahKendaraan; noKendaraan++) {
  console.log("Kendaraan no. " + noKendaraan + " sedang tidak beroperasi.");
}
