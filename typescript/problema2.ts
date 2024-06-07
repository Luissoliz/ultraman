function calcularArea(): void {
    const base: number = parseFloat(document.getElementById('base').value);
    const altura: number = parseFloat(document.getElementById('altura').value);
  
    if (isNaN(base) || isNaN(altura)) {
      alert('Ingrese valores numéricos válidos para la base y la altura.');
      return;
    }
  
    const area: number = (base * altura) / 2;
    document.getElementById('resultado').innerHTML = `El área del triángulo es: ${area}`;
  }
  