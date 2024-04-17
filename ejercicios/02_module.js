export function sumaNumeros(numeros){
    let suma = numeros.reduce((a, b) => a + b, 0);
    return suma;
}

export function contarPrimos(numeros){
    let primos = numeros.filter(num => esPrimo(num)).length;
    return primos
}

export function contarPares(numeros){
    let pares = numeros.filter(num => num % 2 === 0).length;
    return pares;
}

export function promedioPrimos(numeros){
    let primos = numeros.filter(num => esPrimo(num));
    let promedio = calcularPromedio(primos);
    return promedio;
}

export function promedioPares(numeros){
    let pares = numeros.filter(num => num % 2 === 0)
    let promedio = calcularPromedio(pares);
    return promedio;
}


function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function calcularPromedio(arr) {
    if (arr.length === 0) return 0;
    
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}
