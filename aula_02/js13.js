// 13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.

const largura = 4

const larguraCubo = () => {
    let larguraCubo = largura * largura * largura
    return larguraCubo
}

console.log(`\nLargura do Cubo: ${larguraCubo()}\n`)