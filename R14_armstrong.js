/*

Reto #14: ¿ES UN NÚMERO DE ARMSTRONG?
Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).
Si no conoces qué es un número de Armstrong, debes buscar información al respecto.

 */

function esArmstrong(number){
    let numberString = number.toString()
    let numberArray = numberString.split("")
    let sum = 0
    let long = numberArray.length
    for(let i = 0; i < long; i++){
        sum += Math.pow(numberArray[i], long)
    }
    if(sum == number){
        return true
    } else {
        return false
    }
}

//solucion con ciclo diferente y sin usar el objeto Math

const result = testNumber => {
    let manageNumber = testNumber.toString().split("")
    let total = 0
    let digits = manageNumber.length
    manageNumber.forEach( elem =>{
        total += elem ** digits
    }) 
    if (total == testNumber) return true
    else return false
    } 


console.log(result(555))
console.log(result(153))
