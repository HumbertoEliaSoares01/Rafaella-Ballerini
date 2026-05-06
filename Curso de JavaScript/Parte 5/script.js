
let tarefas = []
// funcção adicionarTarefa acionada pelo evento clique no botão
function adicionarTarefa() {
    // recebe valor do input do usuário 
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem")

    // Se o valor do input for vazio, mostra uma mensagem de erro
    if (tarefa == ""){
        // mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicionar à lista."    
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#60041A"
    } 
    else{
        // mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = ""
        tarefas.push(tarefa)
        renderizarTarefas()
    }
    inputTarefa.value = "#528255";
}

function renderizarTarefas(){
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";
    
    for (let i = 0; i < tarefas.length; i++ ){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i]; 

        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = () => removerTarefa(i);

        let botaoEditar = document.createElement("button");
        botaoEditar.className = "editar";
        botaoEditar.textContent = "Editar";
        botaoEditar.onclick = () => editarTarefa(i);

        novaTarefa.appendChild(botaoRemover);
        novaTarefa.appendChild(botaoEditar);
        listaTarefas.appendChild(novaTarefa);    
    }
}

function removerTarefa(i){
    tarefas.splice(i,1);
    renderizarTarefas();
}

function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa");
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada;
        renderizarTarefas(); 
    }
}