const prompt = require('prompt-sync')();
let personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: [1, 2, 3, 4, 5, 6]
};
console.log(personne.nom);
console.log(personne.prenom);
console.log(personne.age.join(" "));
let somme = 0;
for (let a of personne.age) {
    somme += a;
}
console.log(somme)