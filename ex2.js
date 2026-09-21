const prompt = require('prompt-sync')();
let c = parseInt(prompt("type a number of list: "));
let b = [];
for (let r = 0; r < c; r++) {
    let x = prompt(`type a number : `);
    b.push(x);
    console.log(b);
}