// Crie uma página que verifique se um número é primo. O usuário deve inserir um número e a página deve exibir se ele é primo ou não.

function verificarPrimo() {
    const numero = parseInt(document.getElementById('numero').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(numero) || numero < 2) {
        resultadoDiv.textContent = "Por favor, insira um número maior ou igual a 2.";
        return;
    }

    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        resultadoDiv.textContent = `${numero} é um número primo!`;
    } else {
        resultadoDiv.textContent = `${numero} não é um número primo.`;
    }
}