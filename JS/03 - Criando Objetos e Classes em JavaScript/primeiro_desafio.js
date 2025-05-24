// Exercício- Criando a Classe Carro

/*
Crie uma Classe para representar carros;
    Os carros possuem uma marca, uma cor e um gasto médio de
    combustível por km rodado.
    Crie um método que dado um valor de combustível e uma distância
    seja capaz de calcular o valor do combustível para realizar
    este percurso. */

class Carro {   
    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedio;
    }

    calcularCusto(distancia, precoCombustivel) {
        const custo = (distancia / this.gastoMedioPorKm) * precoCombustivel;
        return custo;
    }
}
    
