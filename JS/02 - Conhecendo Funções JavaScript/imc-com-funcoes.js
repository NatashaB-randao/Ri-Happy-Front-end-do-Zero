
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal.";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso.";
    } else if (imc >= 30 && imc < 40) {
        return "Obesidade grau I.";
    } else {
        return "Obesidade Grave.";
    }
}

function main () {
    const peso = 70; // em kg
    const altura = 1.75; // em metros

    const imc = calcularIMC(peso, altura); // Chama a função calcularIMC com os parâmetros peso e altura
    console.log(classificarIMC(imc)); // Chama a função classificarIMC com o resultado do IMC
    console.log("Seu IMC é: " + imc.toFixed(2)); // Mostra o resultado do IMC com 2 casas decimais


}


main(); // Chama a função main para executar o código