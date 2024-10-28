// 16 - Crie um script que declare um array de números e utilize um loop while para calcular a soma de todos os números do array. Imprima o resultado.

let numeros = [10, 20, 30, 40, 50];

let i = 0
let soma = 0

while (i < numeros.length) {
    soma = soma + numeros[i]
    i++
}

console.log(`\nSoma: ${soma}\n`)