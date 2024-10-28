// 32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função map() para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.

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

let nomesAlunos = alunos.map(aluno => aluno.nome)
console.log(`\nNome dos alunos: ${nomesAlunos}\n`)