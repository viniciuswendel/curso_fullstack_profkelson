// 23 - Crie um script que declare um array de números e utilize a função reduce() para calcular a soma de todos os números do array. Imprima o resultado.

const numeros = [9, 40, 19, 66, 2, 10]

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
console.log(soma)