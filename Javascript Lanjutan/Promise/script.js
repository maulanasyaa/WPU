// jquery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=52792095&s=avengers",
//   success: (movies) => console.log(movies),
// });

// vanilla js
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=52792095&s=avengers");
// xhr.send();

// fetch
// fetch("http://www.omdbapi.com/?apikey=52792095&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji..");
//   }
// });

// janji1.then((response) => console.log(`OK : ${response}`)).catch((response) => console.log(`NOT OK : ${response}`));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then(response => console.log(`OK : ${response}`))
//   .catch(response => console.log(`NOT OK : ${response}`));

// console.log("selesai");

// Promise.all()
const movie = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        judul: "Marvels",
        sutradara: "Maulana",
        actors: "Syarip, Abdurahman",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        kota: "Karawang",
        temp: 31,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// movie.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([movie, cuaca])
  // .then(response => console.log(response));
  .then(response => {
    const [movie, cuaca] = response;
    console.log(movie);
    console.log(cuaca);
  });
