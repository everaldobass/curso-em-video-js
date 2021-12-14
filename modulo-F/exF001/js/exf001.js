// Número (Entre 1 e 100)

let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")

let valores = []


// Válidar se um número e menor que 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){

        return true

    }else{

        return false
    }
}



function inLista(n, l){

    if(l.indexOf(Number(n)) != -1) {

        return true

    }else {

        return false
    }
}




// Adicionar o número na lista
function adicionar(){
  if(isNumero(num.value) && !inLista(num.value, valores)){

    valores.push(Number(num.value))

    let item = document.createElement("option")
    item.text = `Valor ${num.value} Adicionado.`
    lista.appendChild(item)

    res.innerHTML = ""

      //window.alert("Tudo ok")
  }else{

     window.alert("Valor inválido!")
  }


  num.value = ""
  num.focus()

}


// Botão Finalizar
function finalizar(){

    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar! ")
    } else {

        let total = valores.length

        let maior = valores[0]
        let menor = valores[0]

        let soma = 0
        let media = 0

        //  Verifica os vamores maior e menor
        for(let pos in valores){

            soma += valores[pos]


            if (valores[pos] > maior)
            maior = valores[pos]

            if (valores[pos] < menor)
            menor = valores[pos]

            
        }

        media = soma / total

        res.innerHTML = ""
        res.innerHTML += `<p> Total Número cadastrados: ${total} </p>`
        res.innerHTML += `<p> Valor maior informado: ${maior} </p>`
        res.innerHTML += `<p> Valor menor informado: ${menor} </p>`

        res.innerHTML += `<p> Soma dos valores: ${soma} </p>`
        res.innerHTML += `<p> Média dos valores: ${media} </p>`
    }

}