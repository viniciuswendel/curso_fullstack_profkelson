// 36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

const numeros = Array.from({ length: 15 }, (_, index) => index + 1);

const multiplos = (numeros) => {
    return numeros.filter(numero => numero % 5 == 0)
}

const mult5 = multiplos(numeros)
console.log(mult5)