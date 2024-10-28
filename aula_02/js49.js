// 49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função toUpperCase() para converter a última letra.

const colocarUltimaLetraMaiuscula = (array) => 
    array.map(str => {
        if (str.length === 0) return str; // Verifica se a string não está vazia
        const ultimaLetra = str.charAt(str.length - 1).toUpperCase(); // Pega a última letra e a transforma em maiúscula
        return str.slice(0, -1) + ultimaLetra; // Retorna a string sem a última letra + a última letra em maiúscula
    });

const palavras = ["casa", "carro", "bicicleta", "ônibus", "trem"];
const resultado = colocarUltimaLetraMaiuscula(palavras);

console.log(resultado);