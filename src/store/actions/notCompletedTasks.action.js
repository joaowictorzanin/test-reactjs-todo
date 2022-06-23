//função responsavel por adicionar uma tarefa não finalizada no array
export function addNewTask(newTask){
    return{
        type: 'ADD_NEW_TASK',
        payload: newTask
    }
}

//função responsavel por remover uma tarefa não finalizada no array
export function removeTask(id){
    return{
        type: 'REMOVE_TASK',
        payload: id
    }
}
