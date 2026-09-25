const prompt = require('prompt-sync')();
let c =
{
    a: [1, 2, 3, 4, 5, 6],
    adil: [6, 5, 4, 3, 2, 1],
}
let b = 3;
let d = 4;
if (c.a[2] === 3 || c.adil[5] === 1) {
    c.a[2] = b;
    c.adil[5] = d;
}
console.log(c.adil[5], c.a[2])