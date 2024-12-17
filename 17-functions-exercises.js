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
function texto(frase){
    return(frase.length)
}
console.log(texto("hay un monton de palabras"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos


// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


// 10. Crea una función que calcule el factorial de un número dado