const getPilihanComputer = () => {
  const comp = Math.random();

  if (comp < 0.34) return "kertas";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "batu";
};

const getHasil = (comp, player) => {
  if (player == comp) return "DRAW!";
  if (player == "kertas") return comp == "batu" ? "WIN!" : "LOSE!";
  if (player == "gunting") return comp == "kertas" ? "WIN!" : "LOSE!";
  if (player == "batu") return comp == "gunting" ? "WIN!" : "LOSE!";
};

const roll = () => {
  const imgComputer = document.querySelector(".computer");
  const gambar = ["kertas", "gunting", "batu"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "images/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
};

const pilihan = document.querySelectorAll("li img");
pilihan.forEach((pil) => {
  pil.addEventListener("click", () => {
    const info = document.querySelector(".info");
    info.innerHTML = "";
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    const scoreP = document.querySelector(".area-player h2");
    const scoreC = document.querySelector(".area-computer h2");

    roll();

    setTimeout(() => {
      const imgComputer = document.querySelector(".computer");
      imgComputer.setAttribute("src", "images/" + pilihanComputer + ".png");
      info.innerHTML = hasil;
      if (hasil === "WIN!") return scoreP.innerText++;
      if (hasil === "LOSE!") return scoreC.innerText++;
    }, 1000);
  });
});

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pKertas.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".computer");
//   imgComputer.setAttribute("src", "images/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pGunting = document.querySelector(".gunting");
// pGunting.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGunting.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".computer");
//   imgComputer.setAttribute("src", "images/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const pBatu = document.querySelector(".batu");
// pBatu.addEventListener("click", () => {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pBatu.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComputer = document.querySelector(".computer");
//   imgComputer.setAttribute("src", "images/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
