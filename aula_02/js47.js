// 47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.

const numeros = Array.from({ length: 10 }, (_, index) => index + 1);

const dez = numeros.map(numero => numero * 10)

console.log(dez)