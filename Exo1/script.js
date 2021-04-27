var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// le toit de la maison
// ctx.beginPath();
// ctx.fillStyle = "tan";
// ctx.moveTo(300, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(500, 200);
// ctx.fill();
// ctx.closePath();
// la maison
ctx.beginPath();
ctx.fillStyle = "lightskyblue";
ctx.moveTo(250, 200);
ctx.lineTo(500, 200);
ctx.lineTo(500, 900);
ctx.lineTo(250, 900);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.fillStyle = "tan";
ctx.moveTo(50, 200);
ctx.lineTo(250, 200);
ctx.lineTo(250, 900);
ctx.lineTo(50, 900);
ctx.fill();
ctx.closePath();
// la porte de la Maison
ctx.beginPath();
ctx.fillStyle = "gray";
ctx.moveTo(350, 400);
ctx.lineTo(450, 400);
ctx.lineTo(450, 900);
ctx.lineTo(350, 900);
ctx.fill();

// les deux fennetres de la maiso
// ctx.fillStyle = "gray";
// ctx.fillRect(120, 220, 100, 100);
ctx.fillStyle = "gray";
ctx.fillRect(340, 220, 100, 100);
// le poignetde la porte
ctx.beginPath();
ctx.lineWidth = "2";
ctx.fillStyle = "black";
ctx.arc(400,510,5,0.7*Math.PI, 2*Math.PI);
ctx.closePath();
ctx.fill();
// les ligne des fennatres
ctx.beginPath();
ctx.strokeStyle = "black";
// ctx.moveTo(120, 270);
// ctx.lineTo(218, 270);
// ctx.moveTo(170, 220);
// ctx.lineTo(170, 320);
ctx.moveTo(340, 270);
ctx.lineTo(442, 270);
ctx.moveTo(390, 220);
ctx.lineTo(390, 320);
// Les lignes dela porte
ctx.moveTo(350, 430);
ctx.lineTo(450, 430);
ctx.moveTo(400, 400);
ctx.lineTo(400, 430);
ctx.stroke();

ctx.transform(1, 0, 1, 1, 175, 75);

ctx.fillStyle = '#48B'; //Bleu
ctx.fillRect(0, 0, 200, 130);

ctx.setTransform(1, 0, -1, 1, 175, 75);

ctx.fillStyle = '#4B8'; //Vert
ctx.fillRect(0, 0, 200, 130);

// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.moveTo(110, 120);
// ctx.lineTo(120, 130);
// ctx.lineTo(110, 120);
// // ctx.lineTo(100, 900);
// ctx.fill():
// ctx.closePath();
// ctx.beginPath();
