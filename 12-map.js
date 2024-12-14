// Map  consta de una clave (key) y un valor (value)

// Declaracion

let myMap = new Map()
console.log(myMap)


// Inicializacion

myMap = new Map([ 
    ["nombre", "Paco"],
    ["edad", 51],
    ["reside", "valencia"]

])

console.log(myMap)

// Metodos y propiedades

//set  si la clave non existe añade un nuevo valor si ya existe lo actualiza 

myMap.set("email", "franjosemero@gamil.com")
myMap.set("nombre", "Francisco")


console.log(myMap)

// get recuperar el valor  

console.log(myMap.get("nombre"))

// has comprobar si una clase existe o no 

console.log(myMap.has("nombre"))
console.log(myMap.has("apellido"))

// delete  elimina un elemento
myMap.delete("edad")

console.log(myMap)

// clear elimina todo el mapa

myMap.clear()

console.log(myMap)

// Keys un listado con las claves ---values unlistado con los valores  ----size  dice el tamaño de un map ---enteries listado de claves y valores  



myMap = new Map([ 
    ["nombre", "Paco"],
    ["edad", 51],
    ["reside", "valencia"],
    ["sexo", "hombre"]

])
console.log(myMap)
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())
console.log(myMap.size)

