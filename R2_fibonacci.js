/* 
Reto #2: LA SUCESIÓN DE FIBONACCI

Escribe un programa que imprima los 50 primeros números de la sucesión
de Fibonacci empezando en 0. La serie Fibonacci se compone por una sucesión de números en
la que el siguiente siempre es la suma de los dos anteriores.
0, 1, 1, 2, 3, 5, 8, 13...

*/

function fibonacci(n) {
    const secuencia = [0, 1];
    if (n <= 2) {
      return secuencia.slice(0, n);
    }
  
    for (let i = 2; i < n; i++) {
      const siguiente = secuencia[i - 1] + secuencia[i - 2];
      secuencia.push(siguiente);
    }
  
    return secuencia;
  }
  
console.log(fibonacci(0))  
console.log(fibonacci(1))
console.log(fibonacci(5))
console.log(fibonacci(10))