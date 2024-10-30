const combinarYOrdenar = (arreglo1, arreglo2) => {
    const arregloCombinado = [];
    let i = 0;
    let j = 0;


    for (; i < arreglo1.length && j < arreglo2.length;) {
        if (arreglo1[i] <= arreglo2[j]) {
            arregloCombinado.push(arreglo1[i++]);
        } else {
            arregloCombinado.push(arreglo2[j++]);
        }
    }

    arregloCombinado.push(...arreglo1.slice(i));

    arregloCombinado.push(...arreglo2.slice(j));

    return arregloCombinado;
};

const validarOrdenAscendente = (arreglo) => {
    for (let indice = 1; indice < arreglo.length; indice++) {
        if (arreglo[indice] < arreglo[indice - 1]) {
            return false;
        }
    }

    return true;
};

const main = () => {
    const arreglo1 = [1, 3, 6, 9, 17];
    const arreglo2 = [2, 4, 10, 17, 18];

    if (!validarOrdenAscendente(arreglo1) || !validarOrdenAscendente(arreglo2)) {
        console.error('Error: Los arreglos no están ordenados ascendentemente.');
        return;
    }

    const arregloCombinado = combinarYOrdenar(arreglo1, arreglo2);

    console.log('Lista ordenada de la mezcla:', arregloCombinado);
};

main();
