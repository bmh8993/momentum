const body = document.querySelector("body");

const IMG_NUM = 2;

function paintImage(imgNum) {
  const image = new Image();
  image.src = `images/${imgNum}.jpeg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNumber = genRandom() + 1;
  paintImage(randomNumber);
}

init();
