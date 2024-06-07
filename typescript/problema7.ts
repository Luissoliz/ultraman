function calcularFactorial(): void {
    const numero: number = parseInt(document.getElementById('numero').value);
  
    if (isNaN(numero) || numero < 0) {
      alert('Ingrese un número entero no negativo válido.');
      return;
    }
  
    let factorial: number = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    document.getElementById('resultado').innerHTML = `El factorial de ${numero} es: ${factorial}`;
  }
  