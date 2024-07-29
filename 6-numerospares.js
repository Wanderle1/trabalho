/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Wanderlei
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function getEvenNumbers(any){
    let pares= any.filter(any => any % 2 == 0)
    return pares
}

console.log(getEvenNumbers([1,2,3,4,5,6]))
