// 21 - Crie um script que declare um array de números e utilize a função filter() para criar um novo array contendo apenas os números pares. Imprima o novo array.

const numeros = [1, 2, 3, 4, 5, 6]

const Pares = numeros.filter(numero => numero % 2 ==0)

console.log(`Pares: ${Pares}`);