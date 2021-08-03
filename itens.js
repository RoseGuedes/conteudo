var canvas = document.getElementById('canvas');
if (canvas.getContext){
var ctx = canvas.getContext('2d');
// codigo de desenho aqui
} else {
// codigo para quando o canvas nao for suportado aqui

}
var c =
document.getElementById("canvas");
var ctx =
c.getContext("2d");

//cria um elemento de Gradiente ( x0, y0, x1, y1)
var grd = ctx.createLinearGradient(0, 0, 600, 0);
//cor escala de 0(inicio) a 1(fim)
//pode ter cores intermediárias
grd.addColorStop(0, "#58ACFA");
grd.addColorStop(1, "#61380B");
// preenche com o estilo do gradiente
ctx.fillStyle = grd;
//desenha a forma com o gradiente
ctx.fillRect(0, 0, 1000, 500);
//circulo
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(95, 50, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha2
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(190, 50, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha3
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(290, 50, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha4
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(390, 50, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha5
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(490, 50, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha6
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(95, 140, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha7
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(190, 140, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinhha8
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(290, 140, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 //bolinha9
 ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(390, 140, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
//bolinha10
ctx.beginPath();
 //(x, y, raio, anguloInicial, anguloFinal[, anti-horário -> true/false])
 ctx.arc(490, 140, 40, 0, 2 * Math.PI);
 ctx.fillStyle = "#610B0B";
 ctx.fill();
 
 