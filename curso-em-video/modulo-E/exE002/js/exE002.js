// Tabuada
function tabuada(){

    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if(num.value.length == 0){
        window.alert("Digite um número")
    }else{
        let n = Number(num.value)

        let c = 1

        //Limpar a tabuada
        tab.innerHTML = ""

        while (c <= 10){

        let item = document.createElement("option")
        item.text = `Tabuada: ${n} x ${c} = ${n*c}`

        item.value = `tab${c}`

        tab.appendChild(item)
        c++

        }
    }
}


