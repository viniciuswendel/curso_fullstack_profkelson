// 44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.

const numeros = Array.from({ length: 10 }, (_, index) => index + 1);

const divisor = numeros.filter(numero => numero % 2 === 0)

console.log(divisor)
