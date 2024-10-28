// 10 - Refaça o exercício anterior utilizando .map(). Para criar um array com números de 1 a 100:

const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

var qtdFizz = 0
var qtdBuzz = 0
var qtdFizzBuzz = 0
var qtd = 0

numeros.map(numero => {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log(numero, `FizzBuzz`)
        qtdFizzBuzz++
    } else if (numero % 3 == 0) {
        console.log(numero, `Fizz`)
        qtdFizz++
    } else if (numero % 5 == 0) {
        console.log(numero, `Buzz`)
        qtdBuzz++
    } else {
        console.log(numero)
        qtd++
    }
})

console.log(`Quantidade de Fizz (múltiplo de 3): ${qtdFizz}`)
console.log(`Quantidade de Buzz (múltiplo de 5): ${qtdBuzz}`)
console.log(`Quantidade de FizzBuzz (múltiplo de 3 e 5): ${qtdFizzBuzz}`)
console.log(`Quantidade de nenhuma das condições acima: ${qtd}`)