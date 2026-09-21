const prompt = require('prompt-sync')();
let names = "puwer"
let ask = prompt("what the name : ")
let ya = false;
for (let i = 0; i < names.length; i++) {
    if (ask === names[i]) {
        console.log(`hello ${ask}`)
        o = true;
    } else {
        o = false;
    }
}
if (o === false) {
    console.log("rak ma3adnach ")
}