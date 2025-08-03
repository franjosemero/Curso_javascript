// array 

// Declaracion

let myArray = []
let myArray2 = new Array ()

console.log (myArray)
console.log (myArray2)

// Inicializacion

myArray = [3]
myArray2 = new Array (3)

console.log (myArray)
console.log (myArray2)

myArray = [1,2,3,4]
myArray2 = new Array (1,2,3,4)

console.log (myArray)
console.log (myArray2)

myArray = ["francisco","jose","meroño",51 ]
myArray2 = new Array ("francisco","jose","meroño",51 )

console.log (myArray)
console.log (myArray2)


myArray2 = new Array (3)
myArray2[0]= "francisco"
// myArray2[1]= "jose"
myArray2[2]= "meroño"

console.log (myArray2)

myArray = []
myArray[0]= "paco"
myArray[1]= "pepe"
myArray[2]= "mero"

console.log (myArray)

// metodos comunes 

myArray = []

// push y pop 
// push añade uno o mas elementos al final de el array y devuelve la nueva longitud del array
// pop elimina el ultimo elemento de el array y lo devuelve

myArray.push("francisco")
myArray.push("jose")
myArray.push("meroño")
myArray.push(51)


// push añade arrays en orden de entrada


myArray.push("FRANCISCO")
myArray.push("JOSE")
myArray.push("MEROÑO")
myArray.push(51)

console.log (myArray)
console.log(myArray.pop()) //elimina el ultimo y lo devuelve

// pop elimina el ultimo array
myArray.pop()

console.log (myArray)

// shift y unshift
// shift elimina el primer elemento de la array 
// y devuelve el elemento eliminado

myArray = ["francisco","jose","meroño",51,true]
console.log(myArray.shift())
console.log(myArray)

//unshift agrega uno o mas elementos al principio de el array 
// y devuelve la nueva longitud de el array

myArray = ["francisco","jose","meroño",51,true]
console.log(myArray)

myArray.unshift("FRANCISCO","MEROÑO")
console.log(myArray)
myArray.push(51)
console.log(myArray)

// length nos da la medida que tiene el Array
// si le añadimos un numero al final del array lo añade a la longitud
// si le quitamos un elemento al final del array lo resta de la longitud

console.log( myArray.length)

// clear para vaciar un Array lo inicializamos a vacio o como alternativa le decimos( myarray.legth = 0 ) no aconsejable 

myArray= []
console.log (myArray)

// slice  corta el Array y te devuelve el trozo del indice al otro sin contar el ultimo

myArray = ["francisco","jose","meroño",51,true]

let myArray3 = myArray.slice(0, 3)


console.log (myArray3)

// splice  sirve para eliminar y añadir al mismo tiempo primer numero desde donde quieres eliminar , segundo numnero cuantos quieres eliminar y por ultimo añade 

myArray.splice (1,3)
console.log(myArray)

myArray = ["francisco","jose","meroño",51,true]

myArray.splice(1, 2, "nueva entrada" , 25)
console.log(myArray)
