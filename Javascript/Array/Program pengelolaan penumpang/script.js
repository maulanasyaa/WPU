let penumpang = [];

// function tambah penumpang
const tambahPenumpang = (namaPenumpang, penumpang) => {
  // jika kendaraan kosong
  if (penumpang.length == 0) {
    // tambah penumpang diawal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri kursi dari awal
    for (i in penumpang) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }

      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }

      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahannya
        console.log(`${namaPenumpang} sudah ada di dalam kendaraan`);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};

// function hapus penumpang
const hapusPenumpang = (namaPenumpang, penumpang) => {
  // jika kendaraan kosong
  if (penumpang.length == 0) {
    // tampilkan pesan bahwa kedaraan kosong
    console.log("Kendaraan sudah kosong");
    // kembalikan isi array & keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (i in penumpang) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah nama nya menjadi undefined
        penumpang[i] = undefined;
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
      // jika tidak ada yang sesuai
      else if (i == penumpang.length - 1) {
        // tampilkan pesan kesalahannya
        console.log(`${namaPenumpang} tidak ada di dalam kendaraan`);
        // kembalikan isi array & keluar dari function
        return penumpang;
      }
    }
  }
};
