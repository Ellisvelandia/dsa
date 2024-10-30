// Estructura de datos para almacenar información de personas
const personas = [];

// Estructura para almacenar datos de una persona
const persona = {
    nombre: "",
    cedula: "",
    fechaNacimiento: "",
    correoElectronico: "",
    ciudadResidencia: "",
    ciudadOrigen: "",
    cancionesFavoritas: [] // Almacena canciones (artista y título)
};

// Función para agregar una persona
function agregarPersona() {
    const nuevaPersona = { ...persona }; // Crear una copia de la estructura persona vacía

    // Solicitar y almacenar datos de la persona
    nuevaPersona.nombre = prompt("Ingrese el nombre: ");
    nuevaPersona.cedula = prompt("Ingrese la cédula: ");
    nuevaPersona.fechaNacimiento = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD): ");
    nuevaPersona.correoElectronico = prompt("Ingrese el correo electrónico: ");
    nuevaPersona.ciudadResidencia = prompt("Ingrese la ciudad de residencia: ");
    nuevaPersona.ciudadOrigen = prompt("Ingrese la ciudad de origen: ");

    // Para las canciones favoritas (se pueden agregar más si se desea)
    for (let i = 1; i <= 3; i++) {
        nuevaPersona.cancionesFavoritas.push({
            artista: prompt(`Ingrese el artista de la canción ${i}: `),
            titulo: prompt(`Ingrese el título de la canción ${i}: `)
        });
    }

    // Agregar la nueva persona al array de personas
    personas.push(nuevaPersona);

    console.log("Persona agregada exitosamente.");
}

// Función para mostrar información de una persona
function mostrarInformacionPersona(posicion) {
    if (posicion >= 0 && posicion < personas.length) {
        const personaSeleccionada = personas[posicion];

        console.log("Información de la persona:");
        console.log(`Nombre: ${personaSeleccionada.nombre}`);
        console.log(`Cédula: ${personaSeleccionada.cedula}`);
        console.log(`Fecha de nacimiento: ${personaSeleccionada.fechaNacimiento}`);
        console.log(`Correo electrónico: ${personaSeleccionada.correoElectronico}`);
        console.log(`Ciudad de residencia: ${personaSeleccionada.ciudadResidencia}`);
        console.log(`Ciudad de origen: ${personaSeleccionada.ciudadOrigen}`);
        console.log("Canciones favoritas:");
        for (let i = 0; i < personaSeleccionada.cancionesFavoritas.length; i++) {
            const cancion = personaSeleccionada.cancionesFavoritas[i];
            console.log(`  ${i + 1}. ${cancion.artista} - ${cancion.titulo}`);
        }
    } else {
        console.error("Posición inválida.");
    }
}

// Menú principal
while (true) {
    const opcion = parseInt(prompt(`\nMenú principal:
    1. Agregar persona
    2. Mostrar información de una persona
    3. Salir

    Ingrese la opción: `));

    switch (opcion) {
        case 1:
            agregarPersona();
            break;
        case 2:
            const posicionPersona = parseInt(prompt("Ingrese la posición de la persona: "));
            mostrarInformacionPersona(posicionPersona);
            break;
        case 3:
            console.log("¡Gracias por usar la encuesta!");
            break;
        default:
            console.error("Opción inválida.");
    }
}
