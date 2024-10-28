// 31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize um loop for para imprimir o nome de cada aluno.

let alunos = [
    {
        nome: "Pedro",
        idade: 22,
        notas: [8, 7.5, 9]
    },
    {
        nome: "Vinícius",
        idade: 25,
        notas: [9, 8.5, 10]
    },
    {
        nome: "João",
        idade: 28,
        notas: [6, 7, 8.5]
    }
]

for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome)
}