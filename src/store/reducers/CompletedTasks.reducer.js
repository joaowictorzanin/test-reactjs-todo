//função responsavel pelo controle do estado das tarefas finalziadas
export default function completedTasksReducer(state = [], action){

    switch(action.type){
        case 'ADD_COMPLETED_TASK':
            return [...state, {
                id: Math.random(), 
                text: action.payload
            }];

        case 'REMOVE_TASK_COMPLETED':
            const stateWithOutOneTask = state.filter(task => {
                return (task.id != action.payload)
            })
            return stateWithOutOneTask
            
        default: 
            return state
    }
}