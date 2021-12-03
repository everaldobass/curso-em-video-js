function somar(){
    let tn1 = window.document.getElementById("txtn1")
    let tn2 = window.document.getElementById("txtn2")

    let res = window.document.getElementById("res")


    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)

    let somaTotal = n1 + n2

    res.innerHTML = ` \n A soma de ${n1} mais ${n2} é igual a <strong> ${somaTotal} </strong> `
}