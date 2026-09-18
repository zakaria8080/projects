const prompt = require('prompt-sync')();
let c = Number(prompt("affichage C : "));
let id =
    c < 0 ? "Solide" :
        (c >= 0) || (c < 100) ? "Liquide" :
            (c >= 100) ? "Gaz" : "fixed";
console.log(id);