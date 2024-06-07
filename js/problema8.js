function determinarNumeroPerfecto() {
    var numero = parseInt(document.getElementById('numero').value);
    if (isNaN(numero) || numero <= 0) {
        alert('Ingrese un número entero positivo válido.');
        return;
    }
    var sumaDivisores = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    var esPerfecto = numero === sumaDivisores;
    var resultado = esPerfecto ? "".concat(numero, " es un n\u00FAmero perfecto") : "".concat(numero, " no es un n\u00FAmero perfecto");
    document.getElementById('resultado').innerHTML = resultado;
}
