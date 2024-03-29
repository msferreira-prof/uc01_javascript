function showResultado(textoResultado) {
    alertaRow = document.querySelector("#idAlertRow");
    alerta = document.querySelector("#idAlerta");
    alerta.appendChild(document.createTextNode(textoResultado));
    alertaRow.style.display = 'block';
}

function escondeResultado() {
    alerta = document.querySelector("#idAlertRow");
    alerta.style.display = 'none';
}

btn = document.querySelector("#idCard");
btn.addEventListener('click', function () {

    // deixar aqui
    escondeResultado();

    // meu codigo javascript
    // declarar variaveis
    let numeroUm;
    let numeroDois;
    let numeroTres;
    let numeroQuatro;
    let mediaPonderada;

    // iniciar variaveis
    numeroUm = 0;
    numeroDois = 0;
    numeroTres = 0;
    numeroQuatro = 0;
    mediaPonderada = 0;

    // coleta ou entrada de dados
    numeroUm = Number.parseInt(prompt("Informe o primeiro número"));
    numeroDois = Number.parseInt(prompt("Informe o segundo número"));
    numeroTres = Number.parseInt(prompt("Informe o terceiro número"));
    numeroQuatro = Number.parseInt(prompt("Informe o quarto número"));

    // processamento
    mediaPonderada = ((numeroUm * 1) + (numeroDois * 2) + (numeroTres * 3) + (numeroQuatro * 4)) / (1 + 2 + 3 + 4);

    // fim do meu codigo javascript

    // deixar aqui
    alert(mediaPonderada);
    showResultado(mediaPonderada);
    console.log(mediaPonderada);
});
