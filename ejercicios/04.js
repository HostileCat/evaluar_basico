// 4. Diseñar un programa que me permita ingresar n cantidad de palabras por
// teclado, al finalizar la carga, se debe enviar como a una función expresada
// como único parámetro rest donde nos responderá cual de las palabras
// ingresadas es mayor a todas las anteriores.

const encontrarPalabraMasLarga = function (...palabras) {
    let palabraMasLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

const solicitarPalabras = () => {
    
    let palabras = [];
    let entrada;

    while (true){
        entrada = parseInt(prompt('Ingrese la cantidad de palabras:'));
        
        if (isNaN(entrada)){
            alert(`No ha ingresado ningun numero`)
            continue;
        } 
        break;
    }

    for (let i = 1; i <= entrada; i++) {
        
        let palabra = prompt(`Ingrese la palabra ${i}:`);
        
        if (!(palabra === null)) {
            palabras.push(palabra);
        } else {
            alert('Entrada no válida. Por favor, ingrese una palabra.');
            i--;
        }
    }

    return palabras;
}

const palabras = solicitarPalabras();

const palabraLarga = encontrarPalabraMasLarga(...palabras);

alert(`La palabra más larga es: ${palabraLarga}`);
