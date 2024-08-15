// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.');
}); // e = event

function setResultado() {
    // Capturar peso&altura
    // Imprimir resultado
    let peso = parseFloat(document.querySelector('#peso').value);
    let altura = parseFloat(document.querySelector('#altura').value);
    let result = document.querySelector('#resultado');

    //Convertendo "cm" para "m" para não haver problema na multiplicação.
    altura /= 100;
    let imc = peso / (altura * altura);

    //Classificar o IMC do usuário e imprimir o resultado:
    if (imc < 18.5) {
        result.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (Peso normal)</p>`
    } else if (imc >= 25 && imc <= 29.9) {
        result.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
    } else if (imc >= 30 && imc <= 34.9) {
        result.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)</p>`
    } else if (imc >= 35 && imc <= 39.9) {
        result.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)</p>`
    } else if (imc > 40) {
        result.innerHTML = `<p> Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`
    }

    //toFixed(2) permite que limite o resultado para apenas 2 casas decimais.
}

