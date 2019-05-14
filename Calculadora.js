//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init() {
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('c');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
    var raiz = document.getElementById('raiz');
    var cuadrado = document.getElementById('cuadrado');
    var masmenos = document.getElementById('masmenos');
    var fraccion = document.getElementById('fraccion');
    var porcentaje = document.getElementById('porcentaje');

    //Eventos de click
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function (e) {
        operandob = resultado.textContent;
        resolver();
    }
    punto.onclick = function (e) {
        resultado.textContent = resultado.textContent + ".";
    }
    raiz.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "√";
    }
    cuadrado.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "x";
        limpiar();
    }
    masmenos.onclick = function (e) {
        resultado.textContent = "-" + resultado.textContent;
    }
    fraccion.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "1/x";
    }
    porcentaje.onclick = function (e) {
        operandoa = resultado.textContent;
        operacion = "%";
        limpiar();
    }

}

function limpiar() {
    resultado.textContent = "";
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        case "√":
            res = Math.sqrt(parseFloat(operandoa));
            break;
        case "x":
            res = Math.pow(operandoa, operandob);
            break;
        case "1/x":
            res = 1 / parseFloat(operandoa);
            break;
        case "%":
            res = (parseFloat(operandoa) / parseFloat(operandob)) * 100;
            resultado+'a';
            break;
    }
    resetear();
    resultado.textContent = res;
}