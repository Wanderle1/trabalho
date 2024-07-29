/*
Crie uma função chamada isPrime que aceite um número e retorne true se o
número for primo e false caso contrário.

Dica: Um número primo é um número maior que 1 que não tem divisores positivos
além de 1 e ele mesmo. Para verificar se um número é primo, você pode testar
se ele é divisível por qualquer número entre 2 e a raiz quadrada do número.
Você pode usar a função sqrt() da biblioteca Math para calcular isso.

Programa desenvolvido por:
 - Wanderlei
 - Aluno 2
 - Aluno 3
 - Aluno 4
 referência= https://stackoverflow.com/questions/40200089/check-number-prime-in-javascript
*/
function isPrime(any){
    if (any <= 1) 
        return false
    if (any == 2) 
        return true
    if (any % 2 == 0) 
        return false
    for (let i = 3; i <= Math.sqrt(any); i ++) {
        if (any % i == 0) 
            return false
      }
     return true
}

console.log(isPrime(2))
