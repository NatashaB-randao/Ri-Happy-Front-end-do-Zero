// Exercício- Criando a Classe Carro

/*
Crie uma Classe para representar carros;
    Os carros possuem uma marca, uma cor e um gasto médio de
    combustível por km rodado.
    Crie um método que dado um valor de combustível e uma distância
    seja capaz de calcular o valor do combustível para realizar
    este percurso. */

class Carro {
    // Atributos
    marca;
    cor;
    gastoMedioPorKm;

    // Método construtor
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedio;
    }

    // Método para calcular o custo do percurso
    calcularCusto(distancia, precoCombustivel) {
        const custo = (distancia * this.gastoMedioPorKm) * precoCombustivel;
        return custo;
    }

}

// Instanciando um objeto da classe Carro
const uno = new Carro("Fiat", "preto", 1 / 12);
uno.calcularCusto(70, 5);
console.log(`O custo do percurso é: R$ ${uno.calcularCusto(70, 5).toFixed(2)}`);