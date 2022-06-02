// 1) Replace all
const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web';
const replacedString = string.replace('JavaScript', 'Python');
console.log(replacedString);

const replacedString2 = string.replaceAll('JavaScript', 'Python');
console.log(replacedString);

// 2) Métodos privados
class Message {
    #show(val){
        console.log(val);
    };    
}

const message = new Message();
message.show('Hola');

// 3) Promise Any (recupera la primer respuesta success)
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// 4) Referencia de forma débil a un objeto
class anyClass {
    constructor(element) {
    this.ref = new WeakRef(element)
    }
    {...}
}

// 5) Más expresiones y operaciones
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);
console.log(isTrue ||= isFalse);
let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);