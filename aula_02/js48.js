// 48 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares.

const numeros = Array.from({ length: 10 }, (_, index) => index + 1);

const impares = (numbers) => numbers.filter(num => num % 2 !== 0)

const resultado = impares(numeros)

console.log(resultado)