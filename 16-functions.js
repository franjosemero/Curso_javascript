/*
Clase 31 - Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=12829
*/

// Funciones

// Simple crear una fucion siple sin parametro

function myFunc() {
    console.log("¡Hola, función!")
}

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Con parámetros cuando se llama a la funcion te va a pedir un parametro 

function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams("Brais")
myFuncWithParams("MoureDev")

// Funciones anónimas. se pueden crear pero necesitan ser vinculadas a una constante o una variable para poder ser invocadas

const myFunc2 = function (name) {
    console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure")

// Arrow functions (funciones flecha) tambien necesitan ir asociadas a un aconstante o una variable

const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}

// Una forma abreviada de llamar una funcion 
const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(5)
sum()

// se le dan valores por defecto para evitar errores en caso de que no pongan los parametros exiguidos 
function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

// Por defecto

defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(b = 5)

// Retorno de valores. retur devuelve los valores para ser utilizados despues bien en una variable o otra parte del codigo 

function mult(a, b) {
    return a * b
}

let result = mult(5, 10)
console.log(result)

// Funciones anidadas. 

function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()// llamar para que se imprima y deje de estar fuera del scope
}

extern()
// intern() Error: fuera del scope

// Funciones de orden superior

function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "función de orden superior")

// forEach.  son como un for pero mejorados 

myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

myArray.forEach(function (value) {
    console.log(value)
})

myArray.forEach((value) => console.log(value))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))