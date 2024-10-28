// 41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função toUpperCase() para converter a primeira letra.

const tecnologias = ["java", "python", "c#", "js"]

const maiuscula = (letra) => {
    for (let i = 0; o < letra.length; i++) {
        letra[i] = letra[i][0].toUpperCase() + letra[i].slice(1)
    }
    return letra
}

const PrimeiraMaiscula = maiuscula(tecnologias)

console.log(PrimeiraMaiscula)