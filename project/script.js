const heartContainer = document.getElementById('heartContainer');

const heartPattern = [
  "00100100100",
  "01111111110",
  "11111111111",
  "11111111111",
  "01111111110",
  "00111111100",
  "00011111000",
  "00001110000",
  "00000100000"
];

const heartSize = 20;
const origin = { x: 100, y: 300 }; // posisi karakter
let delay = 0;

heartPattern.forEach((row, rowIndex) => {
  [...row].forEach((cell, colIndex) => {
    if (cell === '1') {
      const targetX = colIndex * heartSize + 150;
      const targetY = rowIndex * heartSize + 50;

      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerHTML = '❤️';
      heart.style.left = `${origin.x}px`;
      heart.style.top = `${origin.y}px`;

      heartContainer.appendChild(heart);

      setTimeout(() => {
        heart.style.left = `${targetX}px`;
        heart.style.top = `${targetY}px`;
        heart.style.opacity = 1;
        heart.style.transform = 'scale(1)';
      }, delay);

      delay += 100;
    }
  });
});
