// 1) Devuelve clave y valor de una matriz
const data = {
    frontend: 'Oscar',
    backend: 'Isabel', 
    design: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);
// Uso más común 
console.log(entries.length);

// 2) Valores a una regla
const data = {
    frontend: 'Oscar',
    backend: 'Isabel', 
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// 3) Padding 
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '---'));

// 4) Async y Await
const helloWorld = () => {
    return new Promise( (resolve, reject) => {
       (false)
       ? setTimeout(() => resolve('Hello World'), 3000)
       : reject(new Error('Test Error'))
    });
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try  {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
};

anotherFunction();