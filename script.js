var botonEncriptar = document.querySelector(".btn-encriptar"); //Recuperar un elemento de HTML
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var botonCopiar = document.querySelector(".btn-copiar");


botonEncriptar.onclick = encriptar; //Quitar paréntesis para que no inicie la función hasta que se llame
botonDesencriptar.onclick = desencriptar;
botonCopiar.addEventListener("click", copiar =() =>{
    let contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
})

function encriptar(){
    ocultarAdelante();
    resultado.textContent = encriptarTexto(recuperarTexto());
}

function desencriptar(){
    ocultarAdelante();
    resultado.textContent = desencriptarTexto(recuperarTexto());
}


function recuperarTexto(){
    let area = document.querySelector(".area");
    //alert(area.value) 
    return area.value //value es para recuperar el elemento del texto
}

function ocultarAdelante(){
    munieco.classList.add("ocultar"); //Agregar la clase ocultar
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "ai";
        }
        else if(texto[i] == "e"){
            textoFinal += "enter";
        }
        else if(texto[i] == "i"){
            textoFinal += "imes";
        }
        else if(texto[i] == "o"){
            textoFinal += "ober";
        }
        else if(texto[i] == "u"){
            textoFinal += "ufat";            
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal += "a";
            i += 1;
        }
        else if(texto[i] == "e"){
            textoFinal += "e";
            i += 4;
        }
        else if(texto[i] == "i"){
            textoFinal += "i";
            i += 3;
        }
        else if(texto[i] == "o"){
            textoFinal += "o";
            i += 3;
        }
        else if(texto[i] == "u"){
            textoFinal += "u";
            i += 3;            
        }
        else{
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}