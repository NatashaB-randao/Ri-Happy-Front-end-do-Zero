/* elabore um algoritmo que calcule o que deve ser pago por um produto, 
    considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela abaixo para ler qual a condição de pagamento escolhida e 
    efetuar o cálculo adequado.

    Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaPagamento = 1; // 1, 2, 3 ou 4

if (formaPagamento === 1) {
    const precoComDesconto = precoEtiqueta - (precoEtiqueta * 0.10);
    console.log("Preço a pagar: R$ " + precoComDesconto.toFixed(2));

}else if (formaPagamento === 2) {
    const precoComDesconto = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log("Preço a pagar: R$ " + precoComDesconto.toFixed(2));

}else if (formaPagamento === 3) {
    console.log("Preço a pagar: R$ " + precoEtiqueta.toFixed(2) + " em duas vezes de R$ " + (precoEtiqueta / 2).toFixed(2) + " sem juros.");

}else {
    const precoComJuros = precoEtiqueta + (precoEtiqueta * 0.10);
    console.log("Preço a pagar: R$ " + precoComJuros.toFixed(2) + " com juros de 10%.");
}