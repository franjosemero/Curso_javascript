/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i=0 ; i <21 ; i++){
    console.log (i)
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma= 0
for (let i=0 ; i <101 ; i++){
    suma +=i}
console.log("la suma de todos los numeros es:", suma)
// while
let sumas = 0
let i = 1
while (i <=100) {
    sumas += i // sumas = sumas + i
    i ++
}
console.log("la suma de todos es:", sumas)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i=0 ; i<51 ; i++){
    if (i % 2=== 0)
    console.log(i)
}


// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres= ["paco","jose","pedro","carlos","luis","eduardo","felipe","juan"]

for (let i =0 ; i < nombres.length; i++) {
    console.log(nombres[i])
}
// usando forEach
nombres.forEach(nombre => {
    console.log(nombre);
});
// while
let nombre= ["PACO","JOSE","PEDRO","CARLOS","LUIS","EDU","FELIPE","JUAN"]
let orden= 0 
while (orden < nombre.length){
    console.log(nombre[orden]);
    orden++;
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let texto= "hola esto es un texto de prueba"
let contador= 0
for (let i=0 ; i <texto.length; i++){
    let letra = texto[i].toLowerCase();
    if( letra=== "a" ||
        letra=== "e" ||
        letra=== "i" ||
        letra=== "o" ||
        letra=== "u" ){
        contador++;
        }
    
}console.log ("numero de voacles", contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let multipli=[5,6,8,12]
let producto=1
for(let i =0 ; i < multipli.length ; i++){
    producto *=multipli[i]
}
console.log("El pruducto final es:", producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

//for
let multiplo = 5
for (let i =0 ; i<11 ; i++){
    console.log(i,"*", multiplo,"=", ( i *  multiplo))
} 
//while
let ini=0
while(ini<11){
    console.log(ini, "*", multiplo, "=", (ini * multiplo))
    ini++
}
// 8. Usa un bucle para invertir una cadena de texto
let cadenaTexto= "reconpensado"
let textoInvertido= ""

for(let i = cadenaTexto.length -1; i >= 0; i--){
    textoInvertido += cadenaTexto[i]
}
console.log(textoInvertido)


let resultado = ""
let indice = cadenaTexto.length - 1
while (indice >= 0) {
    resultado += cadenaTexto[indice]
    indice--
}
console.log(resultado)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// Primera forma - usando for
let fib1 = 0, fib2 = 1;
console.log("Usando for:");
console.log(fib1); // Primer número
console.log(fib2); // Segundo número

for (let i = 2; i < 10; i++) {
    let fibNuevo = fib1 + fib2;
    console.log(fibNuevo);
    fib1 = fib2;
    fib2 = fibNuevo;
}

// Segunda forma - usando while
console.log("\nUsando while:");
let a = 0, b = 1;
let contadores = 0;
console.log(a);
console.log(b);

while (contadores < 8) { // 8 porque ya imprimimos 2 números
    let temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
    contadores++;
}


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
// Creamos un array de ejemplo
let numeros = [5, 12, 8, 15, 3, 20, 7, 10, 18, 1]

// Primera forma - usando for
let mayoresQueDiez = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        mayoresQueDiez.push(numeros[i])
    }
}
console.log("Usando for:", mayoresQueDiez) // [12, 15, 20, 18]

// Segunda forma - usando while
let resultad = []
let indic = 0
while (indice < numeros.length) {
    if (numeros[indic] > 10) {
        resultad.push(numeros[indic])
    }
    indic++
}
console.log("Usando while:", resultad) // [12, 15, 20, 18]

// Bonus: forma moderna usando filter
let filtrados = numeros.filter(numero => numero > 10)
console.log("Usando filter:", filtrados) // [12, 15, 20, 18]

