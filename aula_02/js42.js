// 42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

const palavras = ["bicileta", "skate", "patins", "futebol", "academia", "vôlei"]

const cinco = palavras.filter(palavra => palavra.length > 5)

console.log(cinco)