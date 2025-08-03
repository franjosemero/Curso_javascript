
//ejercicio tabla de multiplicar
for (let numero =1; numero <= 10; numero++) 
    for (let multi =1; multi <= 10; multi++) {
    console.log (numero ,"*", multi , "=", numero * multi,)
}

for (let numeros = 1; numeros <= 10; numeros++) {
    let filas = "";
    for (let multip = 1; multip <= 10; multip++) {
        filas += `${numeros}*${multip}=${numeros * multip}\t`
    }
    console.log(filas);
}

for (let numer = 1; numer <= 10; numer++) {
    for (let mult = 1; mult <= 10; mult++) {
        process.stdout.write(`${numer} * ${mult} = ${numer * mult}\t`)
    }
    console.log(); // Salto de línea al final de cada fila
}