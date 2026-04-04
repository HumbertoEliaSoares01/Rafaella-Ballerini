// funcção adicionarTarefa acionada pelo evento clique no botão
function adicionarTarefa() {

    // recebe valor do input do usuário 
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()

    let mensagem = document.getElementById("mensagem")

    // Se o valor do input for vazio, então mostre uma mensagem de erro pro usuário
    if (tarefa == ""){
        // mostre uma mensagem de erro
        let mensagemErro = "Digite uma tarefa para adicionar à lista."    
        mensagem.textContent = mensagemErro
    } 
    else{
        // mensagem de tarefa adicionada com sucesso
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso;
        // cria novo item (li) e insere da lista (ul)
        const listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

    }

    // limpa o input do usuário    
    inputTarefa.value = "";

}