function determinarParImpar() {
    var numero = parseFloat(document.getElementById('numero').value);
    if (isNaN(numero)) {
        alert('Ingrese un valor numérico válido.');
        return;
    }
    var esPar = numero % 2 === 0;
    var resultado = esPar ? 'El número es par' : 'El número es impar';
    document.getElementById('resultado').innerHTML = resultado;
}
