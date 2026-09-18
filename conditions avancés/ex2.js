const prompt = require('prompt-sync')();
const age = Number(prompt("type a age : "));
let kist = Number(prompt("type a kist : "));
if (age < 25) {
    kist = kist * 1.5;
    console.log(`the total is 1 : ${kist}`);
}
else if (age > 25 || age < 65) {
    console.log(`the total is 2 : ${kist}`);
}
else if (age > 65) {
    kist = kist * 1.2;
    console.log(`the total is 3 : ${kist}`);
}
let a = Number(prompt("type number from 1 to 3 : "));
if (a === 1) {
    kist = kist * 2;
    console.log(kist);
}
else if (a === 2) {
    kist = kist * 1.5;
    console.log(kist);
}
else if (a === 3) {
    kist = kist * 1.1;
    console.log(kist);
}
const acsido = Number(prompt("number an acsido : "));
if (acsido > 1) {
    let u = (kist * 30 / 100);
    kist = kist + u;
    console.log(kist);
}
else if (acsido <= 1) {
    console.log(kist);
}