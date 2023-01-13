function CorreccionPregunta1y2(){
    try{
        var respuesta1 = document.querySelector('input[name="respuestas1"]:checked').value;
        var respuesta2 = document.querySelector('input[name="respuestas2"]:checked').value;
        
        if(respuesta1 == "Mercurio" && respuesta2 == "8"){
            document.getElementById("correcto12").innerHTML= "¡¡Has acertado!!";
            document.getElementById("correcto12").style.color = "green";
            document.getElementById("correcto12").style.backgroundColor = "rgba(1, 124, 1, 0.281)";
            document.getElementById("preguntas2").style.display = 'block';
            document.getElementById("preguntas1").style.color = 'grey';
            document.getElementById("boton1").style.display = 'none';
            document.getElementById("mercurio").disabled = true;
            document.getElementById("pluton").disabled = true;
            document.getElementById("venus").disabled = true;
            document.getElementById("siete").disabled = true;
            document.getElementById("nueve").disabled = true;
            document.getElementById("ocho").disabled = true;
        }
        else{
            document.getElementById("correcto12").innerHTML= "¡¡Has fallado!!";
            document.getElementById("correcto12").style.color = "red";
            document.getElementById("correcto12").style.backgroundColor = "rgba(255, 70, 70, 0.452)";
        }
    } catch{
        if(respuesta1 == null || respuesta2 == null){
            document.getElementById("correcto12").innerHTML= "No puedes dejar preguntas en blanco";
            document.getElementById("correcto12").style.color = "red";
            document.getElementById("correcto12").style.backgroundColor = "rgba(255, 70, 70, 0.452)";
        }
    }
}
function CorreccionPregunta3y4(){
try{
    var respuesta3 = document.querySelector('input[name="respuestas3"]:checked').value;
    var respuesta4 = document.querySelector('input[name="respuestas4"]:checked').value;

    if (respuesta3 == "3,1415" && respuesta4 == "1"){
        
        document.getElementById("correcto34").innerHTML= "¡¡HAS GANADO!!";
        document.getElementById("correcto34").style.color = "green";
        document.getElementById("correcto34").style.backgroundColor = "rgba(1, 124, 1, 0.281)";
        document.getElementById("boton2").disabled = true;
        document.getElementById("preguntas2").style.color = 'grey';
        document.getElementById("3,1516").disabled = true;
        document.getElementById("3,1514").disabled = true;
        document.getElementById("3,1415").disabled = true;
        document.getElementById("3").disabled = true;
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;

        document.getElementById("boton2").style.display = 'none';
    } else {
        document.getElementById("correcto34").innerHTML= "¡¡Has fallado!!";
        document.getElementById("correcto34").style.color = "red";
        document.getElementById("correcto34").style.backgroundColor = "rgba(255, 70, 70, 0.452)";
    }
} catch{
    if(respuesta3 == null || respuesta4 == null){
        document.getElementById("correcto34").innerHTML= "No puedes dejar preguntas en blanco";
        document.getElementById("correcto34").style.color = "red";
        document.getElementById("correcto34").style.backgroundColor = "rgba(255, 70, 70, 0.452)";
    }
}
}

function randomResspuestas(){
    var arrayRespuestas1 = ["Venus", "Mercurio", "Plutón"];
    var arrayRespuestas2 = ["9", "7", "8"];
    var arrayRespuestas3 = ["3,1415", "3,1514", "3,1516"];
    var arrayRespuestas4 = ["3", "0", "1"];
    var val1 = Math.floor(Math.random() * 3);
    var val2 = Math.floor(Math.random() * 3);
    var val3 = Math.floor(Math.random() * 3);
    

    document.getElementById("venus").value = arrayRespuestas1[val1];
    document.getElementById("venusl").innerHTML = arrayRespuestas1[val1];
    document.getElementById("mercurio").value = arrayRespuestas1[val2];
    document.getElementById("mercuriol").innerHTML = arrayRespuestas1[val2];
    document.getElementById("pluton").value = arrayRespuestas1[val3];
    document.getElementById("plutonl").innerHTML = arrayRespuestas1[val3];

    document.getElementById("siete").value = arrayRespuestas2[val1];
    document.getElementById("sietel").innerHTML = arrayRespuestas2[val1];
    document.getElementById("nueve").value = arrayRespuestas2[val2];
    document.getElementById("nuevel").innerHTML = arrayRespuestas2[val2];
    document.getElementById("ocho").value = arrayRespuestas2[val3];
    document.getElementById("ochol").innerHTML = arrayRespuestas2[val3];

    document.getElementById("3,1415").value = arrayRespuestas3[val1];
    document.getElementById("3,1415l").innerHTML = arrayRespuestas3[val1];
    document.getElementById("3,1514").value = arrayRespuestas3[val2];
    document.getElementById("3,1514l").innerHTML = arrayRespuestas3[val2];
    document.getElementById("3,1516").value = arrayRespuestas3[val3];
    document.getElementById("3,1516l").innerHTML = arrayRespuestas3[val3];

    document.getElementById("3").value = arrayRespuestas4[val1];
    document.getElementById("3l").innerHTML = arrayRespuestas4[val1];
    document.getElementById("0").value = arrayRespuestas4[val2];
    document.getElementById("0l").innerHTML = arrayRespuestas4[val2];
    document.getElementById("1").value = arrayRespuestas4[val3];
    document.getElementById("1l").innerHTML = arrayRespuestas4[val3];

    while(val1 == val2 || val1==val3 ||val2==val3){
        val2 = Math.floor(Math.random() * 3);
        val2 = Math.floor(Math.random() * 3);
        val3 = Math.floor(Math.random() * 3);

        document.getElementById("mercurio").value = arrayRespuestas1[val2];
        document.getElementById("mercuriol").innerHTML = arrayRespuestas1[val2];
        document.getElementById("venus").value = arrayRespuestas1[val1];
        document.getElementById("venusl").innerHTML = arrayRespuestas1[val1];
        document.getElementById("pluton").value = arrayRespuestas1[val3];
        document.getElementById("plutonl").innerHTML = arrayRespuestas1[val3];

        document.getElementById("siete").value = arrayRespuestas2[val1];
        document.getElementById("sietel").innerHTML = arrayRespuestas2[val1];
        document.getElementById("nueve").value = arrayRespuestas2[val2];
        document.getElementById("nuevel").innerHTML = arrayRespuestas2[val2];
        document.getElementById("ocho").value = arrayRespuestas2[val3];
        document.getElementById("ochol").innerHTML = arrayRespuestas2[val3];
        document.getElementById("3,1415").value = arrayRespuestas3[val1];

        document.getElementById("3,1415l").innerHTML = arrayRespuestas3[val1];
        document.getElementById("3,1514").value = arrayRespuestas3[val2];
        document.getElementById("3,1514l").innerHTML = arrayRespuestas3[val2];
        document.getElementById("3,1516").value = arrayRespuestas3[val3];
        document.getElementById("3,1516l").innerHTML = arrayRespuestas3[val3];

        document.getElementById("3").value = arrayRespuestas4[val1];
        document.getElementById("3l").innerHTML = arrayRespuestas4[val1];
        document.getElementById("0").value = arrayRespuestas4[val2];
        document.getElementById("0l").innerHTML = arrayRespuestas4[val2];
        document.getElementById("1").value = arrayRespuestas4[val3];
        document.getElementById("1l").innerHTML = arrayRespuestas4[val3];        
    }
}
addEventListener('load', randomResspuestas, false);


