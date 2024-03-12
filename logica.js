//if...else

function funcionIF(){

  var vEdad = document.getElementById("edad").value;
    
    try { 
        if (vEdad === "") {
            throw "El valor ingresado no es un número o esta vacio.";
        }

        if (vEdad >= 18) {
            alert("Eres mayor de edad.");
        } else {
            alert("Eres menor de edad.");
        }
    } catch (error) { 
        alert("Error: " + error);
    } 
}

//Swich

function fSwhich(){

  var vDia = Number(document.getElementById("dia").value);
    
    try { 
        if (vDia === "") {
            throw "El valor ingresado no es un número o esta vacio.";
        }
       
       switch (vDia) {
        case 1:
        alert("1 es Lunes");
              break;
        case 2:
        alert("2 es Martes");
              break;
        case 3:
        alert("3 es Miercoles");
              break;
        case 4:
        alert("4 es Jueves");
              break;
        case 5:
        alert("5 es Viernes");
              break;
        case 6:
        alert("6 es Sabado");
              break;
        case 7:
        alert("7 es Domingo");
              break;
        default:
        alert("Número inválido");
        
       }
        } catch (error) { 
        alert("Error: " + error);
    } 
}

// For

function contador() {
    var cadena = document.getElementById("Texto").value;
    var resultado = "";
    for (var index = 0; index < cadena.length; index++) {
        resultado += cadena[index] +" "+index + "\n";
    }
    document.getElementById("resultado").value = resultado;
}

// While

function contWhile() {
    var cadena = document.getElementById("TextoInput").value;
    var resultado = "";
    var index = 0;
    while (index < cadena.length) {
        resultado += cadena[index]+" "+index+ "\n";
        index++;
    }
    document.getElementById("resultadoTextarea").value = resultado;
}

//do...while

function doWhileContador() {
    let cadena = document.getElementById("doWhileTex").value;
    let resultado = "";
    let index = 0;
    do {
        if (cadena.length > 0) {
            resultado += cadena[index] +" "+ index+ "\n";
            index++;
        } else {
            resultado = "No se ha ingresado ninguna palabra.";
            break;
        }
    } while (index < cadena.length);
    document.getElementById("rdoWhile").value = resultado;
}

//Operaciones Arimeticas

function OperacionesArimeticas() {
    let num1 = parseFloat(document.getElementById("numero1").value);
    let num2 = parseFloat(document.getElementById("numero2").value);
    let resultado = "Resultados de las operaciones:\n\n";
    
    if (!(num1 == "") && !(num2 == "")) {
        resultado += "Suma: " + (num1 + num2) + "\n";
        resultado += "Resta: " + (num1 - num2) + "\n";
        resultado += "Multiplicación: " + (num1 * num2) + "\n";
        if (num2 != 0) {
            resultado += "División: " + (num1 / num2) + "\n";
        } else {
            resultado += "División: No se puede dividir por cero.\n";
        }
    } else {
        resultado = "Por favor, ingrese números válidos.";
    }
    
    document.getElementById("rOA").value = resultado;
}

//Operaciones Logicas

function OperacionesLogicos() {
    let valor1 = (document.getElementById("valor1").value === "true");
    let valor2 = (document.getElementById("valor2").value === "true");
    let resultado = "Resultados de las operaciones lógicas:\n\n";
    
    resultado += "AND (&&): " + (valor1 && valor2) + "\n";
    resultado += "OR (||): " + (valor1 || valor2) + "\n";
    
    document.getElementById("rOL").value = resultado;
}

//Operaciones Math

function OperacionesMath() {
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = "Resultados de las operaciones con el objeto Math:\n\n";

    if (!isNaN(numero)) {
        resultado += "Raíz cuadrada de " + numero + ": " + Math.sqrt(numero) + "\n";
        resultado += "Número aleatorio entre 0 y 1: " + Math.random() + "\n";
    } else {
        resultado = "Por favor, ingrese un número válido.";
    }

    document.getElementById("rOM").value = resultado;
}

//objeto date

function obtenerFecha() {
    var fechaActual = new Date();
    var resultado = "Fecha y hora actual:\n\n";
    
    resultado += "Fecha: " + fechaActual.toLocaleDateString() + "\n";
    resultado += "Hora: " + fechaActual.toLocaleTimeString() + "\n";
    
    document.getElementById("rOD").value = resultado;
}

//Cadenas Literales

function CadenasLiterales() {
    var nombre = document.getElementById("nombre").value;
    var poema = `Hola ${nombre}, es un placer conocerte.\n`;
   

    document.getElementById("rCL").value = poema;
}

//Arreglos
 
var miArreglo = [];

function agregarElemento() {
    var nuevoElemento = document.getElementById("nuevoElemento").value;
    miArreglo.push(nuevoElemento);
    actualizar();
}

function actualizar() {
    var contenido = "";
    for (var i = 0; i < miArreglo.length; i++) {
        contenido += miArreglo[i] + "\n";
    }
    document.getElementById("arregloTextarea").value = contenido;
}

//Arreglos Tipados

var miArregloTipado = new Int32Array(10);

function agregarNumero() {
    var nuevoNumero = parseFloat(document.getElementById("nuevoNumero").value);
    if (!isNaN(nuevoNumero)) {
        for (var i = 0; i < miArregloTipado.length; i++) {
            if (miArregloTipado[i] === 0) {
                miArregloTipado[i] = nuevoNumero;
                break;
            }
        }
        actualizarArregloTipado();
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function actualizarArregloTipado() {
    var contenido = "";
    for (var i = 0; i < miArregloTipado.length; i++) {
        contenido += miArregloTipado[i] + "\n";
    }
    document.getElementById("arregloNumerosTextarea").value = contenido;
}


//DOM

window.onload = function() {
    var resultadoTextArea = document.getElementById("rDOM");

    // Encontrar elementos HTML por ID
    var elementoPorId = document.getElementById("edad");
    resultadoTextArea.value += "Elemento por ID: " + elementoPorId + "\n\n";

    // Encontrar elementos HTML por nombre de etiqueta
    var elementosPorTag = document.getElementsByTagName("input");
    resultadoTextArea.value += "Elementos por etiqueta: " + elementosPorTag.length + " elementos\n\n";

    // Encontrar elementos HTML por nombre de clase
    var elementosPorClase = document.getElementsByClassName("resultado");
    resultadoTextArea.value += "Elementos por clase: " + elementosPorClase.length + " elementos\n\n";

    // Encontrar elementos HTML mediante selectores CSS
    var elementosPorSelector = document.querySelectorAll("button");
    resultadoTextArea.value += "Elementos por selector: " + elementosPorSelector.length + " elementos\n\n";

    // Encontrar elementos HTML por colecciones de objetos HTML
    var coleccionFormularios = document.forms;
    resultadoTextArea.value += "Colección de formularios: " + coleccionFormularios.length + " formularios\n\n";
}







