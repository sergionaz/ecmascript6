// 1) Operador de reposo
const obj = {
    name: 'Sergio',
    age: 29,
    country: 'AR'
}
// Desestructuro para descartar country y quedarme con el resto
let { country, ...all } = obj;
console.log(all);

// 2) Unir elementos de objeto a un nuevo objeto
const obj = {
    name: 'Sergio',
    age: 29
}

const obj1 = {
    ...obj,
    country: 'AR'
}
console.log(obj1);

// 3) Agrega un finally al Promise
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));

// 4) Manejo de RegEx    
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2014-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);