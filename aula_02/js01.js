// 1 - Crie um script que tenha três variáveis:

// var nome;
// let sobreNome;
// const cpf;
// nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.


const cpf = "123.456.789-09"
var nome = "Vinícius"

function sobreNome() {
    let sobreNome = "Wendel"
    return sobreNome
}

console.log(`\n${nome}`)
console.log(sobreNome())
console.log(cpf)
console.log(`Nome: ${nome}\nSobrenome: ${sobreNome()}\nCPF: ${cpf}\n`)