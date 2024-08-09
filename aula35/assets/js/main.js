// EXERCÍCIO DE TAGS DINÂMICAS

/*// Seleciona o elemento pai onde o novo elemento será inserido
const parentSection = document.getElementsByClassName("container")[0];

// Cria um novo elemento <div>
const novaDiv = document.createElement("div");

// Opcional: adiciona uma classe ou outros atributos
novaDiv.className = "primeira-div";
novaDiv.id = "primeira-div";

// Anexa a nova div a section
parentSection.appendChild(novaDiv);

const paragrafo = document.createElement("p");
paragrafo.textContent = "Frase 1";

const outraDiv = document.createElement("div");
outraDiv.textContent = "Frase 2";

const footer1 = document.createElement("footer");
footer1.textContent = "Frase 3";

const section1 = document.createElement("section");
section1.textContent = "Frase 4";

novaDiv.appendChild(paragrafo);
novaDiv.appendChild(outraDiv);
novaDiv.appendChild(footer1);
novaDiv.appendChild(section1);*/

// Mesmo exercício, porém com o uso de Array, For e desestruturação:

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);