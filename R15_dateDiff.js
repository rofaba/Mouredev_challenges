
/*

Reto #15: ¿CUÁNTOS DÍAS?

Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
- Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
- La función recibirá dos String y retornará un Int.
- La diferencia en días será absoluta (no importa el orden de las fechas).
- Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.

*/

function dateDiff(str1, str2){ 
    
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/
    
if(dateRegex.test(str1) && dateRegex.test(str2)){
    let firstdate = str1.split("/")
    let seconddate = str2.split("/")
    const requirement = (
        (firstdate[0] > 0 && firstdate[0] < 31) &&  
        (seconddate[1] > 0 && seconddate[1] < 12)
        )
        if (requirement){ 
            let date1 = new Date(firstdate[2], firstdate[1], firstdate[0])
            let date2 = new Date(seconddate[2], seconddate[1], seconddate[0])
 
            let diffabs = Math.abs(date1 - date2)
            let days = diffabs/(1000*60*60*24)
            console.log(days)
        } else console.log("Fecha no válida")

} else throw "Formato de fecha erroneo, use dd/mm/yyyy"    
}

dateDiff("27/07/1975", "30/08/2013")

//dateDiff("08/03/1975", "17/01/2012")
