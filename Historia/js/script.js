const opcion11 = document.querySelector('#opcion11');
const opcion12 = document.querySelector('#opcion12');
const opcion13 = document.querySelector('#opcion13');
const opcion21 = document.querySelector('#opcion21');
const opcion22 = document.querySelector('#opcion22');
const opcion23 = document.querySelector('#opcion23');
const opcion31 = document.querySelector('#opcion31');
const opcion32 = document.querySelector('#opcion32');
const opcion33 = document.querySelector('#opcion33');

const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');

const urlSiguiente = document.querySelector('#hrefSiguiente');



let idSelected;
let dropTargetID;
let contadorPalabras1 = 0;
let contadorPalabras2 = 0;
let contadorPalabras3 = 0;
let contadorOpciones = 0;

opcion11.addEventListener('dragstart', dragStart, false);
opcion12.addEventListener('dragstart', dragStart, false);
opcion13.addEventListener('dragstart', dragStart, false);

opcion21.addEventListener('dragstart', dragStart, false);
opcion22.addEventListener('dragstart', dragStart, false);
opcion23.addEventListener('dragstart', dragStart, false);

opcion31.addEventListener('dragstart', dragStart, false);
opcion32.addEventListener('dragstart', dragStart, false);
opcion33.addEventListener('dragstart', dragStart, false);

// --------------------- RECARGAR PÁGINA --------------------------

function recargar(){
    location.reload(true);
}

// ------------------ DRAG START ------------------

function dragStart(){
    idSelected = this.id;
    console.log(idSelected);

    if( idSelected=="opcion11" || idSelected=="opcion12" || idSelected=="opcion13"){
        
        if(contadorPalabras1 == 0){
            contadorPalabras1++;
            contadorOpciones++;
            span1.addEventListener('dragover', actSpam, false);
            span1.addEventListener('dragover', dragOpverSpan1, false);
            span1.addEventListener('dragleave', dragLeaveSpan1, false);

            if (idSelected =="opcion11"){
                span1.addEventListener('drop', dropOption11, false); 
                console.log(urlSiguiente);
                urlSiguiente.href = "final_historia_camino.html";
            } 
            if (idSelected =="opcion12"){
                span1.addEventListener('drop', dropOption12, false); 
                urlSiguiente.href = "final_historia_bosque.html";
            } 
            if (idSelected =="opcion13"){
                span1.addEventListener('drop', dropOption13, false);
                urlSiguiente.href = "final_historia_montana.html";
            } 

            document.getElementById("span1").style.border = "black 2px solid";
        }
    } 
    if( idSelected=="opcion21" || idSelected=="opcion22" || idSelected=="opcion23"){

        if(contadorPalabras2 == 0){
            contadorPalabras2++;
            contadorOpciones++;
            span2.addEventListener('dragover', actSpam, false);
            span2.addEventListener('dragover', dragOpverSpan2, false);
            span2.addEventListener('dragleave', dragLeaveSpan2, false);

            if (idSelected =="opcion21") span2.addEventListener('drop', dropOption21, false);
            if (idSelected =="opcion22") span2.addEventListener('drop', dropOption22, false);
            if (idSelected =="opcion23") span2.addEventListener('drop', dropOption23, false);


            document.getElementById("span2").style.border = "black 2px solid";
        }
    } 
    if( idSelected=="opcion31" || idSelected=="opcion32" || idSelected=="opcion33"){

        if (contadorPalabras3 == 0){
            contadorPalabras3++;
            contadorOpciones++;
            span3.addEventListener('dragover', actSpam, false);
            span3.addEventListener('dragover', dragOpverSpan3, false);
            span3.addEventListener('dragleave', dragLeaveSpan3, false);

            if (idSelected =="opcion31") span3.addEventListener('drop', dropOption31, false);
            if (idSelected =="opcion32") span3.addEventListener('drop', dropOption32, false);
            if (idSelected =="opcion33") span3.addEventListener('drop', dropOption33, false);



            document.getElementById("span3").style.border = "black 2px solid";
        }
    } 

    if (contadorOpciones == 3){
        document.getElementById("buttonEnviar").disabled = false;
    }
}
function actSpam(event){
    event.preventDefault();
}

    
// ------------------ DRAG OVER ------------------

function dragOpverSpan1(){
    span1.style.border = "black 2px dashed";
}
function dragOpverSpan2(){
    span2.style.border = "black 2px dashed";
}
function dragOpverSpan3(){
    span3.style.border = "black 2px dashed";
}

//------------------- DRAG LEAVE ------------------

function dragLeaveSpan1(){
    span1.style.border = "black 2px solid";
}
function dragLeaveSpan2(){
    span2.style.border = "black 2px solid";
}
function dragLeaveSpan3(){
    span3.style.border = "black 2px solid";
}

//------------------- DROP ------------------------

function dropOption11(){
    span1.appendChild(opcion11);
    span1.style.border = "transparent";
    span1.style.height = "auto";
    opcion11.style.margin = "0px";

    document.getElementById("body").style.backgroundImage = "url('img/camino.jpg')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundAttachment = "fixed";
    document.getElementById("body").style.backgroundSize = "cover";
}

function dropOption12(){
    span1.appendChild(opcion12);
    span1.style.border = "transparent";
    span1.style.height = "auto";
    opcion12.style.margin = "0px";

    document.getElementById("body").style.backgroundImage = "url('img/bosque.jpg')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundAttachment = "fixed";
    document.getElementById("body").style.backgroundSize = "cover";

}
function dropOption13(){
    span1.appendChild(opcion13);
    span1.style.border = "transparent";
    span1.style.height = "auto";
    opcion13.style.margin = "0px";

    document.getElementById("body").style.backgroundImage = "url('img/montana.jpg')";
    document.getElementById("body").style.backgroundRepeat = "no-repeat";
    document.getElementById("body").style.backgroundAttachment = "fixed";
    document.getElementById("body").style.backgroundSize = "cover";

}

function dropOption21(){
    span2.appendChild(opcion21);
    span2.style.border = "transparent";
    span2.style.height = "auto";
    opcion21.style.margin = "0px";
}
function dropOption22(){
    span2.appendChild(opcion22);
    span2.style.border = "transparent";
    span2.style.height = "auto";
    opcion22.style.margin = "0px";
}
function dropOption23(){
    span2.appendChild(opcion23);
    span2.style.border = "transparent";
    span2.style.height = "auto";
    opcion23.style.margin = "0px";
}

function dropOption31(){
    span3.appendChild(opcion31);
    span3.style.border = "transparent";
    span3.style.height = "auto";
    opcion31.style.margin = "0px";
}
function dropOption32(){
    span3.appendChild(opcion32);
    span3.style.border = "transparent";
    span3.style.height = "auto";
    opcion32.style.margin = "0px";
}
function dropOption33(){
    span3.appendChild(opcion33);
    span3.style.border = "transparent";
    span3.style.height = "auto";
    opcion33.style.margin = "0px";
}



