// 27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8]

const quadrado = (numeros) => {
    return numeros.map(numero => numero ** 2)
}

let elevar = quadrado(numeros)

console.log(elevar)