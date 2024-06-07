function calcularFactorial() {
    var numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero < 0) {
        alert('Ingrese un número entero no negativo válido.');
        return;
    }
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById('resultado').innerHTML = "El factorial de ".concat(numero, " es: ").concat(factorial);
}
