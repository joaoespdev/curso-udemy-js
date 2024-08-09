// Atribuição via desestruturação (Arrays)

/*let a;
let b;
let c;

const numeros = [1, 2, 3];

[a, b, c] = numeros;

console.log(a, b, c);*/

/*//índice:        0  1  2  3  4  5  6  7  8
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, , terceiroNumero, , quintoNumero] = numeros;

console.log(primeiroNumero, terceiroNumero, quintoNumero);*/

// índice:            0          1          2
// índice:         0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

console.log(numeros[2][0]);
