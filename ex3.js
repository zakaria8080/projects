const prompt = require('prompt-sync')();
let c = parseInt(prompt("type a number of list: "));
let b = [];
for (let r = 0; r < c; r++) {
    let x = prompt(`type a number : `);
    b.push(x);
    console.log(b);
}
let somme = 0;
for (let e = 0; e < b.length; e++) {
    somme += +b[e];
}
console.log(somme);