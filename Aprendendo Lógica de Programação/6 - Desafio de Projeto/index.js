// Classificador de Nível de Herói

// Desafio DIO - Lógica de Programação

/*
// Armazenar nome e quantidade de experiência (XP) do herói
let nomeHeroi = "Super Coder";
let xpHeroi = 0;
let nivelHeroi;

// Estrutura de decisão para determinar o nível com base na XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}  

// Exibir a mensagem com o nome e nível do herói

console.log(`O herói ${nomeHeroi} é do nível ${nivelHeroi}.`);
*/


// Versão com entrada do usuário (descomente para usar)

// Para usar entrada de usuário, você precisaria do módulo 'readline' ou 'prompt-sync'
// Exemplo usando prompt-sync (necessário instalar: npm install prompt-sync)
const prompt = require('prompt-sync')();

let nomeHeroi = prompt("Digite o nome do herói: ");
let xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói: "));
let nivelHeroi;

// Estrutura de decisão para determinar o nível com base na XP
if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
