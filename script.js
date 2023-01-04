const rgbColor = document.getElementById('rgb-color');
const circles = document.getElementById('circles');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
const score = document.getElementById('score');

const createCircle = () => {
  for (let i = 0; i < 6; i += 1) {
    const circle = document.createElement('div');
    circles.appendChild(circle);
    circle.className = 'ball';
  }
};

createCircle();

const randomizeColors = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

const paintCircles = () => {
  const getCircles = document.getElementsByClassName('ball');
  for (let i = 0; i < getCircles.length; i += 1) {
    getCircles[i].style.backgroundColor = randomizeColors();
  }
  rgbColor.innerText = getCircles[Math.floor(Math.random() * 6)].style.backgroundColor;
};

let keepScore = 0;
score.innerText = keepScore;

circles.addEventListener('click', (event) => {
  // localStorage.getItem('score');
  if (event.target.style.backgroundColor === rgbColor.innerText) {
    answer.innerText = 'Acertou!';
    keepScore += 3;
    paintCircles();
    // localStorage.setItem('score', keepScore);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    keepScore = 0;
    paintCircles();
    // localStorage.setItem('score', keepScore);
  }
  score.innerText = keepScore;
});

resetBtn.addEventListener('click', () => {
  answer.innerText = 'Escolha uma cor';
  paintCircles();
});

window.onload = () => {
  paintCircles();

  // const getScore = localStorage.getItem('score');
  // if (getScore) {
  //   score.innerText = getScore;
  // } else {
  //   score.innerText = 0;
  // }
};
