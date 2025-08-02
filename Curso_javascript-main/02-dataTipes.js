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
// son valores de verdad verdadero o falso
// se usan para condiciones y comparaciones
// true es verdadero y false es falso
// se usan para validar condiciones en el codigo

let isStudent= true //verdadero
let isTeacher= false // falso

// (undefined)  es una variable sin un valor todavia definido 
// se usa cuando una variable no ha sido inicializada
// o no se le ha asignado un valor
// es diferente a null que es una variable con un valor nulo

let undefinedValue
console.log(undefinedValue)

// (null) una variable con una ausencia de valor o nula
// se usa para indicar que una variable no tiene un valor asignado
// es diferente a undefined que es una variable sin un valor todavia definido
let nullValue = null

// (Symbol) 
// es un tipo de dato que se usa para crear identificadores únicos
// se usa para evitar colisiones de nombres en objetos y propiedades
// se puede crear un simbolo con la funcion Symbol()

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
