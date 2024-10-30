const edades = [25, 37, 12, 58, 74, 18, 62, 45, 16, 23];

function calcularEstadisticas() {
    let cantidadMenores = 0;
    let cantidadMayores = 0;
    let cantidadAdultosMayores = 0;
    let edadMenor = Infinity;
    let edadMayor = -Infinity;
    let sumaEdades = 0;

    for (let edad of edades) {
        if (edad < 18) {
            cantidadMenores++;
        } else if (edad >= 18 && edad < 60) {
            cantidadMayores++;
        } else {
            cantidadAdultosMayores++;
        }

        sumaEdades += edad;
        edadMenor = Math.min(edadMenor, edad);
        edadMayor = Math.max(edadMayor, edad);
    }

    mostrarResultados(cantidadMenores, cantidadMayores, cantidadAdultosMayores, edadMenor, edadMayor, sumaEdades, edades);
}

function mostrarResultados(cantidadMenores, cantidadMayores, cantidadAdultosMayores, edadMenor, edadMayor, sumaEdades, edades) {
    console.log(`Menores de edad: ${cantidadMenores}`);
    console.log(`Mayores de edad: ${cantidadMayores}`);
    console.log(`Adultos mayores: ${cantidadAdultosMayores}`);
    console.log(`Edad más baja: ${edadMenor} años`);
    console.log(`Edad más alta: ${edadMayor} años`);
    console.log(`Promedio de edades: ${(sumaEdades / edades.length)} años`);
}

calcularEstadisticas();

// $ node storage_ages.js
// Menores de edad: 2
// Mayores de edad: 6
// Adultos mayores: 2
// Edad más baja: 12 años
// Edad más alta: 74 años
// Promedio de edades: 37 años

