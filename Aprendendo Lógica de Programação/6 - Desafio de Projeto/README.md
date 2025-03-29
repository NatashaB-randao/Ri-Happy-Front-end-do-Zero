# Classificador de Nível de Herói

## Descrição
Este projeto consiste em um classificador de nível de herói, onde, com base na quantidade de XP (experiência) de um herói, ele será categorizado em diferentes classes. O desafio faz parte da plataforma DIO e tem como objetivo prático reforçar conceitos fundamentais de lógica de programação.

## Tecnologias Utilizadas
- JavaScript
- Node.js (para execução em ambiente de console)

## Funcionalidades
- Solicita ao usuário o nome do herói e sua quantidade de XP.
- Compara a XP informada com a tabela de classificação.
- Exibe a classificação correspondente do herói.

## Classificação do Herói
| XP do Herói | Nível |
|-------------|--------|
| Menor que 1000 | Ferro |
| 1001 a 2000 | Bronze |
| 2001 a 5000 | Prata |
| 5001 a 7000 | Ouro |
| 7001 a 8000 | Platina |
| 8001 a 9000 | Ascendente |
| 9001 a 10000 | Imortal |
| Maior que 10000 | Radiante |

## Como Executar o Projeto

1. Clone este repositório:
```sh
 git clone https://github.com/seu-usuario/classificador-heroi.git
```

2. Acesse a pasta do projeto:
```sh
 cd classificador-heroi
```

3. Instale o `prompt-sync` para interação com o usuário:
```sh
 npm install prompt-sync
```

4. Execute o arquivo JavaScript:
```sh
 node classificador.js
```

5. Insira o nome do herói e a quantidade de XP conforme solicitado.

## Exemplo de Saída
```
Digite o nome do herói: Super Coder
Digite a quantidade de XP do herói: 7500
O Herói de nome Super Coder está no nível de Platina
```

## Contribuição
Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades! Basta fazer um fork do repositório, criar uma branch e enviar um pull request.



