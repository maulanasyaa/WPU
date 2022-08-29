// membuat object kendaraan
function Kendaraan(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("Kendaraan masih kosong");
      return false;
    }
    for (i in this.penumpang) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

const kendaraan1 = new Kendaraan("Maul", ["Tuparev", "Bypass"], [], 0);
const kendaraan2 = new Kendaraan("Syarip", ["Telukjambe", "Kertabumi"], [], 0);
