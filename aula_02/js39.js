// 39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função toFixed() para formatar os números.

const numeros = Array.from({ length: 20 }, (_, index) => index + 1);

const formatar = (num) => {
    return num.map(numero => numero.toFixed(2))
}

const formatados = formatar(numeros)

console.log(formatados)