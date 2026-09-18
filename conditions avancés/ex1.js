const prompt = require('prompt-sync')();
let rv = Number(prompt("type rv : "));
let sc = Number(prompt("type sc : "));
let dp = Number(prompt("type dp : "));
if (rv >= 30000 && sc >= 700 && dp <= 10) {
    console.log("Éligible");
}
else if (rv >= 30000 && sc >= 650 && dp <= 15) {
    console.log("Éligible avec conditions");
}
else if (rv < 30000 && sc < 650 && dp > 15) {
    console.log("Non éligible");
}