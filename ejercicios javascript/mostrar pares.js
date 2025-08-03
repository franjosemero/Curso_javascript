//mostra los números pares del 1 al 100
for (let numero =2; numero <= 100; numero+=2) {
    console.log(numero)
}

// otra forma de mostrar los números pares del 1 al 100
for (let numer = 1; numer <= 100; numer++) {
    if (numer % 2 === 0) {
        console.log(numer);
    }
}

// otra forma de mostrar los números pares del 1 al 100
let index = 2;  
while (index <= 100) {
    console.log(index);
    index += 2; // Incrementa de 2 en 2 para obtener solo números pares
}   

// otra forma de mostrar los números pares del 1 al 100 en una sola línea
let pares = [];
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {    
        pares.push(num);
    }
}
console.log(pares.join(", ")); // Muestra los números pares separados por comas

