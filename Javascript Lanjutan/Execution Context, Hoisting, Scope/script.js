// Execution Context, Hoisting & Scope

console.log(nama);
var nama = "maul";
console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

console.log(sayHello());
var nama1 = "maul";
var umur = 20;

console.log(sayHello());
function sayHello() {
  return `Halo, nama saya ${nama1}, saya berumur ${umur} tahun.`;
}

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// argument
// hoisting

var nama2 = "maul";
var username = "@maulanasyaa_";

function cetakURL(username) {
  var instagramURL = "http://instagram.com/";
  return instagramURL + username;
}

console.log(cetakURL(username));
console.log(cetakURL("@maulsy"));

// note : scope ~ check local ~ argument ~ global

function satu() {
  var name = "Maul";
  console.log(name);
}

function dua() {
  console.log(name);
}

var name = "Syarip";
satu();
dua("Abdurahman");
console.log(name);
