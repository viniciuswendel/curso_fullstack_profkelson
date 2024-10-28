// 19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função Math.min() para encontrar o menor número.

let numeros = [7, 29, 52, 20, 11, 76, 15]

const menorNumero = (numero) => {
    return Math.min(...numeros) //utlizando o operador spread(...) para indicar todos os números do array.
}

let encontrarMenor = menorNumero(numeros)

  
console.log("Menor número: ", encontrarMenor);