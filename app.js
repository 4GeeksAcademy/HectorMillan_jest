// Declaramos una función para ejecutar la conversión Euro a Dolar
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función para ejecutar la conversión Dolar a Yen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 146;
    // Retornamos el valor en dólares
    return valueInYen;
}


// Declaramos una función para ejecutar la conversión Yen a Libra
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.0055;
    // Retornamos el valor en dólares
    return valueInPound;
}
 
// Declaramos una función para ejecutar la conversión Dolar a Euro
const fromDollarToEuro = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInEuro = valueInDollar * 0.935;
    // Retornamos el valor en dólares
    return valueInEuro;
}




// Esporta la funcion para usarla en otros archivos

module.exports = { fromEuroToDollar, fromDollarToEuro,fromDollarToYen,fromYenToPound};


