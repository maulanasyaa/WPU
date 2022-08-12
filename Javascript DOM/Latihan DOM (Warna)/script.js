// membuat button 1 warna
const button1 = document.getElementById("button");
const body = document.getElementsByTagName("body")[0];
button1.addEventListener("click", () => {
  //   body.style.backgroundColor = "salmon";
  //   document.body.style.backgroundColor = "salmon";
  //   document.body.setAttribute("class", "salmon");
  document.body.classList.toggle("biru-muda"); // membuat style di html
});

// membuat button baru random color
const randomColorButton = document.createElement("button");
const textButton = document.createTextNode("Random Color");
randomColorButton.appendChild(textButton);
// menambahkan type button
randomColorButton.setAttribute("type", "button");
// menempatkan button baru setelah button1
button1.after(randomColorButton);
// membuat event click untuk generate warna random
randomColorButton.addEventListener("click", () => {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb( ${r}, ${g}, ${b})`;
});

// slider warna
const sMerah = document.querySelector("input[name=sMerah]");
sMerah.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sHijau = document.querySelector("input[name=sHijau]");
sHijau.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const sBiru = document.querySelector("input[name=sBiru]");
sBiru.addEventListener("input", () => {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
