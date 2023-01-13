function funcionHora(hora, min, sec){

    try{
        document.getElementById("mostrarHora").style.color = "black";

    infoZH();

    var now = new Date();
    var opcionZH = document.querySelector('input[name="zh"]:checked').value;

    var hora = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if (opcionZH == "occidental"){
        hora = hora -1;
    }
    if (opcionZH == "oriental"){
        hora = hora + 1;
    }
    if (opcionZH == "ultraOriental"){
        hora = hora + 2;
    }
   
    var opcionHora = document.querySelector('input[name="hora"]:checked').value;

    if(opcionHora == "24H"){

        if(hora < 10){
            document.getElementById("mostrarHora").innerHTML = "0" + hora;
        } else {
            document.getElementById("mostrarHora").innerHTML = hora;
        }

        if(min < 10){
            document.getElementById("mostrarHora").innerHTML += ":0" + min;
        } else {
            document.getElementById("mostrarHora").innerHTML += ":" + min;
        }

        if (sec < 10){
            document.getElementById("mostrarHora").innerHTML += ":0" + sec;
        } else{
            document.getElementById("mostrarHora").innerHTML += ":" + sec;
        }

    }if(opcionHora == "12H"){
        
        if (hora > 12) {
            hora = hora - 12; 
        }

        if(hora < 10){
            document.getElementById("mostrarHora").innerHTML = "0" + hora;
        } else {
            document.getElementById("mostrarHora").innerHTML = hora;
        }

        if(min < 10){
            document.getElementById("mostrarHora").innerHTML += ":0" + min;
        } else {
            document.getElementById("mostrarHora").innerHTML += ":" + min;
        }

        if (sec < 10){
            if (hora + 12 <= 12){
                document.getElementById("mostrarHora").innerHTML += ":0" + sec + "&nbspAM";
            } else{
                document.getElementById("mostrarHora").innerHTML += ":0" + sec + "&nbspPM";
            }

        } else{
            if (hora + 12 <= 12){
                document.getElementById("mostrarHora").innerHTML += ":" + sec + "&nbspAM";
            } else{
                document.getElementById("mostrarHora").innerHTML += ":" + sec + "&nbspPM";
            }
        }
        
    } 
    loop = setInterval(funcionHora, 1000);
    } catch{
        document.getElementById("mostrarHora").style.color = "red";
        document.getElementById("mostrarHora").innerHTML = "Escoje un formato de hora";
    }
}

function funcionFecha(){

    var now = new Date();
    var opcionFecha = document.querySelector('input[name="fecha"]:checked').value;

    var dia = now.getDay();
    var mes = now.getMonth();
    var ano = now.getFullYear();


    if (opcionFecha == 1){

        const opciones = { year: 'numeric', month: 'numeric', day: 'numeric' };
        document.getElementById("mostrarFecha").innerHTML = now.toLocaleDateString('cat-us', opciones);

    } if (opcionFecha == 2){

        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById("mostrarFecha").innerHTML = now.toLocaleDateString('cat-us', opciones);

    } if (opcionFecha == 3){
        const opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        document.getElementById("mostrarFecha").innerHTML = now.toLocaleDateString('cat-us', opciones);

    }
    loop = setInterval(funcionFecha, 1000);
}

function infoZH(){
    var opcionZH = document.querySelector('input[name="zh"]:checked').value;
    

    if (opcionZH == "occidental"){
        document.getElementById("infoOccidental").style.display = 'block';
        document.getElementById("infoCentral").style.display = 'none';
        document.getElementById("infoOriental").style.display = 'none';
        document.getElementById("infoUltraOriental").style.display = 'none';
    }
    if (opcionZH =="central"){
        document.getElementById("infoCentral").style.display = 'block';
        document.getElementById("infoOccidental").style.display = 'none';
        document.getElementById("infoOriental").style.display = 'none';
        document.getElementById("infoUltraOriental").style.display = 'none';
    }
    if (opcionZH == "oriental"){
        document.getElementById("infoOriental").style.display = 'block';
        document.getElementById("infoCentral").style.display = 'none';
        document.getElementById("infoOccidental").style.display = 'none';
        document.getElementById("infoUltraOriental").style.display = 'none';

    }
    if (opcionZH == "ultraOriental"){
        document.getElementById("infoUltraOriental").style.display = 'block';
        document.getElementById("infoOriental").style.display = 'none';
        document.getElementById("infoCentral").style.display = 'none';
        document.getElementById("infoOccidental").style.display = 'none';
    }
}
