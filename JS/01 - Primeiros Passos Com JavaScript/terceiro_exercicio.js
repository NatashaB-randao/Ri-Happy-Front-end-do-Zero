/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, 
    calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:
    
    Média = (nota1 + nota2 + nota3) / 3

    Classificação:
    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média maior que 7, aprovado.
*/

const nota1 = 5.5;
const nota2 = 6.5;
const nota3 = 7.5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("A média do aluno é: " + media.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais
    console.log("O aluno está reprovado.");

}else if (media >= 5 && media <= 7) {
    console.log("A média do aluno é: " + media.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais
    console.log("O aluno está de recuperação.");

}else {
    console.log("A média do aluno é: " + media.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais
    console.log("O aluno está aprovado.");
}

