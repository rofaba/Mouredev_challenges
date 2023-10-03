/*
Reto #7: CONTANDO PALABRAS

Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
- Los signos de puntuación no forman parte de la palabra.
- Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
- No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.

*/

function cuentaPalabra(s) {
  let cleanString = s
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  let words = cleanString.split(" ");
  let wordCount = {}
     words.forEach(function (element) {
      if (!wordCount.hasOwnProperty(element)) {
        wordCount[element] = 1;
      } else {
        wordCount[element]++;
      }
    });
    return wordCount;
  }

console.table(
  cuentaPalabra(
    "  Esta   $  es UNA   frase   Frase, de ()prueba! una   !!!  "
  )
);
