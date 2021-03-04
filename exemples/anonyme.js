let squarre = function (nb) { return nb * nb };
let x = squarre(4); //x reçoit la valeur 16

let factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };
console.log(factorial(3));