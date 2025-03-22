// Estrutura de Decisão 
// Switch/Case/Break/Default

let fruta = "pera";

switch (fruta) {
    case "laranja":
        console.log("Suco de laranja");
        break;

    case "banana":
    case "morango":
        console.log("Vitamina");
        break;

    case "maça":
        console.log("Suco de maçã");   
        break;

    default:
        console.log("Suco genérico");
        break;

}