var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    rojo = false,
    radio = 110,
    radioNumeros = radio + 15;
    angulo = 0,
    tamanioManecilla = canvas.width/25,
    tamanioManecillaHora = canvas.width/10;

function dibujarCirculo(){
  context.beginPath();
  context.lineWidth = 4;
  context.strokeStyle = "#55";
  context.arc(canvas.width/2,canvas.height/2,radio,0,Math.PI*2);
  context.stroke();
}

function dibujarNumeros(){
  for(var i=1;i<=12;i++){
    angulo = ((i-3) * 0.1666 * Math.PI);
    context.fillText(i,canvas.width/2+Math.cos(angulo)*(radioNumeros)-context.measureText(i).width/2,
                     canvas.height/2+Math.sin(angulo)*(radioNumeros)+5);
  }
}

function dibujarPuntoCentrico(){
  context.beginPath();
  context.fillStyle = "#55";
  context.arc(canvas.width/2,canvas.height/2,5,0,Math.PI*2);
  context.fill();
}

function dibujarManecillas(loc, isHour){
  var angulo = (Math.PI*2) * (loc/60) - Math.PI/2,
      radioManecillas = isHour ? radio - tamanioManecilla-tamanioManecillaHora 
                           : radio - tamanioManecilla;

  context.moveTo(canvas.width/2, canvas.height/2);
  context.lineTo(canvas.width/2  + Math.cos(angulo)*radioManecillas, 
                  canvas.height/2 + Math.sin(angulo)*radioManecillas);
  context.stroke();
}

function actualizarManecillas() {
  var fecha = new Date,
  hora = fecha.getHours();
  hora = hora > 12 ? hora - 12 : hora,
   
  dibujarManecillas(hora*5 + (fecha.getMinutes()/60)*5, true, 0.5);
  dibujarManecillas(fecha.getMinutes(), false, 0.5);
  dibujarManecillas(fecha.getSeconds(), false, 0.2);
}

function iniciarReloj(){
  context.clearRect(0,0,canvas.width,canvas.height);
  dibujarCirculo();
  dibujarNumeros();
  dibujarPuntoCentrico();
  actualizarManecillas();
}

loop = setInterval(iniciarReloj, 1000);