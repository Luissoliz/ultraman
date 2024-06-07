function invertirTexto(): void {
    const texto: string = document.getElementById('texto').value;
  
    if (texto.trim() === '') {
      alert('Ingrese un texto válido.');
      return;
    }
  
    const textoInvertido: string = texto.split('').reverse().join('');
    document.getElementById('resultado').innerHTML = `El texto invertido es: ${textoInvertido}`;
  }
  