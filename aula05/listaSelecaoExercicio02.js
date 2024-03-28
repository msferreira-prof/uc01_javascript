// declarar variaveis
let diaDaSemana;
let mensagemSaida;
let dia;

// iniciar variaveis
diaDaSemana = "";
mensagemSaida = "";
dia = 0;

// entrada 
diaDaSemana = "Terca";
dia = 3;

// processamento
// if ( diaDaSemana == "Sabado"  ||  diaDaSemana == "Domingo" ) {
if ( (diaDaSemana == "Sabado") || (diaDaSemana == "Domingo") ) {
    mensagemSaida = "    Casa     ";
} else {
    mensagemSaida = "     Trabalho    ";
}

// saida
console.log(mensagemSaida);
console.log("Tamanho da mensagem de Saída:", mensagemSaida.length, "caracteres");
console.log("Mensagem em letras maiúsculas:", mensagemSaida.toUpperCase().concat(". Muito bom!"));
console.log("Mensagem em letras minúsculas:", mensagemSaida.toLowerCase().concat(". Muito bom!"));
console.log("Caracter na posição 1 da mensagem:", mensagemSaida.charAt(1));
console.log("Caracteres entre posicoes 3 e 5:", mensagemSaida.substring(3, 5));
console.log("Caracteres 4 posicoes a partir da 1a posicao:", "Trabalho".substr(2, 5));
console.log(mensagemSaida.slice());
console.log(dia.toString());
console.log("Removendo brancos da String:", mensagemSaida.trim().concat(". Muito bom!"));
console.log("Qual a posição do caracter 'a' na mensagem:", mensagemSaida.indexOf('a'));
console.log("Qual a última posição do caracter 'a' na mensagem:", mensagemSaida.lastIndexOf('a'));

if (mensagemSaida.indexOf('a') >= 0) {
    console.log("Caracter encontrado");
} else {
    console.log("Caracter não encontrado");
}