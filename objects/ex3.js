const prompt = require('prompt-sync')();
let d = Number(prompt("type a number : "));
let c = Number(prompt("type a number : "));
let a = {
    largeur: d,
    langeur: c
}
function puwer(d, c) {
    let x = a.largeur * a.langeur;
    return x
}

console.log(puwer(a.langeur, a.largeur))