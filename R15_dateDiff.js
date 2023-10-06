
/*

Reto #15: ¿CUÁNTOS DÍAS?

Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
- Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
- La función recibirá dos String y retornará un Int.
- La diferencia en días será absoluta (no importa el orden de las fechas).
- Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.

*/

function dateDiff(str1, str2){
    let firstdate = str1.split("/")
    let seconddate = str2.split("/")
 
    let date1 = new Date(firstdate[2], firstdate[1], firstdate[0])
    let date2 = new Date(seconddate[2], seconddate[1], seconddate[0])
 
    let diffabs = Math.abs(date1 - date2)
    let days = diffabs/(1000*60*60*24)
    console.log(days)
}

dateDiff("27/07/1975", "08/03/1979")

dateDiff("27/07/1975", "20/07/1975")