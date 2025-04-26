/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoCombustivel = 5.79; 
let gastoMedioPorKm = 10; 
let distanciaEmKm = 100;

let valorGasto = (distanciaEmKm / gastoMedioPorKm) * precoCombustivel;
console.log("O valor gasto para realizar essa viagem é de R$" + valorGasto.toFixed(2)); // toFixed(2) para limitar a 2 casas decimais
