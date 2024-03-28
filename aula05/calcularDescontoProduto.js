// declaracao variaveis
const taxaDesconto = 0.20;
let anoFabricacao;
let valorProduto;
let desconto;

// iniciar variaveis
anoFabricacao = 0;
valorProduto = 0;
desconto = 0;

// entrada de dados
anoFabricacao = 1978;
valorProduto = 1000.00;

// processamento
if (valorProduto > 1000) {
    desconto = valorProduto * taxaDesconto;
}

// saida
console.log("Valor do Desconto: R$", desconto);