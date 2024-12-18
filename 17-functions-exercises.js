/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a=0, b=0){
    console.log(a+b)
}
suma(5,9)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

myArray = [105,20,35,46,98,1,125,]
function mayor(myArray){
    if (myArray.length === 0){
        return null // en caso de este vacio devuelve nulo
    }
    let numeroMaximo = myArray[0] // emopezamos a revisar numeros
    for(let i= 1; i< myArray.length; i++){
        if(myArray[i]>numeroMaximo){
            numeroMaximo=myArray[i]
        }
    }
    return numeroMaximo
}

console.log(mayor(myArray))
//También puedes resolverlo de forma más concisa usando el método Math.max() de JavaScript con el operador spread:
function mayor(myArray) {
    return myArray.length ? Math.max(...myArray) : null;
}
console.log(mayor(myArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
//contador de la longitud del texto 
function texto(frase){
    return(frase.length)
}
console.log(texto("hay un monton de palabras"))
// sin espacios 
function contarLetras(frase) {
    return frase.replace(/\s/g, '').length;  // Elimina espacios y cuenta caracteres
}
console.log(contarLetras("hay un monton de palabras"))

function contarVocales(texto){

}


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function mayúsculas(texto){
    return texto.toUpperCase()
}
let frase = "hola este es el texto a convertir en mayusculas"
console.log(mayúsculas(frase))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }
    
    // El 2 es el único número primo par
    if (numero === 2) {
        return true;
    }
    
    // Si es par y no es 2, no es primo
    if (numero % 2 === 0) {
        return false;
    }
    
    // Verificamos divisibilidad solo hasta la raíz cuadrada del número
    // Y solo con números impares para optimizar
    for (let i = 3; i < numero; i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}

// Ejemplos de uso:
console.log(esPrimo(7));    // true
console.log(esPrimo(10));   // false
console.log(esPrimo(13));   // true
console.log(esPrimo(18));    // false

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(array1, array2){
    let comunes= []
    for (let i=0; i< array1.length; i++)
        for (let j =0; j< array2.length; j++){
            if (array1[i] === array2[j]){
                comunes.push(array1[i])
                break // Si ya encontramos coincidencia, no necesitamos seguir buscando

            }
        }
        return comunes


}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(elementosComunes(array1, array2))



//otra forma

function elementosComunes2(array3, array4) {
    return array3.filter(elemento => array4.includes(elemento));
}

// Ejemplos de uso:
const array3 = [1, 7, 3, 4, 5, 10];
const array4 = [3, 4, 5, 6, 7, 10];
console.log(elementosComunes2(array3, array4)); // [3, 4, 5,10]

// Otro ejemplo con strings
const frutas1 = ["manzana", "pera", "naranja"];
const frutas2 = ["pera", "plátano", "naranja"];
console.log(elementosComunes(frutas1, frutas2)); // ["pera", "naranja"]



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumaPares(array){
    let suma = 0  // Inicializamos la suma en 0

    for( let i=0; i< array.length; i++){
        if (array[i] % 2 == 0) // Verificamos si el número es par
            suma += array[i] // Sumamos el número par
    }
    return suma
}

const array5 = [1, 7, 3, 4, 16, 10];
const array6 = [3, 15, 5, 6, 7, 10];

console.log(sumaPares(array5));  // 30 (4 + 16 + 10)
console.log(sumaPares(array6));  // 16 (6 + 10)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevaNumero(array){
    let numeroAlCuadrado = []

    for (let i=0; i< array.length; i++){
        numeroAlCuadrado.push(array[i]*array[i])

    }
    return numeroAlCuadrado
}


const array7 = [1, 7, 3, 4, 16, 10];
const array8 = [3, 15, 5, 6, 7, 10];

console.log(elevaNumero(array7));  // [1, 49, 9, 16, 256, 100]
console.log(elevaNumero(array8));  // [9, 225, 25, 36, 49, 100]


// metodo map 
function elevaNumero(array) {
    return array.map(numero => numero * numero);
}

const array9 = [1, 7, 3, 4, 16, 10];
console.log(elevaNumero(array9));  // [1, 49, 9, 16, 256, 100]

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function cambiaOrden(texto){
    return texto.split(' ').reverse().join(' ') 
}
//split(' ') - Divide la cadena en un array de palabras usando el espacio como separador
//reverse() - Invierte el orden de los elementos del array
//join(' ') - Une las palabras nuevamente en una cadena usando espacios entre ellas

console.log(cambiaOrden("Hola mundo")); // "mundo Hola"
console.log(cambiaOrden("El perro corre rápido")); // "rápido corre perro El"
console.log(cambiaOrden("JavaScript es genial")); // "genial es JavaScript"

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
    if (n < 0) return undefined; // Para números negativos
    if (n === 0 || n === 1) return 1;
    
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1