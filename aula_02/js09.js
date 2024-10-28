// 9 - Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    //Quando for múltiplo de 3 e também de 5
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i,`FizzBuzz`)
    }
    //Quando for somente múltiplo de 3
    else if (i % 3 == 0) {
        console.log(i,`Fizz`)
    }
    //Quando for somente múltiplo de 5
    else if (i % 5 == 0) {
        console.log(i,`Buzz`)
    }
    else {
        console.log(i)
    }
}