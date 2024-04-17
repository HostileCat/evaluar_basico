function validarTarjeta(numero) {
    const americanExpress = /^3[4-7][0-9]{13}$/;
    const dinersClub = /^3(?:0[0-5]|[6-8][0-9])[0-9]{11}$/;
    const discover = /^6011[0-9]{12}$/;
    const mastercard = /^5[1-5][0-9]{14}$/;
    const visa = /^4[0-9]{15}$/;

    if (americanExpress.test(numero)) {
        return "American Express";
    } else if (dinersClub.test(numero)) {
        return "Diners Club";
    } else if (discover.test(numero)) {
        return "Discover";
    } else if (mastercard.test(numero)) {
        return "Mastercard";
    } else if (visa.test(numero)) {
        return "Visa";
    } else {
        return false;
    }
}

function validarEntrada(numero) {
    const regex = /^[0-9]{1,16}$/;

    if (!regex.test(numero)) {
        return false;
    }

    return true;
}

export function main() {
    let numero;
    do {
        numero = prompt("Ingrese el número de su tarjeta de crédito:");
        if (numero === null){
            alert(`El usuario canceló la operación`);
            return true;
        }
        if (!validarEntrada(numero)) {
            alert("Por favor ingrese un número válido de hasta 16 dígitos.");
        }
    } while (!validarEntrada(numero));

    const tipoTarjeta = validarTarjeta(numero);

    if (!tipoTarjeta){
        alert(`Tipo de tarjeta no reconocida`)
        return false;
    } else{
        alert(`Su tarjeta es de tipo: ${tipoTarjeta}`);
        return true;
    }
    
}

