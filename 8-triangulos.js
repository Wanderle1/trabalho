/*
Crie uma função chamada drawTriangle que aceite um número n e desenhe um triângulo de
altura n no console usando asteriscos (*).

Dica: Utilize um laço de repetição para iterar desde 1 até n. Em cada iteração,
imprima uma linha com um número crescente de asteriscos, começando com 1 asterisco
na primeira linha e adicionando um asterisco a cada linha subsequente.
Você pode usar a função .repeat().

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function drawTriangle(any){
    for(let i=0;i <= any; i++){
        console.log('*'.repeat(i))
    }
}

drawTriangle(5)