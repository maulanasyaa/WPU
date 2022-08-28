// Manipulasi Array

// 1. Join (merubah isi array menjadi string dan menampilkan nya)

let arr = ["maulana", "syarip", "abdurahman"];
console.log(arr.join(" "));

// 2. Push & pop (menambahkan dan mengurangi elemen pada akhir array)

arr.push(7, 5, 2);
console.log(arr);

arr.pop();
console.log(arr);

// 3.  Unshift & shift (menambahkan dan mengurangi elemen pada awal array)

arr.unshift("halo", "nama saya");
console.log(arr);

arr.shift();
console.log(arr);

// 4. Splice (menyisipkan/mengganti elemen di tengah array)
// splice(indexAwal, mauDihapusBerapa, elementBaru1..)

arr.splice(4, 2, "07-05", 2002);
console.log(arr);

// 5. Slice (mengiris array menjadi array baru/mengambil bagian array untuk dijadikan array baru)
// slice(awal, akhir)

let arr2 = arr.slice(1, 4);
console.log(arr2);

// 6. Foreach (pengulangan)

let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
angka.forEach((e) => {
  console.log(e);
});

// 7. Map (pengulangan(mengembalikan array))

let angka2 = angka.map((e) => {
  return e * 2;
});
console.log(angka2);

// 8. Sort (mengurutkan isi array)

let angka3 = [4, 2, 5, 6, 7, 1, 3, 10, 9, 8];
angka3.sort((a, b) => {
  return a - b;
});
console.log(angka3.join("-"));

// 9. Filter (mencari elemen pada array(mengembalikan banyak nilai))

let angka4 = angka.filter((x) => {
  return x > 5;
});
console.log(angka4);

// 10. Find (menjadi elemen pada array(mengembalikan 1 nilai))

let angka5 = angka.find((x) => {
  return x > 5;
});
console.log(angka5);
