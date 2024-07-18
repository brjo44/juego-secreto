//***********************let titulo = document.querySelector('h1'); 
/*El document object model (DOM) es el puente entre
Javascript y HTML, para conectar estos dos lenguajes.
Dicho documento nos deja trabajar con N métodos, entre ellos el querySelector
el cual nos permite, mandar a llamar elementos del HTML, en este caso el header 'h1' para asignarle
un valor
*/
//***********************titulo.innerHTML =('Juego del número secreto');
//Metodo innerHTML para escribir texto

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = ('Indica un número del 1 al 10');*/
//Escribir texto en el elemento 'p' de párrafo      

//Todos los eventos en javascript, ya sea para un botón etc. Inician con un 'on' de en o cuando

//Las funciones realizan una tarea y pueden o no, retornar un valor

/*Existen dos pasos importantes para las funciones en javascript y HTML:
1- En HTML se invoca la función, para realizar una tarea de un evento, ejemplo el button onclick
="intentoDeUsuari();"
2- En javascript se declara y define la función
*/

/*

TRUCO: FORMA DE BUSCAR UN VALOR: SE SELECCIONA Y CON CONTROL + F SE BUSCA SI TAMBIÉN EXISTE EN TODO
EL RESTO DE CÓDIGO, EL MISMO VALOR.

*/



//let numeroSecreto = generarNumeroSecreto(); // Variable de alcance global
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
} //Establecimiento de función genérica, para aquellos elementos de cadena de texto. Simplifica process

/*function verificarIntento() {
    //La función es el encapsulamiento de una acción que, queremos que haga
    //******************alert('Click desde la función');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);/* Es una forma
    ya que, si solo dejamos el querySelector con el 'input, es mas que suficiente, esta es otra 
    manera, para especificar el input, porque en un proyecto pueden haber varios, input, y una forma
    de diferenciar al que se desea aplicar código, es mediante el id, es más específico
    */
    /*console.log(numeroSecreto); //Es number
    console.log(numeroDeUsuario); //Era de tipo string, pero, con el cambio al document arriba
    //a parseInt, ahora los dos valores son number
    console.log(numeroDeUsuario === numeroSecreto); //Esto valida que estos dos valores sean iguales 
    //tanto en valor como tipo
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el número');
    }
    return;
} 
*/


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //let numeroSecreto = generarNumeroSecreto(); // Generar un nuevo número secreto con cada intento
    console.log(numeroSecreto); // Es number
    console.log(numeroDeUsuario); // Era de tipo string, pero, con el cambio al document arriba a parseInt, ahora los dos valores son number
    console.log(numeroDeUsuario === numeroSecreto); // Esto valida que estos dos valores sean iguales tanto en valor como tipo
    
    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p.texto__parrafo', `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else  {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p.texto__parrafo', 'El número es menor');
        } else {
           if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p.texto__parrafo', 'El número es mayor');
           }
        }
        intentos++;
        limpiarCaja();
    } 
}





function limpiarCaja () { //Proposito? Despues de ingresar un valor se borre de forma automatica
    document.querySelector('#valorUsuario').value = '';
}





function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        // Reinicia la lista si ya se han sorteado todos los números del 1 al 10
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Llama a la función nuevamente
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }  
}


/* //Otra solución para mantener, para darle finalidad al bucle infinito de la recursividad
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length >= 10) {
        // Reinicia la lista si ya se han sorteado todos los números del 1 al 10
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); // Llama a la función nuevamente
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
*/



function condicionalesIniciales () {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}





function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio 
    //Iniciar el número de intentos 
    condicionalesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
    
// Llamada a la función después de que el DOM se haya cargado
//document.addEventListener('DOMContentLoaded', condicionalesIniciales);

condicionalesIniciales();

