/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Wanderlei
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function findMax(any){
    let maior = 0
    for(let i=0; i < any.length; i++ ){
        if(any[i] > maior){
            maior = any[i]
        }
    }
    return maior
}

console.log(findMax([1,2,3,4,5,1,3,2]))
