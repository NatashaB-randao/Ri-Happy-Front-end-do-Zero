// Invocando Função dentro de Outra Função

function escrevaMeuNome(nome) {
    return ("Meu nome é " + nome);
}


function verificaIdade(idade){
    if (idade >= 18) {
        console.log(escrevaMeuNome('Lucas') + ". Sou maior de idade.");
    } else {
        console.log(escrevaMeuNome('Ana') + ". Sou menor de idade.");
    }
}

// Chama a função verificaIdade com o parâmetro 20
verificaIdade(20);  
// Chama a função verificaIdade com o parâmetro 16
verificaIdade(16);