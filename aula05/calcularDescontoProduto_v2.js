// declaracao variaveis
const taxaDesconto20 = 0.20;
const taxaDesconto10 = 0.10;
let anoFabricacao;
let valorProduto;
let desconto;

// iniciar variaveis
anoFabricacao = 0;
valorProduto = 0;
desconto = 0;

// entrada de dados
anoFabricacao = 1978;
valorProduto = 10000.00;

// processamento
if (valorProduto > 1000) 
{
    desconto = valorProduto * taxaDesconto20;
} 
else 
{
    desconto = valorProduto * taxaDesconto10;
}

// saida
console.log("Valor do Desconto: R$", desconto);