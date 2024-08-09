// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';
const pontuacaoUsuario = 5000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario= null;
const corPadrao = corUsuario || 'Preta';
// Acima é um exemplo de Fallback (Significa plano B ou plano de emergência, ou seja, se a configuração definida pelo programador falhar ainda vai existir uma opção.) Temos o valor de corPadrao predefinida para corUsuario ou então será da cor preta se corUsuario for null.

console.log(nivelUsuario, corPadrao);



/*if (pontuacaoUsuario >= 1000) {

    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}*/