const h1 = document.querySelector('h1');
const form = document.querySelector('#form');

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calculo1');
const pResultado = document.querySelector('#resultado')

//form.addEventListener('submit', sumarInputValues);

btn.addEventListener('click', sumarInputValues)


function sumarInputValues(event){
    const sumaInputs = input1.value + input2.value;
    pResultado.innerText = "Resultado: " + sumaInputs;
}