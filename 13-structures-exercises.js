/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ["oso", "perro", "gallina", "pez", "pajaro"]
console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("conejo")
animales.push("tortuga")
console.log(animales)

// 3. Elimina el que se encuentra en tercera posición
animales.pop(3) // pez

console.log(animales)

// 4. Crea un set que almacene cinco libros
let libros= new Set(["libro1", "libro2", "libro3","libro4", "libro5"])

console.log(libros)
// 5. Añade dos más. Uno de ellos repetido

libros.add("libro6","libro2")

console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete("libro2")

console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map ([
    [1, "enero" ],
    [2, "febrero" ],
    [3, "marzo" ],
    [4, "abril" ],
    [5, "mayo" ],
    [6, "junio" ],
    [7, "julio" ],
    [8, "agosto" ],
    [9, "septiembre" ],
    [10, "octubre" ],
    [11, "noviembre" ],
    [12, "diciembre" ]
])
console.log(meses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(meses.has(5))


// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["junio", "juluio", "agosto"] )
console.log(meses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let animal = ["oso", "perro", "gallina", "pez", "pajaro"]
console.log(animal)

let setAnimal = new Set(animal)
console.log(setAnimal)

let mapAnimal = new Map([setAnimal])
console.log(mapAnimal)
