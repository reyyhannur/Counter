let sayacDeger = 0;
let intervalID;

const sayacDegerElement = document.getElementById("sayacDeger");
const baslatButton = document.getElementById("baslat");
const durdurButton = document.getElementById("durdur");

function arttirSayac() {
  sayacDeger++;
  sayacDegerElement.textContent = sayacDeger;
}

baslatButton.addEventListener("click", function () {
  intervalID = setInterval(arttirSayac, 1000);
  baslatButton.disabled = true;
});

durdurButton.addEventListener("click", function () {
  clearInterval(intervalID);
  baslatButton.disabled = false;
});
const basaSarButton = document.getElementById("basaSar");
const hizlanButton = document.getElementById("hizlan");

let hiz = 1000;

const devamEtButton = document.getElementById("devamEt");

devamEtButton.addEventListener("click", function () {
  intervalID = setInterval(arttirSayac, hiz);
  devamEtButton.disabled = true;
  baslatButton.disabled = true;
  durdurButton.disabled = false;
  hizlanButton.disabled = false;
});

durdurButton.addEventListener("click", function () {
  clearInterval(intervalID);
  devamEtButton.disabled = false;
  baslatButton.disabled = false;
  hizlanButton.disabled = false;
  durdurButton.disabled = true;
});

basaSarButton.addEventListener("click", function () {
  clearInterval(intervalID);
  sayacDeger = 0;
  sayacDegerElement.textContent = sayacDeger;
  baslatButton.disabled = false;
});

hizlanButton.addEventListener("click", function () {
  if (hiz > 100) {
    hiz -= 100;
    clearInterval(intervalID);
    intervalID = setInterval(arttirSayac, hiz);
  }
});
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
  card.classList.toggle("enlarged");
});
