function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

// "evento.preventDefault() é para impedir o comportamento padrão do formulário de recarregar a página. Isso ocorre porque após a submissão de um formulário, é comum que a página recarregue para exibir o resultado da submissão."