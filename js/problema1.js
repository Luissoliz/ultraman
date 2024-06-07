function calcularPromedio() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var numero3 = parseFloat(document.getElementById('numero3').value);
    var promedio = (numero1 + numero2 + numero3) / 3;
    document.getElementById('resultado').innerHTML = "El promedio de los tres n\u00FAmeros es: ".concat(promedio);
}
