function determinarPrimo() {
    var numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero <= 0) {
        alert('Ingrese un número entero positivo válido.');
        return;
    }
    if (numero === 1) {
        document.getElementById('resultado').innerHTML = "".concat(numero, " no es un n\u00FAmero primo ni compuesto");
        return;
    }
    var esPrimo = true;
    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }
    var resultado = esPrimo ? "".concat(numero, " es un n\u00FAmero primo") : "".concat(numero, " no es un n\u00FAmero primo");
    document.getElementById('resultado').innerHTML = resultado;
}
