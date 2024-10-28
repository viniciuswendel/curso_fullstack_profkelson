// 29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".

const palavras = ["Teclado", "Computador", "Alicate", "Martelo", "Adesivo", "Moto", "Artefato"]

const comA = (palavras) => {
    return palavras.filter(palavra => palavra.startsWith('A'))
}

const inicioA = comA(palavras)
console.log(inicioA)