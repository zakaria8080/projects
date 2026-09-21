const prompt = require('prompt-sync')();
let c = parseInt(prompt("type a number of list: "));
let b = [];
let d = 0;
for (r = 0; r < c; r++) {
    let x = Number(prompt(`type a number : `));
    b.push(x);
    if (d < x) {
        d = x;
    }
}
console.log(d);

