function contarVocales() {
    var texto = document.getElementById('texto').value.toLowerCase();
    if (texto.trim() === '') {
        alert('Ingrese un texto válido.');
        return;
    }
    var contadorVocales = 0;
    var vocales = 'aeiouáéíóü';
    for (var i = 0; i < texto.length; i++) {
        if (vocales.indexOf(texto[i]) !== -1) {
            contadorVocales++;
        }
    }
    document.getElementById('resultado').innerHTML = "El texto ingresado contiene ".concat(contadorVocales, " vocales.");
}
