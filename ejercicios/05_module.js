export class Calculadora {
    suma(a, b) {
        return a + b;
    }

    resta(a, b) {
        return a - b;
    }

    multiplicacion(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return a / b;
    }

    verificarNumeros(a, b){
        if (isNaN(a) || isNaN(b)) {
            throw new Error('Ambos valores deben ser números');
        }

        return true;
    }
}