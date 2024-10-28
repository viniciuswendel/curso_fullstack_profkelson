// 7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:

// nome: O nome do aluno.
// cpf: O CPF do aluno.
// cidade: A cidade onde o aluno mora.
// notas: Um array com 4 notas do aluno. Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.

const aluno  = {
    nome: "Vinícius",
    cpf: "123.456.789-09",
    cidade: "João Pessoa",
    notas: [5.0, 7.0, 7.5, 10.0]
}

console.log(`\nNome: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}`)

var media = ((aluno.notas[0]+aluno.notas[1]+aluno.notas[2]+aluno.notas[3])/aluno.notas.length).toFixed(1)

console.log(`\nA média do aluno ${aluno.nome} é ${media}.`)

var notaAleatoria = aluno.notas[Math.floor(Math.random()*aluno.notas.length)]
var converterNota = notaAleatoria * 10

console.log(`A Nota sorteada foi: ${notaAleatoria} e convertida para a escala 0-100 é: ${converterNota}\n`)