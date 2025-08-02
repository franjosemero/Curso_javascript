/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3
let resta = 5 - 3
let multiplica = 5 * 3
let divide = 5 / 3
let resto = 5 % 3
let potencia = 5 ** 3
let x = 5
x++ //incrementa
x-- //decrementa 
console.log(suma, resta, multiplica, divide, resto, potencia, x)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma = 5 + 3
suma +=2
resta = 5 - 3
resta -=5
multiplica = 5 * 3
multiplica *=3
divide = 5 / 3
divide /=2
resto = 5 % 3
resto %= 1
potencia = 5 ** 3
potencia **=4
console.log(suma, resta, multiplica, divide, resto, potencia)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(20 > 10 )
console.log(10 < 20 ) 
console.log(30 == 30)
console.log(15 != 20)
console.log(20 === 20)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(2 > 10 )
console.log(10 < 2 ) 
console.log(30 == 3)
console.log(15 != 15)
console.log(20 === "20")

// 5. Utiliza el operador lógico and
console.log( 20 < 30 && 30 < 40 )

// 6. Utiliza el operador lógico or

console.log( 20 < 30 || 30 < 20 )


// 7. Combina ambos operadores lógicos

console.log( 20 < 30 && 30 > 40 || 30 < 40 )

// 8. Añade alguna negación

console.log(!( 20 < 30 && 30 > 40 || 30 > 40 ))

// 9. Utiliza el operador ternario
//let corriendo=true
let corriendo=false

corriendo ? console.log("estacorriendo mucho"): console.log("se ha parado")


// 10. Combina operadores aritméticos, de comparáción y lógicas

let a = 5
let b = 3

console.log( ( a + b ) < (a * b) && (a - b) > (a / b))