// declarar variaveis
let numeroUm;
let numeroDois;
let numeroTres;
let numeroQuatro;
let mediaPonderada;
let somaPesos;

const peso1 = 1;
const peso2 = 2;
const peso3 = 3;
const peso4 = 4;

// iniciar variaveis
numeroUm = 0;
numeroDois = 0;
numeroTres = 0;
numeroQuatro = 0;
mediaPonderada = 0;
somaPesos = 0;

// coleta ou entrada de dados
numeroUm = 4;
numeroDois = 7;
numeroTres = 3;
numeroQuatro = 25;

// processamento
somaPesos = peso1 + peso2 + peso3 + peso4;
mediaPonderada = ((numeroUm * peso1) + (numeroDois * peso2) + (numeroTres * peso3) + (numeroQuatro * peso4)) 
                  / (somaPesos);

// saida
console.log(mediaPonderada);
