/* 
Reto #11: ELIMINANDO CARACTERES

Crea una función que reciba dos cadenas como parámetro (str1, str2)
e imprima otras dos cadenas como salida (out1, out2).
- out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
- out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 
*/

function filter(str1, str2){
    let wordA = str1.split("") 
    let wordB = str2.split("")

    let str1result = []
    let str2result = []

    wordA.forEach(function(letter){
            if(!wordB.includes(letter)){
                str1result.push(letter)
            }})

    wordB.forEach(function(letter){
                if(!wordA.includes(letter)){
                    str2result.push(letter)
                }})  
    let rA = str1result.join("")
    let rB = str2result.join("")

    return [rA, rB]
}


console.log(filter("casamiento", "perro"))
