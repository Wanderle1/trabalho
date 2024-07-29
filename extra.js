/*
Este é um arquivo com desafios extras. Eles são mais difíceis e vão exigir mais pesquisa.
Se você não conseguir fazer todos, não tem problema, se concentre nos exercícios do 1 ao 12.

1. Crie uma função chamada intersection que aceite dois arrays e retorne um novo array contendo
apenas os elementos que estão presentes em ambos os arrays.

Dica: Utilize o método filter para encontrar os elementos comuns. Utilize o método
includes para verificar se um elemento está presente no outro array.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
 referência= https://stackoverflow.com/questions/54723997/draw-a-triangle-in-numbers-javascript
*/
function intersection(){
    let primeiro= [1,2,3,4,5]
    let segundo= [3,4,5,6,7,8]

    return primeiro.filter(number => segundo.includes(number))
}

console.log(intersection())

/*
2. Crie uma função chamada drawEvenNumberTriangle que aceite um número n, use a função
getEvenNumbers para gerar os primeiros n números pares e, em seguida, use esses números
para desenhar um triângulo no console.

Dica: Primeiro, crie a função getEvenNumbers que retorna os primeiros n números pares.
Use um laço para iterar desde 1 até n e, em cada iteração, imprima os primeiros i
números pares. Utilize a função getEvenNumbers para obter os números pares.
*/

function getEvenNumbers(any){
    let vetor= []
    for(let i=0; i < any; i++){
        vetor.push(i * 2)
    }
    return vetor
}
function drawEvenNumberTriangle(any){
    let num = getEvenNumbers(any)
    let u= 0
    for(let i= 1; i <= any; i++){
    let vetor = ""
    for(let y=0; y < i; y++){
        if(u < num.length){
            vetor += num[u]
            u++
        }
    }
    let piramide= vetor.trim()
    console.log(piramide)
    }
}

drawEvenNumberTriangle(50)