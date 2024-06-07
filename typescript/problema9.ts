function determinarPrimo(): void {
    const numero: number = parseInt(document.getElementById('numero').value);
  
    if (isNaN(numero) || numero <= 0) {
      alert('Ingrese un número entero positivo válido.');
      return;
    }
  
    if (numero === 1) {
      document.getElementById('resultado').innerHTML = `${numero} no es un número primo ni compuesto`;
      return;
    }
  
    let esPrimo: boolean = true;
  
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        esPrimo = false;
        break;
      }
    }
  
    const resultado: string = esPrimo ? `${numero} es un número primo` : `${numero} no es un número primo`;
    document.getElementById('resultado').innerHTML = resultado;
  }
  