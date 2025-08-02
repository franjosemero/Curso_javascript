// Operadores
let a=6
let b=14

console.log(a + b)// suma
console.log(a - b)// resta
console.log(a * b)// multiplicacion
console.log(a / b)// division
console.log(a % b)// resto de la division o modulo
console.log(a ** b)// suma exponente
a ++
console.log(a)// incremento
b --
console.log(b)// decremento


// Operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 3
console.log(myVariable)
myVariable *= 3
console.log(myVariable)
myVariable /= 3
console.log(myVariable)
myVariable -= 3
console.log(myVariable)


// operadores de comparacion 
console.log(a)
console.log(a < b)
console.log(a > b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a == b)
console.log(a == 7) // igual por valor
console.log(a == "7")
console.log(a === 7) // igual por valor y tipo  
console.log(a === "7") // igual por valor y tipo
console.log(a != 7) // a es distinto de 7 
console.log(a !== "7") // en realidad se optine el resultado contrario es una negacion

// truthy value (valores verdaderos)
// todos los numeros positivos y negativos menos el cero
// todas las cadenas de texto menos las vacias
// boolean true

// falsy values ( valores falsos)

// 0
// 0n
// null
// underfined
// NaN
// el boolena false
// cadenas de texto vacias

// Operadores logicos

//and (&&) se tieneen que cumplir las dos condiciones
console.log(5 > 10 && 15 > 20) //false
console.log(5 < 10 && 15 < 20) //true
console.log(5 < 10 && 15 > 20) //false

// or (||) solo se tiene que cumplir una de las dos condiciones
console.log(5 > 10 || 15 > 20) //false
console.log(5 < 10 || 15 < 20) //true
console.log(5 < 10 || 15 > 20) //true

//not (!) niega el valor por lo cual lo invierte 
console.log(!(5 > 10 && 15 > 20)) //false-true
console.log(!(5 < 10 && 15 < 20)) //true-fales
console.log(!(5 < 10 && 15 > 20)) //false-true
console.log(!(5 > 10 || 15 > 20)) //false-fales
console.log(!(5 < 10 || 15 < 20)) //true-true
console.log(!(5 < 10 || 15 > 20)) //true-false

//Operadores tenarios ( ? ) si es true imprime la primera si es false la segunda 

const isRaining = false

isRaining ? console.log("esta llovientdo") : console.log("no esta lloviendo")
