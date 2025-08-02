//set 

// Declaracion

let mySet = new Set()

console.log(mySet)

// Inicializacion  los datos van entre ([])

mySet= new Set(["francisco", "jose", "meroño", 51, true, "franjosemero@gmail.com"])

console.log(mySet)

// Metodos Comunes 

// add y delete (añadir, eliminar)

mySet.add("valencia")
console.log(mySet)
// elimina un elemento por su nombre no por posicion
mySet.delete(true)
console.log(mySet)

//elimana un elemento y te retorna un true o false qyue puede ser utilizado en un if o similares ( if (myset.delete("jose")){   }    )

console.log(mySet.delete("meroño"))
console.log(mySet)

// has  comprobar si existe un elemento  

console.log(mySet.has(true)) 
console.log(mySet.has("francisco"))

// size mide la longitud

console.log(mySet.size)

// convertir un set a array 

let myArray = Array.from(mySet)
console.log(myArray)

// convertir un  array  a set

mySet = new Set (myArray)
console.log(mySet)

// los set no admite duplicados siempre que sean exactamente iguales

mySet.add("franjosemero@gmail.com")
mySet.add("franjosemero@gmail.com")
mySet.add("Franjosemero@gmail.com")
console.log(mySet)