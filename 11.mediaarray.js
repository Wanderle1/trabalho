/*
Crie uma função chamada averageArray que aceite um array de números e retorne a média
dos números. Para esta função vocês devem pesquisar e entender como o método reduce
funciona.

Dica: Some todos os elementos do array e divida pela quantidade de elementos. Utilize o
método reduce para somar os elementos do array.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
 referência= https://www.youtube.com/watch?v=dckGT8Rts-4
*/

function averageArray(any){
    if(any == 0){
        return 0
    }
    let soma= any.reduce((valo1, valor2) => valo1 + valor2, 0)
    let media= soma / any.length
    return media
}

console.log(averageArray([4,54,65,34,56,67,70]))