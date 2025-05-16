
function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto / 100)));
}

function aplicarJuros(preco, juros) {
    return (preco + (preco * (juros / 100)));
}

const precoEtiqueta = 100;
const formaPagamento = 1; // 1, 2, 3 ou 4




if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));

}else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));

}else if (formaPagamento === 3) {
    console.log("Preço a pagar: R$ " + precoEtiqueta.toFixed(2) + " em duas vezes de R$ " + (precoEtiqueta / 2).toFixed(2) + " sem juros.");

}else {
    const precoComJuros = aplicarJuros(precoEtiqueta, 10);
    console.log("Preço a pagar: R$ " + precoComJuros.toFixed(2) + " com juros de 10%.");
}