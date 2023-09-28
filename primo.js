/*
Reto #3: ¿ES UN NÚMERO PRIMO?

Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100.

*/

function esPrimo(n){
    if(n <=1){
        console.log("los números primos son mayores que 1")
        return false
    }
    if (n === 2 || n === 3) 
    return true
    if (n > 3) {
        
        if(n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
            return false
        }
        return true    
    } 
}

console.log(esPrimo(1))
console.log("-------------------")
console.log(esPrimo(2))
console.log(esPrimo(3))
console.log(esPrimo(9))
console.log(esPrimo(11))
console.log(esPrimo(15))
console.log("-------------------")
console.log(esPrimo(19))
console.log(esPrimo(49))
console.log(esPrimo(89))