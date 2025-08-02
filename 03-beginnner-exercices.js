//1. Escribe un comentario en una linea
// eston es un comentario en una linea 
//2. Escribe un comentrio en varias lineas 
/*esto es un 
comentrio 
en vairas
lineas */
//3. declara variables con valores asociados a tosdos los datos de tipo primitivos 
let texto=("string")
let numero=55
let boleano=true
let nulo= null
let granNumero= BigInt(2222222455468764354664589474667654687)
let granNumero2= 2456387431354764634764564345347n
let undefinedNose
let mySimbol = Symbol("esto $")


//4. imprime por consola el valor de todas las variables 
console.log(texto,numero,boleano,nulo,granNumero,granNumero2,undefinedNose,mySimbol)
//5. imprime por consola el tipo de todas las variables 
console.log(typeof texto,typeof numero,typeof boleano,typeof nulo,typeof granNumero,typeof granNumero2,typeof undefinedNose,typeof mySimbol)

//6. A continuacion, modifica los valores de las variables por otros de el mismo tipo
texto=("string2")
numero=56
console.log(texto,numero)
//7. A continuacion, modifica los valores de las variables por otros de distinto tipo
texto=15634
numero=("numero")
console.log(texto,numero)

//8. Declara constantes con valores asociados a todos los tipos de datos primitivos 
const texto2=("string")
const numero2=55
const boleano2=true
const nulo2= null
const granNume= BigInt(2222222455468764354664589474667654687)
const granNumero22= 2456387431354764634764564345347n
const undefined
const mySimbol2 = Symbol("esto $")

//9. A contiunuacion, modifica los valores de las constantes


//10. comenta las lineas que produzcan algun tipo de error al ejecutarse