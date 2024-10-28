// 14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.

const base = 4
const altura = 3

const areaTriangulo = () => {
    let area = (base*altura)/2
    return area
}

console.log(`\nÁrea do triângulo: ${areaTriangulo()}\n`)