var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// le cacacou
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.moveTo(80, 100);
   ctx.bezierCurveTo(140, 50, 250, 30, 350, 100);
   // ctx.bezierCurveTo(140, 150, 250, 130, 120, 100);
ctx.moveTo(350, 100);
   ctx.bezierCurveTo(240, 150, 150, 130, 80, 100);
ctx.moveTo(180, 60);
   ctx.bezierCurveTo(210, 8, 235, 8, 260, 60);
ctx.stroke();
ctx.fill();
ctx.closePath();
// les trait sur le cacacou
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(180, 58);
   ctx.bezierCurveTo(210, 70, 210, 80, 260, 60);
ctx.moveTo(185, 48);
   ctx.bezierCurveTo(210, 60, 210, 70, 257, 50);
ctx.moveTo(192, 38);
   ctx.bezierCurveTo(210, 50, 210, 60, 252, 40);
ctx.stroke();
// les animation blue sur le cacacou
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(130, 78);
   ctx.quadraticCurveTo(180, 90, 90, 100);
ctx.moveTo(170, 105);
   ctx.quadraticCurveTo(210, 150, 250, 105);
ctx.moveTo(270, 70);
   ctx.quadraticCurveTo(310, 120, 320, 90);
ctx.fill();

// le grand oeil
ctx.beginPath();
ctx.fillStyle = "lavenderblush";
ctx.moveTo(80, 300);
   ctx.bezierCurveTo(140, 250, 250, 230, 350, 300);
// ctx.moveTo(350, 300);
   ctx.bezierCurveTo(240, 350, 150, 330, 80, 300);
ctx.stroke();
ctx.fill();
ctx.closePath();
// l'oeil noir de l'oeil
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(195, 290);
   ctx.bezierCurveTo(200, 310, 220, 370, 235, 290);
// ctx.moveTo(350, 300); l,,,,,,;k;kjhuuguyryfff
   ctx.bezierCurveTo(220, 220, 200, 260, 195, 290);
ctx.moveTo(370, 240);
   ctx.bezierCurveTo(330, 230, 80, 200, 95, 240);
