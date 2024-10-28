// 38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".

const strings = ["previsão", "clima", "filmes", "cinema", "objeto", "careca", "cabelo", "dia", "noite"]

const finalA = strings.filter(string => string.endsWith("a"))

console.log(`As palavras que terminam com "a" são: ${finalA}.`)