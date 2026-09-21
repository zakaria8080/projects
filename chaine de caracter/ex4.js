const prompt = require('prompt-sync')();
let a = prompt("type a caracter : ");
let b = prompt("type a caracter 2 : ")
if (a.length === b.length)
    console.log(`${a} === ${b}`);
else
    console.log("type 1 not equal type 2");