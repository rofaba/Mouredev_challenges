/*

Reto #12: ¿ES UN PALÍNDROMO?

Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda. NO se tienen en cuenta los espacios, signos de puntuación y tildes.
Ejemplo: Ana lleva al oso la avellana.

 */

function palindromo(s){
    let cleanString = s
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, "")
    .trim()
    .toLowerCase();

    cleanString = cleanString.split("")

    let revertString = []
    let long = cleanString.length
    for (let i = long-1; i >= 0; i--){
        revertString.push(cleanString[i])
    } 
        
    if(cleanString.join("") === revertString.join("")) {
        return true
    } else return false
}

console.log(palindromo("Ana lleva al oso la avellana."))
console.log(palindromo("roma ni se conoce sin oro ni se conoce sin amor"))