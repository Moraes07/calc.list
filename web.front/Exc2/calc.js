function calcular() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operacao = document.getElementById("operacao").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").value = "Insira números válidos";
        return;
    }

    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            if (num2 === 0) {
                document.getElementById("resultado").value = "Divisão por zero!";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida";
    }

    document.getElementById("resultado").value = resultado;
}
