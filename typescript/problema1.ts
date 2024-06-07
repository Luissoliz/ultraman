function calcularPromedio() {
    const numero1: number = parseFloat(document.getElementById('numero1').value);
    const numero2: number = parseFloat(document.getElementById('numero2').value);
    const numero3: number = parseFloat(document.getElementById('numero3').value);

    const promedio: number = (numero1 + numero2 + numero3) / 3;

    document.getElementById('resultado').innerHTML = `El promedio de los tres números es: ${promedio}`;
}
