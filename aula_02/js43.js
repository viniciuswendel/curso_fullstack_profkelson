// 43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.

const numeros = Array.from({ length: 10 }, (_, index) => index + 1);

const tres = numeros.map(numero => numero * 3)

console.log(tres)