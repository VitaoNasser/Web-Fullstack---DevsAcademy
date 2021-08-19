console.log('Arquivo externo!');

let btnToggleTheme = document.querySelector('.toggleTheme');
//console.log(btnToggleTheme);

let body = document.querySelector('body');
let iframe = document.querySelector('iframe');
// Arrow function: sintaxe sofisticada de function
btnToggleTheme.onclick = (event) => {
    // alternancia de classe no elemento body
    body.classList.toggle('dark-theme');
    iframe.style.cssText = 'filter: invert(90%)';
}

/*let cafeDaManha = false;

if(cafeDaManha){
    console.log('Tô de bom humor')
} else {
    console.log('Sem tempo, irmão!');
}

//if ternário: (condição) ? True : False
//console.log((cafeDaManha) ? 'Tô de bom humor' : 'Sem tempo, irmão!');*/