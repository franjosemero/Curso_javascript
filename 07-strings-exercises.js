/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let nombre = "francisco"
let apellido= " meroño"
console.log(nombre + apellido)

// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)
console.log((nombre + apellido).length)

// 3. Muestra el primer y último carácter de un string
console.log((nombre + apellido)[0])
console.log((nombre + apellido)[15])

// 4. Convierte a mayúsculas y minúsculas un string
console.log((nombre + apellido).toUpperCase())
console.log((nombre + apellido).toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let lineas = `mensaje 
en 
varias 
lineas `
console.log(lineas)

// 6. Interpola el valor de una variable en un string
let email ="franjosemero@gmail.com"
console.log(`hola , ${nombre} Tu email es ${email}.`) 

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log((nombre + apellido).replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log((nombre + apellido).includes("c"))

// 9. Comprueba si dos strings son iguales
console.log(nombre === apellido)


// 10. Comprueba si dos strings tienen la misma longitud
console.log(nombre.length === apellido.length)
console.log(nombre.length === 9)