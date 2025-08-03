/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// Ejercicio FizzBuzz
// Este ejercicio imprime los números del 1 al 100, pero para los múltiplos de 3 imprime "Fizz", 
// para los múltiplos de 5 imprime "Buzz" y para los múltiplos de ambos imprime "FizzBuzz".
for (let numeros = 1; numeros <= 100; numeros++) {
    if (numeros % 3 === 0 && numeros % 5 === 0) {
        console.log(numeros + " FizzBuzz");
    } else if (numeros % 3 === 0) {
        console.log(numeros + " Fizz");
    } else if (numeros % 5 === 0) {
        console.log(numeros + " Buzz");
    } else {
        console.log(numeros);
    }
}   

// Ejercicio FizzBuzz
// usando una función para encapsular la lógica
// Este ejercicio imprime los números del 1 al 100, pero para los múltiplos de 3 imprime "Fizz", 
// para los múltiplos de 5 imprime "Buzz" y para los múltiplos de ambos imprime "FizzBuzz". 

function main() {
let index
    for (index = 1; index <=100; index++) {
        let divisibleByThree = index % 3 == 0
        let divisibleByFive = index % 5 == 0
        if (divisibleByThree && divisibleByFive) {
            console.log("fizzbuzz " +index)
        } else if (divisibleByThree) {
            console.log("fizz " + index)
        } else if (divisibleByFive) {
            console.log("buzz " + index)
        } else {
            console.log(index)
        }
    }
}
main()
