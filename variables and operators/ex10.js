const prompt = require('prompt-sync')();
let π = 3.14;
let r = parseFloat(prompt("type a r : "));
const volume = ((4 / 3) * π * r ** 3);
console.log(volume);