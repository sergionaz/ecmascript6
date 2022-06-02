// 1) flat

let varArray = [1,2,3, [1,2,3, [1,2,3]]];

console.log(varArray.flat());

// 2) flatMap
let varArray2 = [1,2,3,4,5];

console.log(varArray2.flatMap(value => [value, value *2]));

// 3) TrimStart: Eliminar los espacios en blanco de un string
let hello = '                            hello world'

console.log(hello);

console.log(hello.trimStart);

// 4) Parametro opcional al catch
try {

} catch (error) {
    error
}

// 5) 
let entries = [["name", "oscar"], ["age", 29]];

console.log(Object.fromEntries(entries));

// 6)
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
