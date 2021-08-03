var canvas2 = document.getElementById('canvas2');
if (canvas2.getContext){
var ctx2 = canvas2.getContext('2d');
// codigo de desenho aqui
} else {
// codigo para quando o canvas nao for suportado aqui

}
var c2 =
document.getElementById("canvas2");
var ctx2 =
c2.getContext("2d");

//cria um elemento de Gradiente ( x0, y0, x1, y1)
var grd = ctx2.createLinearGradient(0, 0, 600, 0);
//cor escala de 0(inicio) a 1(fim)
//pode ter cores intermediárias
grd.addColorStop(0, "#BE81F7");
grd.addColorStop(1, "#E6E0F8");
// preenche com o estilo do gradiente
ctx2.fillStyle = grd;
//desenha a forma com o gradiente
ctx2.fillRect(0, 0, 1000, 500);

ctx2.font = "50px Amatic SC";
ctx2.strokeStyle= "black";
ctx2.strokeText("Bem Vindos a SallyFace", 220, 50);
//linha1
ctx2.moveTo(100, 150);
ctx2.lineTo(300, 150);
ctx2.stroke();
//linha2
ctx2.moveTo(200, 150);
ctx2.lineTo(500, 150);
ctx2.stroke();
//linha3
ctx2.moveTo(300, 150);
ctx2.lineTo(700, 150);
ctx2.stroke();
//linha4
ctx2.moveTo(400, 350);
ctx2.lineTo(900, 150);
ctx2.stroke();