
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
        mensagem.textContent = mensagemErro;
    } 
    else{
        // mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso;

        tarefas.push(tarefa)
        renderizarTarefas()
    }

    // limpa o input do usuário    
    inputTarefa.value = "";
}

function renderizarTarefas(){
    // cria novo item (li) e insere da lista (ul)
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";    

    let i = 0   // iterador
    for (i; i < tarefas.length; i++ ){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];
        
        let botaoRemover = document.createElement("button");
        botaoRemover.className = "remover";
        botaoRemover.textContent = "Remover"; 
        botaoRemover.onclick = () => removerTarefa() =>

        novaTarefa.appendChild(botaoRemover);
        listaTarefas.appendChild(novaTarefa);    
    }

}
function removerTarefa(){
    
}