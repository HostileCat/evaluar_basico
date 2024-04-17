// 5. Diseñar un modulo llamado calculadora, en este módulo debe exportar una
//             clase con los siguientes metodos:
//             a. Suma
//             b. Resta
//             c. Multiplicación
//             d. División
//             Al momento de realizar cada operación el sistema debe validar que no se
//             presenten errores, si al momento de su ejecución se presenta algún error, el
//             sistema debe enviar un mensaje personalizado indicando el tipo de error
//             para que el usuario lo solucione y continue realizando los cálculos básicos
//             de las matemáticas.

import { Calculadora } from "./05_module.js";

const calc = new Calculadora();

let num1;
let num2;

while(true){
    num1 = parseFloat(prompt(`Ingrese el primer numero`))
    num2 = parseFloat(prompt(`Ingrese el segundo numero`))
    
    let verificar = false;

    try {
        verificar = calc.verificarNumeros(num1, num2);
    } catch (error) {
        console.error(error.message);
    }

    if(verificar) break;
}



while (true){
    let bucle = false;
    
    let operacion = prompt(`Elige el tipo de operación
    a. Suma
    b. Resta
    c. Multiplicación
    d. División`)

    try {
        switch (operacion) {
            case "a":
                console.log(calc.suma(num1, num2));    
                break;
            case "b":
                console.log(calc.resta(num1, num2)); 
                break;   
            case "c":
                console.log(calc.multiplicacion(num1, num2));
                break;
            case "d":
                console.log(calc.division(num1, num2)); 
                break;
            default:
                console.error(`El tipo de operacion no es valido`)
                bucle = true;
                break;
        }
                
    } catch (error) {
        console.error(error.message);
    }

    if (!bucle) break;
    
}
