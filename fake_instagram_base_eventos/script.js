console.log('link externo works');

let principal = document.querySelector('main');

let btnMore = document.getElementById('more');

//let num = 0;

btnMore.onclick = (event) => {
    
    var originalElement = document.querySelector('main .card');
    //originalElement.setAttribute('id', 1);
    var cloneElement = originalElement.cloneNode(true);
    //cloneElement.setAttribute('id', num);
    //num += 1;
    principal.appendChild(cloneElement);
    btnMore.style.cssText = 'order: 1';
}

//let heart = document.querySelectorAll('.card-body img');

let like = (elemento) => {

    console.log(elemento);
    if(elemento.src == "http://127.0.0.1:5501/img/icons/heart.svg")
    {
        console.log('true')
        elemento.setAttribute('src', 'img/red-heart.png');  
    }
    else if (elemento.src == "http://127.0.0.1:5501/img/red-heart.png")
    {
        console.log('false')
        elemento.setAttribute('src', 'img/icons/heart.svg');
    }          
}
    

