var canvas3 = document.getElementById('canvas3');
if (canvas3.getContext){
var ctx3 = canvas3.getContext('2d');
// codigo de desenho aqui
} else {
// codigo para quando o canvas nao for suportado aqui

}
var c3 =
document.getElementById("canvas3");
var ctx3 =
c3.getContext("2d");

//cria um elemento de Gradiente ( x0, y0, x1, y1)
var grd = ctx3.createLinearGradient(0, 0, 600, 0);
//cor escala de 0(inicio) a 1(fim)
//pode ter cores intermediárias
grd.addColorStop(0, "#58ACFA");
grd.addColorStop(1, "#61380B");
// preenche com o estilo do gradiente
ctx3.fillStyle = grd;
//desenha a forma com o gradiente
ctx3.fillRect(0, 0, 1000, 500);
//texto
ctx3.font = "30px Amatic SC";
ctx3.fillStyle="black";
ctx3.fillText("SallyFace= Sally Face é um jogo independente criado pelo desenvolvedor Steve Gabry e foi responsável pela programação, <br> criação de arte e composição musical. Foi distribuído pela Portable Moose e lançado no ano de 2016. <br> Disponível nas plataformas Windows, Linux e Mac. <br> Sally Face é um jogo 2D, com visuais feitos a mão e animações simples, mas o enredo combinado com uma boa dose de criatividade é o que faz a magia acontecer. <br> Seu enredo é simples e assustador, no qual o terror é construído na antecipação e no suspense.", 10, 50);