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