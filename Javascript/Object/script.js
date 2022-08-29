// Membuat object

// Object literal
const personal = {
  nama: "Maul",
  umur: 20,
  email: "lanamaulana2002@gmail.com",
  alamat: {
    kelurahan: "karawang kulon",
    kecamatan: "karawang barat",
    kabupaten: "karawang",
  },
  goal: "being productive",
};

// function declaration
const buatObjectPerson = (nama, umur, kota) => {
  let person = {};
  person.nama = nama;
  person.umur = umur;
  person.kota = kota;
  return person;
};

const person1 = buatObjectPerson("maul", 20, "karawang");

// Constructor
function People(nama, umur, kota) {
  // variabel this = {}
  this.nama = nama;
  this.umur = umur;
  this.kota = kota;
  //   return this
}

const people1 = new People("maul", 20, "karawang");
const people2 = new People("syarip", 20, "karawang");
