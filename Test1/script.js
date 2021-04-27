var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(20, 0, 100, 50);
ctx.fill();
ctx.closePath();

// le creme
ctx.fillStyle = "saddlebrown";
ctx.moveTo(90, 245);
ctx.lineTo(190, 245);
ctx.lineTo(120, 470);
ctx.lineTo(90, 245);
ctx.fill();
ctx.closePath();

ctx.moveTo(95, 60);
   ctx.bezierCurveTo(95, 57, 90, 45, 70, 45);
   ctx.bezierCurveTo(40, 45, 40, 82.5, 40, 82.5);
   ctx.bezierCurveTo(40, 100, 60, 122, 95, 140);
   ctx.bezierCurveTo(130, 122, 150, 100, 150, 82.5);
   ctx.bezierCurveTo(150, 82.5, 150, 45, 120, 45);
   ctx.bezierCurveTo(105, 45, 95, 57, 95, 60);
   ctx.fillStyle = 'red';
   ctx.fill();





// ctx.setTransform(1, 0, -1, 1, 175, 75);
ctx.beginPath();
ctx.transform(1, 0, -1, 1.6, 120, 120);
ctx.fillStyle = "darkred";
ctx.lineWidth="2";
ctx.arc(100, 80, 50, 0, Math.PI, true);
ctx.stroke();
ctx.fill();
ctx.closePath();


// le biscuit




// var angle = 0;
// var delay;
//
// function drawAngle(ctx)
// {
//   ctx.arc(200, 50, 40, angle, angle);
//   ctx.stroke();
//   angle+=0.1;
//   if(angle > 2 * Math.PI) {clearInterval(delay);return;}
//   document.getElementById("angle").value = Math.round(angle * 100)/100;
// }
//
// function setAngle()
// {
//   angle=0;
//   var canvas = document.getElementById("canvas");
//   var ctx = canvas.getContext("2d");
//   ctx.lineWidth="3";
//   ctx.beginPath();
//   delay = setInterval(function(){ drawAngle(ctx); }, 100);
// }
// setAngle();
