// tipos de datos primitivos
// cadena de texto (string) siempre entre "" o '' o `` o ´´
let nombre= "francisco"
let apellido= 'meroño'
let segundoApellido= `muñoz`
console.log(nombre,apellido,segundoApellido)

// numeros (number) 
let age= 51 //enter 
let height = 1.71 //decimales

// booleanos (boolean)

let isStudent= true //verdadero
let isTeacher= false // falso

// (undefined)  es una variable sin un valor todavia definido 
let undefinedValue
console.log(undefinedValue)

// (null) una variable con una ausencia de valor o nula
let nullValue = null

// (Symbol) 

let mySimbol = Symbol("mysymbol")

// (BigInt ) un numero entero muy grande
// se puede representar de estas dos formas

let myBigInt = BigInt(215466135475314643513156461635465434)
let myBigInt2 = 215466135475314643513156461635465434n

// mostramos los tipos de datos 

console.log(typeof age)
console.log(typeof nombre)
console.log(typeof height)
console.log(typeof isStudent)
console.log(typeof nullValue)
console.log(typeof undefinedValue)
console.log(typeof myBigInt)
