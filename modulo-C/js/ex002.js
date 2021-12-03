//onclick

let click = window.document.getElementById('area')
click.addEventListener('click', clicar)
click.addEventListener('mouseenter', entrar)
click.addEventListener('mouseout', sair)

function clicar(){
    
    click.innerHTML = 'evento onclik'
    click.style.background = "blue"
}

function sair(){
    click.innerHTML = "Saiu!!!!"
    click.style.background = "red"
}

function entrar(){
    click.innerHTML = "Entrar"
    click.style.background = "chocolate"
}