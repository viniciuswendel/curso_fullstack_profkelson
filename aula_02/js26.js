// 25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função toUpperCase() para converter as strings.

let cidades = ["JOÃO PESSOA", "NATAL", "RECIFE", "MACEIO", "SALVADOR"]
let minusculo = cidades.map(cidade => cidade.toLowerCase())

console.log(minusculo)