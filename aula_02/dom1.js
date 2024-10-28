// Crie uma página que calcule a média de quatro notas inseridas pelo usuário. Exiba se o aluno foi aprovado (média >= 7) ou reprovado (média < 7).

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    const media = (nota1 + nota2 + nota3 + nota4) / 4;

    let resultado = document.getElementById('resultado');
    if (media >= 7) {
        resultado.textContent = `A média é ${media.toFixed(2)}. Aluno aprovado!`;
    } else {
        resultado.textContent = `A média é ${media.toFixed(2)}. Aluno reprovado!`;
    }
}