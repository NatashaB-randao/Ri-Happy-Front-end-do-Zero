
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


const peso = 70; // em kg
const altura = 1.75; // em metros

const imc = calcularIMC;
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