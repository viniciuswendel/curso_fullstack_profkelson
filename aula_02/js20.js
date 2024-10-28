// 20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.

const media = (numero)=> {
    let soma = 0

    for (let i=0; i < numero.length; i++) { 
        soma = soma + numero[i]
    }

    let media = soma/numero.length    
    return media
}

let numeros = [50, 60, 70, 80, 90, 100]
let calcMedia = media(numeros) 

console.log(`\nMédia: ${calcMedia}\n`);