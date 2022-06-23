//função responsavel por adicionar uma tarefa finalizada no array
export function addTaskCompleted(content){
    return {
        type: 'ADD_COMPLETED_TASK',
        payload: content
    }
}

//função responsavel por remover uma tarefa finalizada no array
export function removeTaskCompleted(id){
    return{
        type: 'REMOVE_TASK_COMPLETED',
        payload: id
    }
}