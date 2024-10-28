// 18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função Math.max() para encontrar o maior número.

let numeros = [7, 29, 52, 20, 11, 76, 15]

const maiorNumero = (numero) => {
    return Math.max(...numeros) //utlizando o operador spread(...) para indicar todos os números do array.
}

let encontrarMaior = maiorNumero(numeros)

  
console.log("Maior número: ", encontrarMaior);