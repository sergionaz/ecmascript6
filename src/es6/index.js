// 1) Definir defaults para los parámetros
function newFunction(name, age, country) {
    var name = name || 'Sergio';
    var edad = edad || 29;
    var country = country || 'AR';
//    console.log(name, age, country);
}
// Con ES6
function newFunction2(name = 'Sergio', age = 29, country = 'AR') {
//    console.log(name, age, country);
}

// 2) Concatenar con "template literals" (estilo Format de Genexus)
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);
// Con ES6
let epicPhrase2 = `${hello} ${world}`
//console.log(epicPhrase2);

// 3) Multilínea con "template literals"
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n"
    + "sed do eiusmod tempor incididunt ut labore et"
// console.log(lorem);
// Con EM6
let lorem2 = `otra frase épica 
ahora es otra frase épica`;
// console.log(lorem2);

// 4) Desestructuración de elementos
let person = {
    'name': 'Sergio',
    'age': 29,
    'country': 'AR'
};
// console.log(person.name, person.age);
// Con ES6
let {name, age} = person;
// console.log(name, age);

//5) Unir elementos
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David', ...team1, ...team2];
// console.log(education);

// 6) ¿Qué es let y const? (cambios en el scope)
// Var es global
{
    var globalVar = "Global Var"
}
// Let vive en el bloque
{
    let globalLet = "Global Let"
    console.log(globalLet);
}
console.log(globalVar);
// Const no se puede modificar luego
cons a = 'b';
// a = 'a'; // Esto no lo va a permitir

// 7) Asignar objetos
let name = 'Sergio';
let age = 29;
// Antes 
obj = {name: "Sergio", age: 29};
// Con EM6
obj2 = {name, age};
// console.log(obj2);

// 8) Funciones arrow
const names = [
    {name: 'Sergio', age: 29},
    {name: 'Lucas', age: 32}
];
// Antes
let listOfNames = names.map(function (item){
    console.log(item.name);
})
// Con EM6
let listOfNames2 = names.map(item => console.log(item.name));
//  otra forma alternativa
const listOfNames3 = (name, age, country) => {
    console.log(name);
};
// otro
const listOfNames4 = name => {
    console.log(name);
};
// ultima (sin return, ni bloques de código)
const square = num => num * num;

// 9) Asincronismo (por medio de promesas)
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!')
        } else {
            reject('Ups!')
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// 10) Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

// 11) Module
import { hello } from './module'

hello();

// 12) Generators
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);