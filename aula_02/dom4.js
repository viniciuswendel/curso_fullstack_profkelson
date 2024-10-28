// Crie uma página que calcule a soma dos números de 1 a N, onde N é um valor inserido pelo usuário.

const calcularSoma = () => {
    const numero = parseInt(document.getElementById("numero").value)
    const resultado = document.getElementById("resultado")

    if (isNaN(numero) || numero < 1) {
        resultado.textContent = "Por favor, insira um número válido"
        resultado.style.color = "red"
        return
    }

    const soma = (numero * (numero + 1) / 2)

    resultado.textContent = `A soma de 1 até ${numero} é: ${soma}`
    resultado.style.color = "green"
}