/*
Reto #4: ÁREA DE UN POLÍGONO

Crea una única función (importante que sólo sea una) que sea capaz
de calcular y retornar el área de un polígono.
- La función recibirá por parámetro sólo UN polígono a la vez.
- Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
- Imprime el cálculo del área de un polígono de cada tipo.

*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function poligonArea() {
  rl.question('Ingresa el nombre del polígono que quieres calcular: rectangle, triangle o circle: ', (poligon) => {
    if (poligon === "rectangle") {
      rl.question('Ingresa el alto y ancho (separados por un espacio): ', (input) => {
        // rescatamos los valores desestructurando input y los pasamos a numero 
        const [height, width] = input.split(' ').map(parseFloat);

        if (!isNaN(height) && !isNaN(width)) {
          let areaRectangle = height * width;
          console.log(`El área de ${poligon} es ${areaRectangle}`);
        } else {
          console.log('Entrada no válida. Solo es v´álido ingresar números.');
        }
        rl.close();
      });
    } else if (poligon === "triangle") {
      rl.question('Ingresa el alto y ancho (separados por un espacio): ', (input) => {
        const [height, width] = input.split(' ').map(parseFloat);

        if (!isNaN(height) && !isNaN(width)) {
          let areaTriangle = (height * width) / 2;
          console.log(`El área de ${poligon} es ${areaTriangle}`);
        } else {
          console.log('Entrada no válida. Solo es válido ingresar números.');
        }
        rl.close();
      });
    } else if (poligon === "circle") {
      rl.question('¿Ingresa el radio? ', (radius) => {
        const ratioc = parseFloat(radius);
        if (!isNaN(ratioc)) {
          let areaCircle = Math.PI * ratioc * ratioc;
          console.log(`El área de ${poligon} es ${areaCircle}`);
        } else {
          console.log('Entrada no válida. Solo es válido ingresar números.');
        }
        rl.close();
      });
    } else {
      console.log('Polígono no reconocido. Ingresa "rectangle", "triangle" o "circle"');
      rl.close();
    }
  });
}

poligonArea();