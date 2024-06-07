function elevarPotencia() {
    var base = parseFloat(document.getElementById('base').value);
    var exponente = parseFloat(document.getElementById('exponente').value);
    if (isNaN(base) || isNaN(exponente)) {
        alert('Ingrese valores numéricos válidos para la base y el exponente.');
        return;
    }
    var potencia = Math.pow(base, exponente);
    document.getElementById('resultado').innerHTML = "El resultado de elevar ".concat(base, " a la potencia ").concat(exponente, " es: ").concat(potencia);
}
