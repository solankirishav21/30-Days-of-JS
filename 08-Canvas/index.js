// console.log("connected")

const cnva = document.querySelector('#draw');
const ct = cnva.getContext('2d');
cnva.width = window.innerWidth;
cnva.height = window.innerHeight;
ct.strokeStyle = '#BADA55';
ct.lineJoin = 'round';
ct.lineCap = 'round';
ct.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let dir = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ct.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ct.beginPath();
  ct.moveTo(lastX, lastY);
  ct.lineTo(e.offsetX, e.offsetY);
  ct.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

cnva.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


cnva.addEventListener('mousemove', draw);
cnva.addEventListener('mouseup', () => isDrawing = false);
cnva.addEventListener('mouseout', () => isDrawing = false);
