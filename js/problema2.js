function calcularArea() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    if (isNaN(base) || isNaN(altura)) {
        alert('Ingrese valores numéricos válidos para la base y la altura.');
        return;
    }
    var area = (base * altura) / 2;
    document.getElementById('resultado').innerHTML = "El \u00E1rea del tri\u00E1ngulo es: ".concat(area);
}
