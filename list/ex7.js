const prompt = require('prompt-sync')();
let c = parseInt(prompt("type a number of list: "));
let b = [];
for (let n = 0; n < c; n++) {
    let q = Number(prompt("type : "))
    b[n] = q;
}
console.log(b);
let sx = 0;
for (let y = 0; y < b.length; y++) {
    for (let z = 0; z < b.length; z++) {

        if (b[z] > b[y]) {
            sx = b[z];
            b[z] = b[y];
            b[y] = sx;
        }
    }
}
console.log(b)