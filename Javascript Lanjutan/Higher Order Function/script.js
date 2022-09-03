// Higher Order Function adalah function yg menggunakan function lain untuk menjadi argument/return value nya
// note : function argument pada HOF disebut callback

// contoh
// non HOF
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

repeatLog(10);

// HOF
// function argument/callback
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
repeat(5, alert);

// function return value
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

let selamatMalam = ucapkanSalam("malam");
console.dir(selamatMalam("Maul"));
