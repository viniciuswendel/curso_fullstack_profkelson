// 46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".

const animais = ["cavalo", "ovelha", "cachorro", "pato", "galinha", "gato", "porco", "hamster", "abelha"]

const letraE = (animal) => animal.filter(e => e.includes('e'))

const resultado = letraE(animais)

console.log(resultado)