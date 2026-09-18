const prompt = require('prompt-sync')();
const a = Number(prompt("type a nmber : "));
let c;
for (let i = 1; i <= 10; i++) {
    c = a * i;
    console.log(`the total ${a} * ${i} = ${c}`);
}