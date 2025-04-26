/* Exercício - Incremento do Cálculo de Valor de Uma Viagem

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no carro (gasolina ou etanol);
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

let precoEtanol = 4.99;
let precoGasolina = 5.79;   
let tipoCombustivel = 'etanol'; 
let KmPorLitro = 10;
let distanciaEmKm = 100;

let litrosConsumidos = (distanciaEmKm / KmPorLitro);

if (tipoCombustivel === 'etanol') {
    console.log("O tipo de combustível é etanol.");
    let valorGasto = (litrosConsumidos * precoEtanol); 

    console.log("O valor gasto para realizar essa viagem é de R$" + valorGasto.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais

}else {
    console.log("O tipo de combustível é gasolina.");
    let valorGasto = (litrosConsumidos * precoGasolina);
    console.log("O valor gasto para realizar essa viagem é de R$" + valorGasto.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais
}
