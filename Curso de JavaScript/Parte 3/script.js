// funcção adicionarTarefa acionada pelo evento clique no botão
function adicionarTarefa() {
    // variável mensagem recebe a string "Tarefa adicionada com sucesso!" 
    let mensagem = "Tarefa adicionada com sucesso!";    

    // variável inputTarefa recebe o que foi digitado no input do HTML
    let inputTarefa = document.getElementById("inputTarefa");
    // variável tarefa recebe o valor da string digitda no input
    let tarefa = inputTarefa.value;
    // escreve no elemento id= mensagem a string "tarefa adicionada ..."
    document.getElementById("mensagem").textContent = mensagem;

    // variável listaTarefas recebe a ul do html de id = "listaTarefas"
    let listaTarefas = document.getElementById("listaTarefas");
    // variável novaTarefa recebe elemento "li"
    let novaTarefa = document.createElement("li");
    
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";
}