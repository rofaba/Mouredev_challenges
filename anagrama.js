/*
Reto #1: ¿ES UN ANAGRAMA?

Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool)
según sean o no anagramas. Un Anagrama consiste en formar una palabra reordenando TODAS
las letras de otra palabra inicial.
- NO hace falta comprobar que ambas palabras existan.
- Dos palabras exactamente iguales no son anagrama.

*/

function anagrama(primera, segunda){
    if(primera === segunda || primera.length !== segunda.length) {
        return false
    }
    
    const original = primera.split("")
    const anagrama = segunda.split("")

    for(let i = 0; i < anagrama.length; i++){
        if(!original.includes(anagrama[i])){
            return false
        }
}
    return true
}

console.log(anagrama("palabra", "palabra"))
console.log(anagrama("palabra", "pala"))
console.log(anagrama("persona", "gatitos"))
console.log(anagrama("estadio", "oidatse"))
console.log(anagrama("qwerty", "ertyqw"))