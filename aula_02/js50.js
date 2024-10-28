// 50 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.

const animais = ["cavalo", "ovelha", "cachorro", "pato", "galinha", "gato", "porco", "hamster", "abelha"]

const filtrarQuatroCaracteres = (array) => 
    array.filter(str => str.length === 4)

const resultado = filtrarQuatroCaracteres(animais)

console.log(resultado)