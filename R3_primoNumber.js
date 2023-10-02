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
    if (n === 2 || n === 3 || n === 5 || n === 7) 
    return true
    if (n > 3 && n !== 7 && n !== 5) {
        
        if(n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
            return false
        }
        return true    
    } 
}

// imprimir los primos entre 1 y 100 

function printPrimes(){
        for(let j = 1; j <= 100; j++){
            if(esPrimo(j)){
                console.log(j)
            }
        } 
}

printPrimes()