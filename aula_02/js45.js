// 45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

const veiculos = ["carro", "moto", "bicicleta", "avião", "ônibus"]

const inverterMaiuscula = (veiculo) => 
    veiculo.map(str => str.toUpperCase().split('').reverse().join(''))

const resultado = inverterMaiuscula(veiculos)

console.log(resultado)