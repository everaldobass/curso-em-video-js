// Selecionando


//Marca - getElementsByTagName()
let p1 = window.document.getElementsByTagName("p")[0]
window.document.write("Selecionando o paragrafo: " + p1.innerText)
p1.style.color = "yellow"

// innerText pega o texto sem formatação


// Alterando a cor do body
let body = window.document.body
body.style.background = "#333"



// ID - getElementById
let msg = window.document.getElementById('mensagem')
msg.style.background = 'green'

// Alerar o elemento por ID
msg.innerHTML = "Alterando o texto da div mensagem"

// Selecionando com o querySelectorAll
let divClasse = window.document.querySelector('div.classe')
divClasse.style.background = "blue"

// Alterar o conteúdo da classe
divClasse.innerText = "Alterando o texto da Classe com JavaScript"

// querySelector
let divQuery = window.document.querySelector('div.query')
divQuery.style.color = "red"



