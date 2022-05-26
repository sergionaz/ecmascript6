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