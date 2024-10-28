// 34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades nome, idade e notas (um array de números). Utilize a função reduce() para calcular a média das idades dos alunos.

const alunos = [
    {nome: "Pedro", idade: 22, notas: [8, 7.5, 9]},
    {nome: "Vinícius", idade: 25, notas: [9, 8.5, 10]},
    {nome: "João", idade: 28, notas: [6, 7, 8.5]},
    {nome: "Ana", idade: 26, notas: [5, 6, 5]},
    {nome: "Lucas", idade: 30, notas: [8, 9, 7]}
]

const somaIdade = alunos.reduce((soma, aluno) => soma + aluno.idade, 0)

const mediaIdade = (somaIdade / alunos.length).toFixed(1)

console.log(`A média das idades é: ${mediaIdade}`)