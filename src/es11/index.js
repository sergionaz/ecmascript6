// 1) Dynamic import
const button = document.getElementById("btn");

button.addEventListener('click', async function() {
    const module = await import("./file.js");
    module.hello();
});

// 2) BigInt!
// Antes
const bigNumber = 9007199254740991n;
// Ahora
const anotherBignumbre = BigInt(9007199254740991);

// 3) Promise
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

// 4) Global This
console.log(window);
console.log(globalThis);

// 5) Operador de Nulo 
const fooo = null ?? 'default string';
console.log(fooo);

// 6) Optional chaining (para que no pinche en ejecución por undefined)
const user = {};
if (user?.profile?.email) {
    console.log('email');
} else {
    console.log('fail');
};