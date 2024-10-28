// 12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.

let altura = 2

const alturaQuadrado = () => {
    let alturaQuadrado = altura * altura;
    return alturaQuadrado
}

console.log(`\nAltura do quadrado: ${alturaQuadrado()}\n`)