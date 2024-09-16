function calcularMedia() {
    const ac1 = parseFloat(document.getElementById("ac1").value);
    const ac2 = parseFloat(document.getElementById("ac2").value);
    const ag = parseFloat(document.getElementById("ag").value);
    const af = parseFloat(document.getElementById("af").value);

    if (isNaN(ac1) || isNaN(ac2) || isNaN(ag) || isNaN(af)) {
        document.getElementById("resultado").textContent = "Por favor, insira todas as notas.";
        return;
    }

    const mediaFinal = (ac1 * 0.15) + (ac2 * 0.30) + (ag * 0.10) + (af * 0.45);

    if (mediaFinal >= 5) {
        document.getElementById("resultado").textContent = `Aprovado! Média Final: ${mediaFinal.toFixed(2)}`;
    } else {
        document.getElementById("resultado").textContent = `Reprovado! Média Final: ${mediaFinal.toFixed(2)}`;
    }
}
