function determinarNumeroPerfecto(): void {
    const numero: number = parseInt(document.getElementById('numero').value);
  
    if (isNaN(numero) || numero <= 0) {
      alert('Ingrese un número entero positivo válido.');
      return;
    }
  
    let sumaDivisores: number = 0;
  
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    const esPerfecto: boolean = numero === sumaDivisores;
    const resultado: string = esPerfecto ? `${numero} es un número perfecto` : `${numero} no es un número perfecto`;
    document.getElementById('resultado').innerHTML = resultado;
  }
  