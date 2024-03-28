/*
Ler o ano de fabricação e o valor de um produto, calcular e apresentar o valor de desconto possível. 
se o valor do produto for maior ou igual a 1000 
	entao

	 se ano de fabricação for maior que 2000 
		entao
			um desconto de 25% deverá ser aplicado quando 
	 senao 
		o desconto deverá ser igual a 20%. 
	fim-se
	
	
	senao
		deverá ser aplicado um desconto de 10% sobre esse valor.
fim-se
*/

// declaracao variaveis
const taxaDesconto20 = 0.20;
const taxaDesconto10 = 0.10;
const taxaDesconto25 = 0.25;
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
// se valor do produto for maior que 1000
if (valorProduto > 1000) {
     
} else {
    desconto = valorProduto * taxaDesconto10;
}

// saida
console.log("Valor do Desconto: R$", desconto);