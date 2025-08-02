/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Loops o bucles

// for (por) evalua una variable creada para una condicion 

// por la variable i que es =  0 ; i menor que 5 ; i incrementa en uno a cada vuelta mientras sea menor que 5 imprime hola i su valor 
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// por la variable i que es =  0 ; i menor que la constante numbers por su longitud a cada vuelta suma uno i imprime el resultado 
for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while (mientras) evalua una variable externa

let i = 0
while (i < 5) {
    console.log(`Hello ${i}`)
    i++
}

// Bucle infinito
// while(true) {
// }

// do while (hacer mientras) evalua una variable externa pero la primera vez siempre se cunple no empieza a avaluar hasta la segunda vuelta

i = 6
do {
    console.log(`Holii ${i}`)
    i++
} while (i < 5)

// for of (para de ) 

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

// break y continue


// continue hace que se salte este valor y pase al siguiente  mientras que break hace que finalice el bucle
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}