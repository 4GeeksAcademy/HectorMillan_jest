// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToEuro = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar * 0.935;
    // Retornamos el valor en dólares
    return valueInEuro;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 0.00684;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.0055;
    // Retornamos el valor en dólares
    return valueInPound;
}




// Esporta la funcion para usarla en otros archivos
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromEuroToDollar, fromDollarToEuro,fromDollarToYen,fromYenToPound};


