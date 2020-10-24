function multiplicarNumeros(num1, num2) {
    document.getElementById('respuesta1').innerHTML = num1 * num2;
}

function compararNumeros(num1, num2) {
    console.log(num1 + ' ' + num2);
    let texto;
    if (num1 > num2) texto = "El primer numero es mayor";
    else if (num1 < num2) texto = "El segundo numero es mayor";
    else texto = "Los numeros son iguales";

    document.getElementById('respuesta2').innerHTML = texto;
}

function concatenarOraciones(oracion1, oracion2) {
    document.getElementById('respuesta3').innerHTML = oracion1 + oracion2;
}

var select4 = document.getElementById('medioDePago');

function calcularMonto(monto, medioDePago) {
    let total;
    if (monto < 200) total = monto;
    else if (monto >= 200 && monto < 400) {
        switch (medioDePago) {
            case 'C':
                total = monto - (monto * 0.10);
                break;
            case 'E':
                total = monto - (monto * 0.30);
                break;
            case 'D':
                total = monto - (monto * 0.20);
                break;
        }
    } else total = monto - (monto * 0.40);

    document.getElementById('respuesta4').innerHTML = total;
}

function dibujarArbol(filas) {
    let arbol = "";
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j <= i; j++) {
            arbol += "*";
        }
        arbol += `<br>`
    }
    document.getElementById('respuesta5').innerHTML = arbol;
}

function mostrarDia(numero) {
    let texto = "";
    numeroDia = Number(numero);
    switch (numeroDia) {
        case 1:
            texto = "Lunes";
            break;
        case 2:
            texto = "Martes";
            break;
        case 3:
            texto = "Miercoles";
            break;
        case 4:
            texto = "Jueves";
            break;
        case 5:
            texto = "Viernes";
            break;
        case 6:
        case 7:
            texto = "Fin de semana :D";
            break;
        default:
            texto = "El numero ingresado no representa un dia de la semana. Intenta con valores entre 1 y 7";
    }
    document.getElementById('respuesta6').innerHTML = texto;
}