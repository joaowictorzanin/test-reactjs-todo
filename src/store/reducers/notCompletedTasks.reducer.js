//função responsavel pelo controle do estado das tarefas não finalziadas
export default function notCompletedTasksReducer(state = [] , action){
    
    switch(action.type){
        case 'ADD_NEW_TASK':
            return [...state, {
                id: Math.random(), 
                text: action.payload
            }];
            
        case 'REMOVE_TASK':
            const stateWithOutOneTask = state.filter(task => {
                return (task.id != action.payload)
            })
            return stateWithOutOneTask

        default:
            return state
    }
            
}