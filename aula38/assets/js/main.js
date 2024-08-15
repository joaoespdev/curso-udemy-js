const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

//Atribuindo os estilos de body a variável
const estilosBody = getComputedStyle(document.body);
//Atribuindo apenas backgroundColor a variável
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps) {
    console.log(p.textContent);
    /*Se for trocar as cores por aqui seria dessa forma:
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';*/
}