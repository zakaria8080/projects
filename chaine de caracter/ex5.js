const prompt = require('prompt-sync')();
let a = prompt("type a text 1 : ");
let i = a.length - 1;
let w = "";
while (i >= 0) {
    w += a[i];
    i--;
}
console.log(w)