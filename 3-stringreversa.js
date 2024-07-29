/*
Crie uma função chamada reverseString que aceite uma string como parâmetro
e retorne a string invertida. Por exemplo, se a entrada for "hello", a
função deve retornar "olleh".

Dica: Para inverter uma string, você pode usar os métodos split('')
para dividir a string em um array de caracteres, reverse() para
inverter o array e join('') para juntar os caracteres de volta em uma string.

Programa desenvolvido por:
 - Wanderlei
 - Aluno 2
 - Aluno 3
 - Aluno 4
 referência= https://www.freecodecamp.org/portuguese/news/tres-maneiras-de-inverter-uma-string-em-javascript/
*/


function reverseString(any){
    return any.split("").reverse().join("")
}

console.log(reverseString('Hello'))
