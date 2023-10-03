/* 
Reto #8: DECIMAL A BINARIO
Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.

 */
function decimalToBinary(decimal) {
  if (decimal === 0) {
    return '0'; 
  }
  let binary = '';
  while (decimal > 0) {
    let remainder = decimal % 2; //obtenemos el resto
    binary = remainder + binary; //agregamos al numero en representacion binaria AL REVES
    decimal = Math.floor(decimal / 2); // obtenermos el nuevo "decimal" a iterar
  }

  return binary;
}

console.log(decimalToBinary(0));
console.log(decimalToBinary(1));
console.log(decimalToBinary(2));
console.log(decimalToBinary(10));