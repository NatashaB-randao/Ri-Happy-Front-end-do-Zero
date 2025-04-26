/* Cálculo do IMC

    Fórmula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que calcule o IMC de uma pessoa e mostre a sua classificação de acordo com a tabela abaixo:
    
    IMC em adultos. Condição:
    Abaixo de 18.5: Abaixo do peso;
    Entre 18.5 e 25: Peso normal;
    Entre 25 e 30: Acima do peso;
    Entre 30 e 40: Obesidade grau I;
    Acima de 40: Obesidade Grave;
*/

const peso = 70; // em kg
const altura = 1.75; // em metros

const imc = peso / (altura * altura);
console.log("IMC: " + imc.toFixed(2)); // Arredondando para duas casas decimais

if (imc < 18.5) {
    console.log("Abaixo do peso.");

}else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal.");

}else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso.");  

}else if (imc >= 30 && imc < 40) {
    console.log("Obesidade grau I.");

}else {
    console.log("Obesidade Grave.");
}