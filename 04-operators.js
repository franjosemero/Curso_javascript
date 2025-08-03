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

let myVariable = 2 // asignacion
console.log(myVariable)
myVariable += 2 // suma y asignacion  // se le suma 2 a la variable // se puede usar -=, *=, /=, %=, **= para otros operadores      
console.log(myVariable)
myVariable += 3 // suma y asignacion // se le suma 3 a la variable // se puede usar -=, *=, /=, %=, **= para otros operadores
console.log(myVariable)
myVariable -= 2 // resta y asignacion   // se le resta 2 a la variable // se puede usar +=, *=, /=, %=, **= para otros operadores
console.log(myVariable)
myVariable *= 3 // multiplicacion y asignacion // se le multiplica 3 a la variable // se puede usar +=, -=, /=, %=, **= para otros operadores
console.log(myVariable)
myVariable %= 3 // modulo y asignacion // se le asigna el resto de la division entre 3 a la variable // se puede usar +=, -=, *=, /=, **= para otros operadores
console.log(myVariable)
myVariable /= 3 // division y asignacion // se le asigna el resultado de la division entre 3 a la variable // se puede usar +=, -=, *=, %=, **= para otros operadores
console.log(myVariable)
myVariable **= 3 // exponente y asignacion // se le asigna el resultado de elevar la variable a la potencia de 3 // se puede usar +=, -=, *=, /=, %= para otros operadores
console.log(myVariable)
myVariable -= 3 // resta y asignacion // se le resta 3 a la variable // se puede usar +=, -=, *=, /=, %=, **= para otros operadores
console.log(myVariable)



// operadores de comparacion 
console.log(a) // imprime el valor de a
console.log(a < b) // menor que
console.log(a > b) // mayor que 
console.log(a >= b) // mayor o igual que
console.log(a <= b) // menor o igual que
console.log(a == b) // igual que
console.log(a == b) // igual por valor
console.log(a == 7) // igual por valor
console.log(a == "7") // igual por valor
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
