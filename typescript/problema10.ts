function contarVocales(): void {
    const texto: string = document.getElementById('texto').value.toLowerCase();
  
    if (texto.trim() === '') {
      alert('Ingrese un texto válido.');
      return;
    }
  
    let contadorVocales: number = 0;
    const vocales: string = 'aeiouáéíóü';
  
    for (let i = 0; i < texto.length; i++) {
      if (vocales.indexOf(texto[i]) !== -1) {
        contadorVocales++;
      }
    }
  
    document.getElementById('resultado').innerHTML = `El texto ingresado contiene ${contadorVocales} vocales.`;
  }
  