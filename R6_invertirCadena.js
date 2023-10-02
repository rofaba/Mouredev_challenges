/*
Reto #6: INVIRTIENDO CADENAS

Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
Si le pasamos "Hola mundo" nos retornaría "odnum aloH"

*/

function revertString(s){
    let frase = s.split("")
    let revertfrase = []
    for(let i = frase.length-1; i >= 0; i--){
        revertfrase.push(frase[i])
    }
let result = revertfrase.join("")
console.log(s)
console.log(result) 
}

revertString("hola casa")
revertString("Cadena normal")