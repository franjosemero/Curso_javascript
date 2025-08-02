/*
Clase 23 - Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=7277
*/

// if, else if, else

// if (si)

let age = 37

if (age == 37) {
    console.log("La edad es 37")
}

// else (si no)
let age2 = 30
if (age2 == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si) 
let age3 = 20
if (age3 == 37) {
    console.log("La edad es 37")
} else if (age3 < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37 ni es menor de edad")
}

// Operador ternario forma corta de un if-else
// Sintaxis: condición ? valorSiVerdadero : valorSiFalso
// Ejemplo: si la edad es 37, imprime "La edad es 37", si no, imprime "La edad no es 37"
// Esto es útil para asignar valores a variables de forma concisa
// Se puede usar para asignar valores a variables o para imprimir directamente

const message = age == 37 ? "La edad es 37" : "La edad no es 37"
console.log(message)

// switch 
// Se usa para evaluar una expresión y ejecutar un bloque de código dependiendo del valor de esa expresión
// Es útil cuando se tienen múltiples condiciones basadas en el mismo valor
// Sintaxis: switch (expresión) { case valor1: bloque1; break; case valor2: bloque2; break; ... default: bloquePorDefecto; }

let fruit = "manzana"

let day = 3
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Número de día incorrecto"
}

console.log(dayName)