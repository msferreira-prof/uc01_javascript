/* insira seu código aqui */
// declarar variaveis
let idade;
let idadeMedia;
let somaIdade;
let altura;
let alturaMedia;
let somaAltura;
let qtdIdade;
let qtdAltura;

// iniciar variavies
idade = 0;
idadeMedia = 0;
altura = 0;
alturaMedia = 0;
qtdIdade = 0;
qtdAltura = 0;
somaIdade = 0;
somaAltura = 0;

// entrada de dados
idade = '21'; 
idade = parseInt(idade);

altura = "1.69";
altura = parseFloat(altura);

// processamento
// verifica a idade do aluno
if (altura < 1.70) {
    qtdIdade = qtdIdade + 1; // qtdIdade += 1 ou qtdIdade++
    somaIdade = somaIdade + idade; // somaIdade += idade
}

// verifica a altura do aluno
if (idade > 20) {
    qtdAltura = qtdAltura + 1;
    somaAltura = somaAltura + altura;
}

// calcular medias de idade e de altura
idadeMedia = somaIdade / qtdIdade;
if (isNaN(idadeMedia)) {
    idadeMedia = 0;
}

if (qtdAltura > 0) {
    alturaMedia = somaAltura / qtdAltura;
} else {
    alturaMedia = 0;
}

// saida de dados
console.log("A idade média dos alunos menores que 1.70m é " + idadeMedia.toFixed(2));
console.log("A altura média dos alunos com mais de 20 anos é " + alturaMedia.toFixed(2));
