// 3. Diseñar un programa que me solicite por teclado n cantidad de números, al
// finalizar la carga de los números el programa debe enviar los números a
// una función expresada como único parámetro rest donde serán ordenados
// de mayor a menor para luego mostrarlos en una tabla por consola.

const ordenarNumeros = function(...numeros) {
    return numeros.sort((a, b) => b - a);
};

const solicitarNumeros = () => {
    let numeros = [];
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

    return numeros;
};

const numeros = solicitarNumeros();

const numerosOrdenados = ordenarNumeros(...numeros);

console.table(numerosOrdenados);