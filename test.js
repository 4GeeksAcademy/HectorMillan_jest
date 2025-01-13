// importar la funcion sum del archivo app.js
const {fromEuroToDollar,fromDollarToYen,fromYenToPound, fromDollarToEuro} = require('./app.js');


// Test para revisar la conversión de Euros a Dolares

test("1 Euro son 1.07 Dolares", function() {
       
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07) dolares
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});



// Test para revisar la conversión de Dolares a Euros

test("Un dolar es 0.935e", function(){

    const euro = fromDollarToEuro(6);

     // Si 1 dolar son 0.935 Euros, entonces 6 dolares debe ser (6 * 0.935) Euros
    const expected = 6 * 0.935;

    // Hago mi comparación (la prueba)
    expect(fromDollarToEuro(6)).toBe(5.61);
    
});




// Test para revisar la conversión de Yenes a Libras


test("Un yen son 0.0055 Libras", function(){

    const libra = fromYenToPound(6);

     // Si 1 Yen son 0.0055 Libras, entonces 6 Yenes deben ser (6 * 0.0055) Libras
    const expected = 6 * 0.0055;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(6)).toBe(0.033);
    
});



// Test para revisar la conversión de dolares a yenes

test("Un Dolar es 146.3 Yenes", function(){

    const yen = fromDollarToYen(6);

    // Si 1 dolar es 146.3 Yenes, entonces 6 Dolares deben ser (6 * 146.3) Yenes
    const expected = 6 * 146;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(6)).toBe(876);
    
});
