const linkButton = document.querySelectorAll(".icons");

linkButton.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const getLink = e.target.parentElement.getAttribute("href");
    const copyLinkToClipBoard = navigator.clipboard.writeText(getLink);

    alert("Link has been copied to clipboard");
  });
});

// Mengambil elemen bola dan debu
const ball = document.querySelector('.moving-ball');
const dust = document.querySelector('.dust');
const speed = 3; // Kecepatan bola
const maxY = window.innerHeight - 20;
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = speed * (Math.random() > 0.5 ? 1 : -1); // Arah horizontal
let dy = speed * (Math.random() > 0.5 ? 1 : -1); // Arah vertikal

function moveBall() {
  x += dx;
  y += dy;

  // Pantulan bola saat mencapai batas layar
  if (x <= 0 || x >= window.innerWidth - 20) dx = -dx;
  if (y <= 0 || y >= window.innerHeight - 20) dy = -dy;

  // Memindahkan bola
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;

  // Memindahkan debu mengikuti bola
  dust.style.left = `${x - 10}px`; // Debu bergerak sedikit di belakang bola
  dust.style.top = `${y + 10}px`; // Debu bergerak sedikit di bawah bola

  requestAnimationFrame(moveBall); // Animasi yang halus
}

// Mulai pergerakan bola
moveBall();

