// variaveis
var totalGanhos = 0;
var aliquotaIR = 0.0;
var descontoIR = 0.0;

// entrada
totalGanhos = 1500;

// processamento
if (totalGanhos <= 500) {
    aliquotaIR = 0;
} else {
    if ((totalGanhos > 500.01) & (totalGanhos <= 1500)) {
        aliquotaIR = 10/100;
    } else {
        if ((totalGanhos > 1500) & (totalGanhos <= 2500)) {
            aliquotaIR = 15/100;
        } else {
            aliquotaIR = 20/100;
        }
    }
}

// calcula o valor do desconto do IR
descontoIR = totalGanhos * aliquotaIR;

// saida
console.log("Total de Ganhos R$", totalGanhos.toFixed(2));
console.log("Aliquota do IR igual a", (aliquotaIR.toFixed(2) * 100), "%")
console.log("Desconto do IR igual a R$", descontoIR.toFixed(2));
