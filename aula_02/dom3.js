// Crie uma página que gere um número aleatório entre 1 e 100 e permita que o usuário tente adivinhar. Informe se a tentativa é maior, menor ou igual ao número gerado.

const aleatorio = Math.floor(Math.random() * 100) + 1;

const adivinhar = () => {
    const tentativa = document.getElementById("tentativa").value;
    const mensagem = document.getElementById("mensagem");

    if (tentativa == aleatorio) {
        mensagem.textContent = "Parabéns! você acertou";
        mensagem.style.color = "green";
    } else if (tentativa < aleatorio) {
        mensagem.textContent = "Tente um número maior!";
        mensagem.style.color = "blue";
    } else {
        mensagem.textContent = "Tente um número menor!";
        mensagem.style.color = "blue";
    }
}