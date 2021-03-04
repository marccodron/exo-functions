/*
Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
*/
/*function biggest([99, 100, 101, 1]) // returns 101 
{ return biggest[];}
*/
const biggest = (Row) => {
    return Math.max(...Row)
}
console.log(biggest([99, 100, 101, 1]))


/*
Ajouter au fichier précédent une fonction sortAscend qui prend comme paramètre une liste de nombres et retourne une nouvelle liste dont les nombres sont classés par ordre croissant.

sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101]
*/
function sortAscend (liste) {
  return liste.sort((a, b) => a - b);
}
console.log(sortAscend([99, 100, 101, 1]))


/*
Ajouter au fichier précédent une fonction makeUnique qui prend comme paramètre une liste de nombre et retourne une nouvelle liste sans doublons, classée par ordre croissant.

makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) //returns [1, 2, 3, 4, 5, 7]
*/
const makeUnique = (Row) => {
  return Array.from(new Set (Row));
}
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))