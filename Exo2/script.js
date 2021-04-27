var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// Mon Prenom (L)
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(30, 20);
ctx.lineTo(10, 20);
ctx.lineTo(10, 120);
ctx.lineTo(80, 120);
ctx.lineTo(80, 100);
ctx.lineTo(30, 100);
ctx.lineTo(30, 20);
ctx.stroke();
// Mon Prenom (Z)
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(330, 20);
ctx.lineTo(390, 20);
ctx.lineTo(390, 40);
ctx.lineTo(350, 100);
ctx.lineTo(390, 100);
ctx.lineTo(390, 120);
ctx.lineTo(330, 120);
ctx.lineTo(330, 100);
ctx.lineTo(370, 40);
ctx.lineTo(330, 40);
ctx.lineTo(330, 20);
ctx.stroke();
// Mon Prenom (A)
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(410, 120);
ctx.lineTo(440, 20);
ctx.lineTo(450, 20);
ctx.lineTo(485, 120);
ctx.lineTo(465, 120);
ctx.lineTo(453, 80);
ctx.lineTo(440, 80);
ctx.lineTo(430, 120);
ctx.lineTo(410, 120);
ctx.moveTo(440, 65);
ctx.lineTo(450, 65);
ctx.lineTo(445, 45);
ctx.lineTo(440, 65);
ctx.stroke();

// la voiture
ctx.beginPath();
ctx.strokeStyle = "darksltegray";
ctx.fillStyle = "lightseagreen";
ctx.moveTo(350, 200);
ctx.lineTo(150, 200);
ctx.lineTo(150, 260);
ctx.lineTo(50, 260);
ctx.lineTo(50, 320);
ctx.lineTo(450, 320);
ctx.lineTo(450, 260);
ctx.lineTo(350, 260);
ctx.stroke();
ctx.fill();
ctx.closePath();
// les lignes de la carcass
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(150, 260);
ctx.lineTo(350, 260);
ctx.moveTo(220, 200);
ctx.lineTo(220, 260);
ctx.moveTo(280, 200);
ctx.lineTo(280, 260);
ctx.stroke()
// le phare avant
ctx.beginPath();
ctx.fillStyle = "steelblue";
ctx.arc(450, 275, 15, Math.PI/2, 1.5 * Math.PI, true);
ctx.fill()
  // La roue d'adroite
  ctx.strokeStyle = "black";
  ctx.fillStyle = "darkgray";
  ctx.beginPath();
  ctx.lineWidth="2";
  ctx.arc(350, 360, 40, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  // La roue d'aguach
  ctx.beginPath();
  ctx.lineWidth="2";
  ctx.arc(150, 360, 40, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
// le phare du toit
ctx.beginPath();
ctx.fillStyle = "red";
ctx.lineWidth="1";
ctx.arc(290, 199, 30, 0, Math.PI, true);
// ctx.arc(280, 180, 30, 0, -1 * Math.PI);
ctx.stroke();
ctx.fill();

// les ligne des roues
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(125, 330);
ctx.lineTo(173, 395);
ctx.moveTo(173, 330);
ctx.lineTo(125, 395);
ctx.moveTo(110, 363);
ctx.lineTo(188, 363);
ctx.moveTo(325, 330);
ctx.lineTo(373, 395);
ctx.moveTo(373, 330);
ctx.lineTo(325, 395);
ctx.moveTo(310, 363);
ctx.lineTo(388, 363);
ctx.stroke();


// ctx.closePath();
// ctx.fillStyle = "gray";
// ctx.fillRect(120, 220, 110, 110);
// ctx.fillStyle = "gray";
// ctx.fillRect(370, 220, 110, 110);

// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.moveTo(110, 120);
// ctx.lineTo(120, 130);
// ctx.lineTo(110, 120);
// // ctx.lineTo(100, 900);
// ctx.fill():
// ctx.closePath();
// ctx.beginPath();
