// 4 - Faça um script que contenha uma função objetivoDoCurso(tecnologia). A função deve retornar a string: “Meu objetivo é aprender [parametro tecnologia]”. Fora da função, defina uma const tecnologia que possua o valor “React”. Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”. Faça um exemplo com function e outro com arrow function.


const tecnologia = "React"

function objetivoDoCurso(tecnologia) {
    return `\nMeu objetivo é aprender ${tecnologia}\n`
}

console.log(objetivoDoCurso(tecnologia))