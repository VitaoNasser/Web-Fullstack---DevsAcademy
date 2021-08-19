console.log('Arquivo externo vinculado');

//alert('Olá, usuário!');

let divUsuario = document.querySelector('header .avatar-content div');
console.log(divUsuario);

// adiciona texto dentro do elemento
divUsuario.innerText = "front.Victor";


// adicionando texto sem perder o conteúdo anterior
divUsuario.innerText += ".Nasser";

// selecionar input; getElementsByName retorna array
let inputNome = document.getElementsByName('name');
let inputSobrenome = document.getElementsByName('surname');

//console.log(inputNome, inputSobrenome);
inputNome[0].placeholder = 'Digite seu nome';
inputSobrenome[0].placeholder = 'Digite seu sobrenome';

//trocar cor de fundo do body
let body = document.querySelector('body');

console.log(body);
body.style.backgroundColor = "#fafafa";

// arredondar o form
let inputs = document.querySelectorAll('main form input');


for(let i=0; i < inputs.length; i++) {
    // incrementa
    //inputs[i].style.borderRadius = '5px';
    //inputs[i].style.width = '100%';
    //inputs[i].style.boxSizing = 'border-box';
    inputs[i].style.cssText = 'width:100%; border-radius:5px; box-sizing: border-box;';
 
    
}

let button = document.querySelector('button');
button.style.borderRadius = '5px';
button.style.width = '100%';







