function transformaStatus(tarefas) {
    const novoArray = [];

    for (const tarefa of tarefas){
        if(tarefa === true) {
            novoArray.push("concluido");
        
        } else {

            novoArray.push("pendente")
        }
    }
    return novoArray;
}

console.log(transformaStatus([true, false, true, false]));