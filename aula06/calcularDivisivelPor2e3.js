// declarar variaveis
let numeroUm;
let numeroDois;
let numeroTres;
let numeroQuatro;
let resultadoDivisaoPor2;
let resultadoDivisaoPor3;

// iniciar variaveis
numeroUm = 0; 
numeroDois = 0;
numeroTres = 0;
numeroQuatro = 0;
restoDivisaoPor2 = 0;
restoDivisaoPor3 = 0;

// entrada de dados
numeroUm = 12;
numeroDois = 5;
numeroTres = 4;
numeroQuatro = 6;

/* processamento */
// verificar se o numeroUm é divisivel por 2 e 3
restoDivisaoPor2 = numeroUm % 2;
restoDivisaoPor3 = numeroUm % 3;

if ((restoDivisaoPor2 == 0) & (restoDivisaoPor3 == 0)) {
        console.log("NumeroUm [", numeroUm, "] é divísivel por 2 e 3");
}

// verificar se o numeroDois é divisivel por 2 e 3]
restoDivisaoPor2 = numeroDois % 2;
restoDivisaoPor3 = numeroDois % 3;

if (restoDivisaoPor2 == 0) {
    if (restoDivisaoPor3 == 0) {
        console.log("NumeroDois [", numeroDois, "] é divísivel por 2 e 3");
    }
}

// verificar se o numeroTres é divisivel por 2 e 3
restoDivisaoPor2 = numeroTres % 2;
restoDivisaoPor3 = numeroTres % 3;

if (restoDivisaoPor2 == 0) {
    if (restoDivisaoPor3 == 0) {
        console.log("NumeroTres [", numeroTres, "] é divísivel por 2 e 3");
    }
}

// verificar se o numeroQuatro é divisivel por 2 e 3
restoDivisaoPor2 = numeroQuatro % 2;
restoDivisaoPor3 = numeroQuatro % 3;

if (restoDivisaoPor2 == 0) {
    if (restoDivisaoPor3 == 0) {
        console.log("NumeroQuatro [", numeroQuatro, "] é divísivel por 2 e 3");
    }
}

// saida