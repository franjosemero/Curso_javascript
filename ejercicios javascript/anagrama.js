/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
function anagrama(palabra1, palabra2) {
    // Convertimos ambas palabras a minúsculas y las ordenamos alfabéticamente
    let palabra1Ordenada = palabra1.toLowerCase().split('').sort().join('')
    let palabra2Ordenada = palabra2.toLowerCase().split('').sort().join('')        
    // Convertimos ambas palabras a minúsculas y las ordenamos alfabéticamente
    // Retornamos verdadero si son anagramas y no son exactamente iguales
    return palabra1Ordenada === palabra2Ordenada && palabra1.toLowerCase() !== palabra2.toLowerCase()
}
//prueba de la función anagrama
console.log("(roma,", "amor)", anagrama("roma", "amor")); // true
console.log("(roma,", "mora)", anagrama("roma", "mora")); // false
console.log(anagrama("hola", "halo")); // true
console.log(anagrama("perro", "gato")); // false
console.log("(casa,", "saca)", anagrama("casa", "saca")); // true