const prompt = require('prompt-sync')();
function puwer(a, b) {
    if (a < b)
        return a;
    else {
        return b;
    }
}
console.log(puwer(6, 8));