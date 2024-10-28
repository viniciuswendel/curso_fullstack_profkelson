// 37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função reverse() para inverter as strings.

const Produtos = ["Arco", "Balde", "Cadeado", "Disco", "Estante"]

const inverter = (prod) => {
    return prod.map(produto => produto.split('').reverse().join(''))
}

const palavrasInvertidas = inverter(Produtos)

console.log(palavrasInvertidas)