//***************************************Desafío 1: Funciones****************************************/
/*function consoleMessage (texto) {
    console.log(texto);
}
consoleMessage('Hola mundo');

let nombre = prompt("Favor ingresar nombre: ")
function recibirNombre (nombre) {
    console.log(nombre);
}
recibirNombre (`¡Hola, ${nombre}!`);

let numero = parseInt(prompt("Ingrese un número: "));

function recibirNumero(numero) {
    return numero * 2;
}

let resultado = recibirNumero(numero);
alert(`El doble del número ${numero} es ${resultado}`);

let numero1 = parseInt(prompt("Ingrese un número 1: "));
let numero2 = parseInt(prompt("Ingrese un número 2: "));
let numero3 = parseInt(prompt("Ingrese un número 3: "));
function promedioUS (numero1,numero2,numero3) {
    return (numero1+numero2+numero3)/3;
}
let promedio = promedioUS(numero1,numero2,numero3);
alert(`El promedio de los 3 números es igual a ${promedio}`);

function numeroMayor(numero1,numero2) {
    return numero1 > numero2 ? `El primer numero ingresado es mayor ${numero1}` : `El segundo numero ingresado es mayor ${numero2}`;
}
let mayor = numeroMayor(numero1,numero2);
alert(mayor);

function porsimismo (numero1) {
    return numero1*numero1;
    
}
let uno = porsimismo(numero1);
alert(`El número ${numero1} multiplicado por sí mismo es igual a ${uno}`);
*/
/*
Array estático en Javascript:
****************************************************************************************************
Declarar una variable de tipo array: 
let numeroSorteados = [];
console.log(numeroSorteados); //Para ver el contenido en la consola
****************************************************************************************************
Método para insertar valores al arrayList. Existen para agregar al inicio y al final
Vamos agregar para agregar al final: numeroSorteados.push (5);
****************************************************************************************************
Para saber el tamaño del arreglo, console.log(numeroSorteados.length);
****************************************************************************************************
Para mostrar el valor del arrayo, o bien solciitar por posicion es:
console.log(numerosSorteados[0]) //Muestra el valor de la posicion 0
****************************************************************************************************
Y para mostrar el valor del ultimo elemento del array es: 
console.log(numeroSorteados[numeroSorteados.length-1]);
*/

/******************************************************************************************** */
//*********************************Desafio Lista: 4****************************************** */
/*
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');
function verLista (lenguajesDeProgramacion) {
    console.log(lenguajesDeProgramacion);
}
verLista(lenguajesDeProgramacion);
function ordenInverso (lenguajesDeProgramacion) {
    for (let contador = lenguajesDeProgramacion.length -1;  contador >= 0 ;contador--) {
        console.log(lenguajesDeProgramacion[contador]);
    }
}
ordenInverso(lenguajesDeProgramacion);

let numeros = [1, 2, 3, 4, 5];
let suma = 0;
let promedio = 0;

function promedioO(numeros) {
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index];
    }
    // Calcular promedio
    promedio = suma / numeros.length;
    return promedio; // Devolver el promedio calculado
}

// Llamada a la función y mostrar el resultado en la consola
console.log(promedioO(numeros)); // Llama la función y muestra el resultado en la consola

let numeroMayor = numeros[0];
function numeroMayor1(numeros) {
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] > numeroMayor) {
            numeroMayor = numeros[index];
        }        
    }
    return numeroMayor;
}
let numeroMenor1 = numeros[0];
console.log(numeroMayor1(numeros)); // Llama la función y muestra el resultado (número mayor) en la consola
function numeroMenor (numeros) {
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] < numeroMenor1) {
            numeroMenor1 = numeros[index];
        }      
    }
    return numeroMenor1;
}
console.log(numeroMenor(numeros));



function sumaDeElementos(elementos) {
    let suma1 = 0;  // Inicializar suma1 antes del bucle
    
    for (let index = 0; index < elementos.length; index++) {
        suma1 += elementos[index];  // Sumar cada elemento al acumulador suma1
    }
    
    return suma1;
}
let elementos = [1,2,3];
console.log(`El resultado de la suma es igual a ${sumaDeElementos(elementos)}`);

function encontrarPosicion(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            return i;  // Devuelve la posición si encuentra el elemento
        }
    }
    return -1;  // Devuelve -1 si no encuentra el elemento
}

// Ejemplo de uso:
let miLista = [10, 20, 30, 40, 50];
let elementoBuscado = 30;
let posicion = encontrarPosicion(miLista, elementoBuscado);

if (posicion !== -1) {
    console.log(`El elemento ${elementoBuscado} se encuentra en la posición ${posicion} de la lista.`);
} else {
    console.log(`El elemento ${elementoBuscado} no existe en la lista.`);
}

//Crea una función que reciba dos listas de números del mismo tamaño 
//y devuelva una nueva lista con la suma de los elementos uno a uno.



function listas (lista1,lista2) {

    let listaResultado = [];
    for (let index = 0; index < lista1.length; index++) {

            listaResultado.push(lista1[index] + lista2[index]);  
        }
    return listaResultado;
}
let lista1 = [1,1,2];
let lista2 = [2,2,2];
let listaSumada = listas(lista1, lista2);
console.log("Lista resultante de la suma:", listaSumada);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el 
//cuadrado de cada número.
function listasAND (listaA) {

    let listaResultadoD = [];
    for (let index = 0; index < listaA.length; index++) {

            listaResultadoD.push(listaA[index]*2);  
        }
    return listaResultadoD;
}
let  listaA = [2,1,2];

let listaSumadaC = listasAND(listaA);
console.log("Lista resultante del cuadrado de cada número es igual a :", listaSumadaC);
*/