ctx.stroke();
ctx.fill();
// le blanc de l'oeil
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(215, 290, 20, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
// le petit noire de l'oeil
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(215, 290, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// le Petit biscuit adroite
ctx.beginPath();
ctx.fillStyle = "goldenrod";
// la tete
ctx.arc(455, 50, 20, 0, 2 * Math.PI);
// mon bras droit
ctx.moveTo(410, 70);
   ctx.quadraticCurveTo(390, 80, 410, 85);
ctx.lineTo(410, 70);
// le ventr et les pied
ctx.lineTo(500, 70);
   ctx.quadraticCurveTo(520, 80, 500, 85);
   // mon pied droit
ctx.lineTo(480, 85);
ctx.lineTo(480, 170);
// la courbe entre les deux pieds
   ctx.quadraticCurveTo(475, 180, 465, 170);
   // mon pied gauch
ctx.lineTo(465, 150);
   ctx.quadraticCurveTo(460, 140, 450, 150);
ctx.lineTo(450, 170);
// la main gauche
   ctx.quadraticCurveTo(445, 180, 435, 170);
ctx.lineTo(435, 85);
ctx.lineTo(410, 85);
ctx.stroke();
ctx.fill();
// les yeux de petit biscuit
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(443, 46, 3, 0, 2 * Math.PI);
ctx.arc(465, 46, 3, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(454, 90, 2, 0, 2 * Math.PI);
ctx.arc(454, 100, 2, 0, 2 * Math.PI);
ctx.arc(454, 110, 2, 0, 2 * Math.PI);
ctx.arc(454, 120, 2, 0, 2 * Math.PI);
ctx.arc(454, 130, 2, 0, 2 * Math.PI);
ctx.fill();
// imazighennnnnnnnnnnnn
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth="5";
ctx.moveTo(466, 88);
   ctx.quadraticCurveTo(455, 103, 445, 88);
ctx.moveTo(466, 132);
   ctx.quadraticCurveTo(455, 117, 445, 132);
ctx.stroke();
// les ciles de petit biscuit
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth="2";
ctx.moveTo(440, 42);
   ctx.quadraticCurveTo(443, 39, 446, 42);
ctx.moveTo(462, 42);
   ctx.quadraticCurveTo(465, 39, 468, 42);
// le coul
ctx.moveTo(438, 70);
ctx.lineTo(455, 85);
ctx.moveTo(475, 70);
ctx.lineTo(455, 85);
ctx.stroke();
// la bouche du petit biscuit
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(450, 57);
   ctx.quadraticCurveTo(455, 67, 460, 57);
ctx.moveTo(450, 57);
   ctx.quadraticCurveTo(455, 60, 460, 57);
ctx.stroke();
// le petit sapain
ctx.beginPath();
ctx.fillStyle = "goldenrod";
ctx.moveTo(650, 40);
ctx.lineTo(660, 60);
ctx.lineTo(657, 60);
ctx.lineTo(670, 80);
ctx.lineTo(667, 80);
ctx.lineTo(680, 100);
ctx.lineTo(677, 100);
ctx.lineTo(690, 120);
ctx.lineTo(687, 120);
ctx.lineTo(700, 140);
ctx.lineTo(655, 140);
   ctx.quadraticCurveTo(645, 165, 635, 140);
ctx.lineTo(600, 140);
ctx.lineTo(610, 120);
ctx.lineTo(607, 120);
ctx.lineTo(620, 100);
ctx.lineTo(617, 100);
ctx.lineTo(630, 80);
ctx.lineTo(627, 80);
ctx.lineTo(640, 60);
ctx.lineTo(637, 60);
ctx.lineTo(650, 40);
ctx.fill();
// le petit sapain dans le sapin
ctx.beginPath();
ctx.fillStyle = "green";
ctx.moveTo(645, 42);
ctx.lineTo(655, 62);
ctx.lineTo(652, 62);
ctx.lineTo(665, 82);
ctx.lineTo(662, 82);
ctx.lineTo(675, 102);
ctx.lineTo(672, 102);
ctx.lineTo(685, 122);
ctx.lineTo(682, 122);
ctx.lineTo(692, 135);
ctx.lineTo(650, 135);
   ctx.quadraticCurveTo(645, 167, 640, 135);
ctx.lineTo(608, 135);
ctx.lineTo(615, 122);
ctx.lineTo(612, 122);
ctx.lineTo(625, 102);
ctx.lineTo(622, 102);
ctx.lineTo(635, 82);
ctx.lineTo(632, 82);
ctx.lineTo(645, 62);
ctx.lineTo(642, 62);
ctx.lineTo(655, 42);
ctx.fill();
// le joeur de foot
ctx.beginPath();
ctx.fillStyle = "tan";
ctx.strokeStyle = "black";
ctx.moveTo(180, 450);
// la tete
   ctx.bezierCurveTo(100, 350, 380, 350, 260, 450);
   // la main droit
ctx.lineTo(410, 450);
// les doit de la main droite
   ctx.quadraticCurveTo(420, 453, 410, 456);
ctx.lineTo(395, 456);
   ctx.quadraticCurveTo(392, 459, 395, 461);
ctx.lineTo(410, 461);
   ctx.quadraticCurveTo(420, 464, 410, 467);
ctx.lineTo(395, 467);
   ctx.quadraticCurveTo(392, 470, 395, 473);
ctx.lineTo(410, 473);
   ctx.quadraticCurveTo(420, 476, 410, 479);
ctx.lineTo(270, 479);
// le pied droit
   ctx.quadraticCurveTo(310, 600, 290, 630);
   // la haut et la fermeture de ventre coté droit
ctx.lineTo(340, 800);
// le talon droit
   ctx.quadraticCurveTo(440, 810, 310, 820);
ctx.lineTo(250, 650);
   ctx.quadraticCurveTo(240, 640, 230, 650);
   // le plie du pied gauche
ctx.lineTo(200, 735);
   ctx.quadraticCurveTo(190, 750, 170, 735);
   // le pied gauche
ctx.lineTo(100, 680);
   ctx.quadraticCurveTo(50, 750, 100, 640);
   // le plie du pied gauche
ctx.lineTo(180, 700);
// le bat du ventre
ctx.lineTo(190, 635);
// fin de ventre et debut de la main gauche
   ctx.quadraticCurveTo(160, 580, 170, 480);
ctx.lineTo(110, 480);
// fin de main gauche et debut du &er doit
   ctx.quadraticCurveTo(90, 470, 78, 420);
ctx.lineTo(68, 400);
// les doit de la main gauche
   ctx.quadraticCurveTo(70, 390, 85, 420);
   ctx.quadraticCurveTo(88, 423, 85, 400);
   ctx.quadraticCurveTo(90, 393, 93, 420);;
   ctx.quadraticCurveTo(95, 423, 102, 400);
   ctx.quadraticCurveTo(108, 399, 102, 420);
ctx.lineTo(115, 450);
ctx.lineTo(180, 450);
ctx.stroke();
ctx.fill();
// le ballon
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(220, 800, 35, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(200, 825);
   ctx.quadraticCurveTo(220, 845, 240, 825);
ctx.moveTo(200, 775);
   ctx.quadraticCurveTo(220, 755, 240, 775);
ctx.moveTo(193, 785);
   ctx.quadraticCurveTo(178, 805, 195, 815);
ctx.moveTo(247, 785);
   ctx.quadraticCurveTo(262, 805, 245, 815);
// ctx.stroke();
ctx.fill();
// le millieu du ballon
ctx.fillStyle = "black";
ctx.moveTo(215, 790);
ctx.lineTo(225, 790);
ctx.lineTo(230, 800);
ctx.lineTo(225, 810);
ctx.lineTo(215, 810);
ctx.lineTo(210, 800);
ctx.fill();
// les cheveux
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(175, 395);
ctx.lineTo(190, 370);
ctx.lineTo(320, 380);
ctx.lineTo(275, 385);
ctx.lineTo(290, 390);
ctx.fill();
// le nez
ctx.beginPath();
ctx.fillStyle = "black";
ctx.moveTo(223, 415);
ctx.quadraticCurveTo(233, 420, 223, 425);
ctx.fill();
// les yeux
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(195, 405, 5, 0, 2 * Math.PI);
ctx.arc(260, 405, 5, 0, 2 * Math.PI);
ctx.fill();
// le blann des yeux
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(195, 405, 3, 0, 2 * Math.PI);
ctx.arc(260, 405, 3, 0, 2 * Math.PI);
ctx.fill();
// la bauche
ctx.beginPath();
ctx.fillStyle = "lavenderblush";
ctx.moveTo(215, 435);
   ctx.quadraticCurveTo(225, 445, 238, 435);
ctx.fill();
// la langue
// ctx.beginPath();
// ctx.fillStyle = "wheat";
// ctx.moveTo(220, 438);
//    ctx.quadraticCurveTo(230, 444, 235, 438);
// ctx.fill();





// hjguyt
