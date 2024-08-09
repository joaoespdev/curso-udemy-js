/*const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via deseestruturação
const { nome: n = 'não existe', sobrenome, idade } = pessoa;
// por padrão, nome imprimirá "não existe" se ele de fato, não existir.

// a variável pode se chamar apenas nome, mas nesse caso atribui o nome "n" para o objeto "nome".

console.log(n, sobrenome);

------------------------------------------*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//const { endereco: { rua: r, numero }, endereco } = pessoa;
const { endereco: { rua: r, numero }, ...resto } = pessoa;

console.log(r, numero, resto);

