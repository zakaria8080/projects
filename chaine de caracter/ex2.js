const prompt = require('prompt-sync')();
let a = prompt("type a num : ");
let b = 0;
for (let c of a) {
    b++;
}
console.log(`${a} = ${b}`);