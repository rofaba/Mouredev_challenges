/*
Reto #10: EXPRESIONES EQUILIBRADAS

Crea un programa que comprueba si los paréntesis, llaves y corchetes
de una expresión están equilibrados.
- Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
- Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
- Expresión balanceada: { [ a * ( c + d ) ] - 5 }
- Expresión no balanceada: { a * ( c + d ) ] - 5 }

*/

function equilibrada(s){

    let removed = s
    .replace(/[a-zA-Z0-9.,\/#!$%\^&\*;:=\-_`~]/g, "")
    .replace(/\s+/g, "")
    .trim()

    let long = removed.length
    
    if(long === 0 || long % 2 !== 0) return false

    let pila = []
    
        for (let i = 0; i < long / 2; i++){
        if(removed[i] === "{" || removed[i] === "[" || removed[i] === "("){
            pila.push(removed[i])
        }
        }

        for (let j= long / 2; j < long; j++){
        if(removed[j] === "}" || removed[j] === "]" || removed[j] === ")"){
            let last = pila.pop()
            if  (last === "{" && removed[j] !== "}" ||
                 last === "[" && removed[j] !== "]" ||
                 last === "(" && removed[j] !== ")"){
                return false
            }
        } 
        } 
    return true
}

console.log(equilibrada("{  por ejemplo, 5675 elimine &%# [( dfgrgar )!!! ]}     "))

console.log(equilibrada(" ()[]{}"))

console.log(equilibrada(" ([{}]) "))

