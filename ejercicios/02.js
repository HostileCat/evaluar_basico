// 2. Diseñar un programa que me solicite ingresar n cantidad de números por
// teclado, luego de ingresar los números el programa me debe solicitar que
// operación deseo realizar:
// a. Sumar los números
// b. Contar los números primos
// c. Contar los números pares
// d. Calcular el promedio de los números primos
// e. Calcular el promedio de números pares
// Para este ejercicio se solicita trabajar con módulos.

import {promedioPares, promedioPrimos, contarPares, contarPrimos, sumaNumeros} from "./02_module.js"

let numeros = [];
let opcion;
let entrada;

while (true){
    entrada = parseFloat(prompt("Ingrese la cantidad de numeros"));
    
    if (isNaN(entrada)){
        alert(`No ha ingresado ningun numero`)
        continue;
    } 
    break;
}

for (let i = 1; i <= entrada; i++) {
    
    let num = parseFloat(prompt(`Ingrese el numero ${i}`));

    if (!isNaN(num)) {
        numeros.push(num);
    } else {
        alert('Entrada no válida. Por favor, ingrese un número válido.');
        i--;
    }
}


while (true){
    opcion = prompt(`Elija una operación:
    a. Sumar los números
    b. Contar los números primos
    c. Contar los números pares
    d. Calcular el promedio de los números primos
    e. Calcular el promedio de números pares`).toLowerCase();
    
    let exito = true

    switch (opcion) {
        case 'a':
            let suma = sumaNumeros(numeros);
            alert(`La suma de los números es: ${suma}`);
            break;
        
        case 'b':
            let primos = contarPrimos(numeros)
            alert(`Hay ${primos} números primos.`);
            break;
        
        case 'c':
            let pares = contarPares(numeros)
            alert(`Hay ${pares} números pares.`);
            break;
        
        case 'd':
            let promPrimos = promedioPrimos(numeros);
            alert(`El promedio de los números primos es: ${promPrimos}`);
            break;
        
        case 'e':
            let promPares = promedioPares(numeros);
            alert(`El promedio de los números pares es: ${promPares}`);
            break;
        
        default:
            alert('Opción no válida.');
            exito = false
            break;
    }
    if(!exito) continue;
    break;
}




