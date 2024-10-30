function calcularAreaPerimetro(figura, dimensiones) {
    if (figura === "Triangulo") {
        let a = dimensiones[0];
        let b = dimensiones[1];
        let c = dimensiones[2];
        return {
            perimetro: a + b + c,
            area: (b * Math.sqrt((c - a) * (c - b) + (a - b) * (a - c))) / 2
        };
    } else if (figura === "Rectangulo") {
        let x = dimensiones[0];
        let b = dimensiones[1];
        let a = dimensiones[2];
        return {
            perimetro: 2 * x * (b + a),
            area: b * x
        };
    } else if (figura === "Cuadrado") {
        let a = dimensiones[0];
        return {
            perimetro: 4 * a,
            area: a * a
        };
    } else if (figura === "Circulo") {
        let r = dimensiones[0];
        return {
            perimetro: 2 * Math.PI * r,
            area: Math.PI * r * r
        };
    } else {
        throw new Error(`figura invalida: ${figura}`);
    }
}

let figuras = [
    { figura: "Triangulo", dimensiones: [5, 6, 7] },
    { figura: "Rectangulo", dimensiones: [3, 4, 5] },
    { figura: "Cuadrado", dimensiones: [8] },
    { figura: "Circulo", dimensiones: [10] }
];

for (let figura of figuras) {
    let result = calcularAreaPerimetro(figura.figura, figura.dimensiones);
    console.log(`Figura: ${figura.figura}`);
    console.log(`Perimetro: ${result.perimetro}`);
    console.log(`Area: ${result.area}`);
    console.log("----------------------");
}