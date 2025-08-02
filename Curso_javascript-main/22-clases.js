
/*
Clase 37 - Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=16864
*/

// Clases

class Person {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

// Sintaxis

let person = new Person("Brais", 37, "MoureDev")
let person2 = new Person("Brais", 37, "MoureDev")

console.log(person)
console.log(person2)

console.log(typeof person)

// Valores por defecto

class DefaultPerson {

    constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }

}

let person3 = new DefaultPerson("Brais", 37)

console.log(person3)

// Acceso a propiedades

console.log(person3.alias)
console.log(person3["alias"])
// añadir o modificar valor
person3.alias = "MoureDev"

console.log(person3.alias)

// Funciones en clases

class PersonWithMethod {

    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk() {
        console.log("La persona camina.")
    }

}

let person4 = new PersonWithMethod("Brais", 37, "MoureDev")
person4.walk()

// Propiedades privadas

class PrivatePerson {

    #bank // declarar la clase como privada con la #

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank // declarar la clase como privada con la #
    }

    pay() {
        this.#bank // declarar la clase como privada con la #
    }

}

let person5 = new PrivatePerson("Brais", 37, "MoureDev", "IBAN123456789")

// No podemos acceder
// console.log(person5.bank) 
// person5.bank = "new IBAN123456789" // bank no es #bank

console.log(person5)

// Getters y Setters (obtener y establecer)

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
// acceder al valor
    get name() {
        return this.#name
    }
// modificar el valor
    set bank(bank) {
        this.#bank = bank
    }

}

person6 = new GetSetPerson("Brais", 37, "MoureDev", "IBAN123456789")

console.log(person6)
console.log(person6.name)

person6.bank = "new IBAN123456789"

/*
Clase 38 - Herencia de clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=17999
*/

// Herencia 

class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("El animal emite un sonido genérico")
    }

}

// extends hereda de Animal 
class Dog extends Animal {

    sound() {
        console.log("Guau!")
    }

    run() {
        console.log("El perro corre")
    }

}

class Fish extends Animal {

    constructor(name, size) {
        // super hace una llamada a super constructo Animal
        super(name)
        this.size = size
    }

    swim() {
        console.log("El pez nada")
    }

}

let myDog = new Dog("MoureDog")
myDog.run()
myDog.sound()

let myFish = new Fish("MoureFish", 10)
myFish.swim()
myFish.sound()

// Métodos estáticos

class MathOperations {

    static sum(a, b) {
        return a + b
    }
}

console.log(MathOperations.sum(5, 10))