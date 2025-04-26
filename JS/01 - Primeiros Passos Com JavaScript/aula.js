// Variáveis e Operadores

/*
let variavel = 10;

console.log(variavel);


variavel = 20;

console.log(variavel);

*/


// Estruturas Condicionais

/*
const numero = 10;
const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

*/

/*
const numero = 3;
const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log("O número é par.");

}else {
    console.log("O número é ímpar.");
}
*/


const numero = 12;
const numeroDivisivelPor5 = (numero % 5) === 0;


if (numero === 0) {
    console.log("O número é inválido.");
}else if (numeroDivisivelPor5) {
    console.log("O número é divisível por 5.");

}else {
    console.log("O número não é divisível por 5.");
}