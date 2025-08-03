// ejercicio de decremento // muestra los números del 100 al 0 de 4 en 4
for (let numero = 100; numero >= 0; numero-=4) {
    console.log(numero)
}

// otra forma de mostrar los números del 100 al 0 de 4 en 4
for (let numer = 100; numer >= 0; numer--) {
    if (numer % 4 === 0) {
        console.log(numer)
    }
}   

// otra forma de mostrar los números del 100 al 0 de 4 en 4
let index = 100;
while (index >= 0) {
    console.log(index)
    index -= 4; // Decrementa de 4 en 4 para obtener solo números que son múltiplos de 4
}
// otra forma de mostrar los números del 100 al 0 de 4 en 4 en una sola línea
let decrementos = []
for (let num = 100; num >= 0; num--) {
    if (num % 4 === 0) {    
        decrementos.push(num)
    }   
}
console.log(decrementos.join(", ")) // Muestra los números separados por comas