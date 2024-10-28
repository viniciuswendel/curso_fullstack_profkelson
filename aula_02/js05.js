// 5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals ${var}. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".

const carreira1 = "Back-end Developer"
const carreira2 = "Front-end Developer"

//Função tradicional
function fTrad(carreira) {
    return `\n<Função Tradicional>\nMeu objetivo de carreira é me tornar um ${carreira}.\n`
}

//Função arrow
const fArrow = (carreira) => {
    return `\n<Função Arrow>\nMeu objetivo de carreira é me tornar um ${carreira}\n`
}

console.log(fTrad(carreira1))
console.log(fArrow(carreira2))