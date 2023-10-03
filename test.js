function decimalToBinary(entero){
    let binario = ""
    let resto 
 if(entero === 0) 
 return 0
 
 while(entero > 0){
    resto = entero % 2 // resto
    binario = resto + binario //concat
    entero = Math.floor(entero /2) //nuevo entero
 }

 return binario
}

console.log(decimalToBinary(0))

console.log(decimalToBinary(1))

console.log(decimalToBinary(2))

console.log(decimalToBinary(10))