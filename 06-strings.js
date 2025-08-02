/*
Clase 21 - Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=6565
*/

// Strings (cadenas de texto)

// Concatenación

let myName = "Francisco"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[14])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Jose"))
console.log(greeting.indexOf("Francisco"))
console.log(greeting.includes("Hola")) // Incluye
console.log(greeting.includes("Jose"))
console.log(greeting.includes("Francisco"))
console.log(greeting.slice(0, 10)) // Sección
console.log(greeting.replace("Francisco", "Jose")) // Reemplazo

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores
let email = "franjosemero@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)