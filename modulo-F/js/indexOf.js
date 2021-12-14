// IndexOf

let num = [6, 4, 1, 2, 3]

// Inseriu no final do Vetor o número 5
num.push(5) 


// Ordena os valores
num.sort()

console.log(num)

console.log(`O Vetor tem ${num.length} posições`)

console.log(`Primeiro valor do vetor: ${num[0]}`)

let pos = num.indexOf(6)
console.log(` Valor 6 está na posição ${pos}`)