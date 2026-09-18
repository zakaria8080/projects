const prompt = require('prompt-sync')();

let age = Number(prompt("Age : "));
let ans = Number(prompt("Cotisation : "));
let montant = Number(prompt("Montant : "));

let plan = "";

if (age < 65) {
    plan = "Plan épargne non encore disponible";
} else if (ans >= 30 && montant >= 100000) {
    plan = "Plan complet avec pension élevée";
} else if (ans >= 20 && montant >= 50000) {
    plan = "Plan partiel avec pension moyenne";
} else {
    plan = "Non éligible";
}

let bonus = 0;
if (montant > 50000) {
    let extra = montant - 50000;
    bonus = Math.floor(extra / 10000) * 5;
}

console.log("Plan : " + plan);
console.log("Bonus : " + bonus + "%");