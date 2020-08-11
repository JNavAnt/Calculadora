var numeros = [];
var operacion;
function limpiar(){
    for(let i = 0; i < numeros.length; i++){
        numeros[i] = 0;
        
    }
    operacion = null;
}

function suma(){
    numeros[0] = document.getElementById("resultado").value;
    operacion="suma";
}
function resta(){
    numeros[0] = document.getElementById("resultado").value;
    operacion="resta";
}
function multiplicacion(){
    numeros[0] = document.getElementById("resultado").value;
    operacion="multi";
}
function division(){
    numeros[0] = document.getElementById("resultado").value;
    operacion="division";
}


function igual(){
    numeros[1] = document.getElementById("resultado").value;
    console.log(numeros[0]);
    console.log(numeros[1]);
    switch(operacion){
        case "suma":
            numeros[0] = parseInt(numeros[0]) + parseInt(numeros[1]);
            document.getElementById("resultado").value = numeros[0];
            
        break;

        case "resta":
            numeros[0] = parseInt(numeros[0]) - parseInt(numeros[1]);
            document.getElementById("resultado").value = numeros[0];
        break;

        case "multi":
            numeros[0] = parseInt(numeros[0]) * parseInt(numeros[1]);
            document.getElementById("resultado").value = numeros[0];
        break;

        case "division":
            numeros[0] = parseInt(numeros[0]) / parseInt(numeros[1]);
            document.getElementById("resultado").value = numeros[0];
        break;
    }
}

