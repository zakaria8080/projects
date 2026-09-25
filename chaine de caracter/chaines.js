let prompt = require(prompt - sync)()
//test 1 : 
/*let ask = prompt("how much carakter : ")
let list = []
for (let i = 0 ; i < ask ; i++ ){
    let a = prompt(what the ${i + 1} number :)
    list.push(a)
}
console.log(list)
//test 2 :
let ask3 = Number(prompt("how much nimber : "))
let liste = []
for (let i = 0; i < ask3; i++) {
    let ask4 = Number(prompt(the ${i + 1} number))
    liste.push(ask4)
}
let o = 0
for (let i = 0; i < liste.length; i++)(
    o++
)
console.log(liste)
console.log(o)
// test 3 : 
let listw = [3, 4, 32, 2, 56, 2, 99, 8, 7]
let li = [33, 44, 55, 66, 77, 22,]
for (let o = 0; o < listw.length; o++) {
    li.push(listw[o])
}
console.log(li)
//test 4 :
let lii = [22, 33, 44, 22, 44, 55]
let loo = [22, 33, 44, 22, 44, 55]
let o = 0
for (let i = 0; i < lii.length; i++) {
    if (lii[i] === loo[i]) {
        console.log(thw numbers ${lii[i]} et ${loo[i]} kaytsawaw)
        o += 1
    } else {
        console.log(thw numbers ${lii[i]} et ${loo[i]} makaytsawawch)
    }
}
if (o === lii.length && lii.length === loo.length) {
    console.log("list kaytchabho")
} else {
    console.log("makaytchabhouch zayda chihaja")
}
//test 5 : 
let list = ["a", "b", "c", "d"]
for (let i = list.length - 1; i >= 0; i--) {
    console.log(list[i])
}
// test 6 : 
let listb = ["d", 3, "x", 4, "r", 77, "r", "c", "x", 99, "d", "f"]
let s = 0
let v = 0
for (let i = 0; i < listb.length; i++) {
    if (listb[i] >= 0) {
        s++
    } else {
        v++
    }
}
console.log(s)
console.log(v)
// test 7 :
let liist = ["r", "g", "c", "z", "v"]
let ss = liist.map(item => item.toUpperCase());
console.log(ss)
//test 8 :
let liits = ["A", "G", "C", "z", "K"]
let c = liits.map(item => item.toLocaleLowerCase())
console.log(c)
//test 9 :
let liist = ["p", "e", "w", "e", "r"]
console.log(liist.join(""))
// test 10 :*/
let le = "zakaria"
let ask = prompt("what the name : ")
let p = false
for (let i = 0; i < le.length; i++) {
    if (ask === le[i]) {
        console.log(`hello ${ask}`)
        p = true
    } else {
        p = false
    }
}
if (o === false) {
    console.log("rak !!! ")
}
