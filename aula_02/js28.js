// 28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

const numeros = Array.from({ length: 10 }, (_, index) => index + 1);

const multiplos = (numeros) => {
    return numeros.filter(numero => numero % 3 == 0)
}

const mult3 = multiplos(numeros)
console.log(mult3)