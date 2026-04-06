function ejercicio1(){
    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    console.log(meses);
}
    function ejercicio2(){
        var valores = [true, 5, false, "hola", "adios", 2];
        if (valores[3].length > valores[4].length) {
            console.log(valores[0]);
        } else {
            console.log(valores[2]);
        }
        var suma = valores[1] + valores[5];
        var resta = valores[1] - valores[5];
        var multiplicacion = valores[1] * valores[5];
        var division = valores[1] / valores[5];
        var modulo = valores [1] % valores[5];
        console.log("suma: " + suma);
        console.log("resta: " + resta);
        console.log("multiplicacion: " + multiplicacion);
        console.log("division: " + division);
        console.log("modulo: " + modulo);
    }
    function ejercicio3(){
        var numero1 = 5;
        var numero2 = 8;
if(numero1 < numero2) {
console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 !== 0) {
console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
    }