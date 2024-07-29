/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function greetUsers(any){
    for(let i=0; i < any.length; i++){
        console.log(`Olá ${any[i]}`)
    }
}

greetUsers(['p', 'f'])
