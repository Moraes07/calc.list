function calcularApolice() {
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const idade = parseInt(document.getElementById("idade").value);
    const valorAutomovel = parseFloat(document.getElementById("valorAutomovel").value);
    let valorApolice = 0;

    if (isNaN(idade) || isNaN(valorAutomovel)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    if (sexo === "masculino") {
        if (idade <= 25) {
            valorApolice = valorAutomovel * 0.15; 
        } else {
            valorApolice = valorAutomovel * 0.10; 
        }
    } else if (sexo === "feminino") {
        valorApolice = valorAutomovel * 0.08; 
    }

    document.getElementById("resultado").textContent = valorApolice.toFixed(2);
}
