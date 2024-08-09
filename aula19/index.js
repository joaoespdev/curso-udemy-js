/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol)
*/
let nome = 'Luiz'
nome = 'Otávio'
console.log(nome)
// Não estou mudando o tipo de dado, apenas o valor.

/*let a = 'A';
let b = a; // Cópia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)*/

/*No segundo console.log, o valor de b não muda porque b ainda contém a cópia do valor original de a, que é 'A'. Alterar a para 'Outra coisa' não altera o valor de b porque b foi inicializado com uma cópia do valor de a, não com uma referência ao mesmo espaço de memória.*/

/* Referência (mutável) - array, object, function

No caso de arrays (ou objetos) em JavaScript, a atribuição não cria uma cópia do valor, mas sim uma referência ao mesmo espaço de memória. Isso significa que tanto a quanto b apontam para o mesmo array na memória. Qualquer alteração feita através de a ou b afetará o mesmo array.
let a = [1, 2, 3]
let b = a
console.log(a, b)

a.push(4)
console.log(a, b)
*/

