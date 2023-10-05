/*
Reto #13: FACTORIAL RECURSIVO

Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.

*/

function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
console.time(factorial)  
console.log(factorial(100));
console.timeEnd(factorial)

  //no recursivo (iterativo)

  let factorialLargo = number =>{
        if(number === 0) return 1;

        let result = 1
        for(let i = 1; i <= number ; i++){
            result = result * i
        }
        return result
  }
    
  console.time(factorialLargo)  
  console.log(factorialLargo(100));
  console.timeEnd(factorialLargo)