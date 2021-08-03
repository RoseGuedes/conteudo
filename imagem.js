//imagem
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
var img = new Image();
img.src = ‘cenariozinho.jpg’;
ctx.drawImage(img, 0, 0);

