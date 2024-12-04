/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria


// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "francisco"
// !== "" significa que si es diferente a vacio imprima el nombre 
if (nombre !== "") {
    console.log(`Su nombre es ${nombre}.`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "paco"
let contraseña = 2024
if (usuario==="paco" & contraseña===2024) {
    console.log("usuario y contraseña correctos")
}
else {
    console.log("usuario y contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero= 0
if (numero % 2 === 0 && numero !==0){
    console.log(`El numero ${numero} es par`)
}
// otra opcion es comprobar primero el 0 para evitar pone el !== 0
else if (numero===0){
    console.log("El numero es 0 pon otro numero ")
}
else {
    console.log(`El numero ${numero} es impar`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad= 16
if (edad >=18 ){
    console.log  ("Es mayor de edad ya puede botar")
}else  {
    console.log ("Es menor de edad no puede votar",`Te faltan ${18-edad} años` )
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const años =edad >=18 ? console.log("Eres mayor de edad") : console.log ("Eres menor de edad")



// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes=2
let nombreMes
let diasMes

switch (mes) {
    
    case 1:
        nombreMes = "Enero"
        diasMes = 31
        break
    case 2:
        nombreMes = "Febrero"
        diasMes = 28
        break
    case 3:
        nombreMes = "Marzo"
        diasMes = 31
        break
    case 4:
        nombreMes = "Abril"
        diasMes = 30
        break
    case 5:
        nombreMes = "Mayo"
        diasMes = 31
        break
    case 6:
        nombreMes = "Junio"
        diasMes = 30
        break
    case 7:
        nombreMes = "Julio"
        diasMes = 31
        break
    case 8:
        nombreMes = "Agosto"
        diasMes = 31
        break
    case 9:
        nombreMes = "Septiembre"
        diasMes = 30
        break
    case 10:
        nombreMes = "Octubre"
        diasMes = 31
        break
    case 11:
        nombreMes = "Noviembre"
        diasMes = 30
        break
    case 12:
        nombreMes = "Diciembre"
        diasMes = 31
        break
    default:
        nombreMes = "Número es incorecto"
}
console.log(nombreMes)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log(diasMes)
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7