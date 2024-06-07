function invertirTexto() {
    var texto = document.getElementById('texto').value;
    if (texto.trim() === '') {
        alert('Ingrese un texto válido.');
        return;
    }
    var textoInvertido = texto.split('').reverse().join('');
    document.getElementById('resultado').innerHTML = "El texto invertido es: ".concat(textoInvertido);
}
