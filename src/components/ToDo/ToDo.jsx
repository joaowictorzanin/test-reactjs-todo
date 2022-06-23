import { useState } from 'react'
import { NoTask } from '../NoTask/NoTask'
import { Task } from '../Task/Task'
import { Header } from '../Header/Header';

import styles from './ToDo.module.css'
import { useSelector } from 'react-redux';



export function ToDo(){

    const [taskStyle, setTaskStyle] = useState('all')
    const notFinishedTasks = useSelector(state => state.notCompletedTasks)
    const finishedTasks = useSelector(state => state.completedTasks)

    // função responsavel por renderizar na aba todas as tarefas
    // as tarefas não finalizadas
    function allTasksListNotCompleted(){
        if(notFinishedTasks.length == 0 && finishedTasks.length == 0 && taskStyle == 'all'){
            return (
                <NoTask 
                    Title='Você ainda não tem tarefas cadastradas.' 
                    Description='Crie Tarefas e organize seu dia!'
                /> 
           )
        } else if (notFinishedTasks.length != 0 && taskStyle == 'all'){
            return (
                notFinishedTasks.map(task => {
                    return (
                        <Task
                            id={task.id}
                            key={task.id}
                            content={task.text}
                        />
                    )
                })
            )
        }
    }

    // função responsavel por renderizar na aba todas as tarefas
    // as tarefas finalizadas
    function allTasksListCompleted(){
        if (finishedTasks.length != 0 && taskStyle == 'all'){
            return (
                finishedTasks.map(task => {
                    return(
                        <Task
                            id={task.id}
                            key={task.id}
                            content={task.text}
                            setStyle='finished'
                        />
                    )
                })
            )
        }
    }

    // função responsavel por renderizar na aba tarefas não concluidas
    // as tarefas não finalizadas
    function noCompleteTasksList(){
        if(notFinishedTasks.length == 0 && taskStyle == 'notFinished'){
            return (
                <NoTask 
                    Title='Você ainda não tem tarefas para concluir.' 
                    Description='Crie Tarefas e organize seu dia!'
                /> 
           )
        } else if (notFinishedTasks.length != 0 && taskStyle == 'notFinished'){
            return (
                notFinishedTasks.map(task => {
                    return (
                        <Task
                            id={task.id}
                            key={task.id}
                            content={task.text}
                        />
                    )
                })
            )
        }
    }

    // função responsavel por renderizar na aba tarefas finalizadas
    // as tarefas finalizadas
    function completedTasks(){
        if(finishedTasks.length == 0 && taskStyle == 'finished'){
            return(
                <NoTask 
                    Title='Você ainda não concluiu nenhuma tarefas.' 
                    Description='Suas tarefas finalisadas irão aparecer aqui!'
                /> 
            )
        }else if (finishedTasks.length != 0 && taskStyle == 'finished'){
            return(
                finishedTasks.map(task => {
                    return(
                        <Task
                            id={task.id}
                            key={task.id}
                            content={task.text}
                            setStyle='finished'
                        />
                    )
                })
            )
        }

    } 

    return(
        <div>
            <Header/>
            <div className={styles.tasksLists}> 
                <header className={styles.header}>
                    <button 
                        onClick={() => setTaskStyle('all')} 
                        className={taskStyle != 'all' ? styles.notSelected : styles.selected }>
                        Todas as tarefas {notFinishedTasks.length + finishedTasks.length}
                    </button>
                    <button 
                        onClick={() => setTaskStyle('notFinished')} 
                        className={taskStyle != 'notFinished' ? styles.notSelected : styles.selected }>
                        Tarefas não concluidas {notFinishedTasks.length}
                    </button>
                    <button 
                        onClick={() => setTaskStyle('finished')} 
                        className={taskStyle != 'finished' ? styles.notSelected : styles.selected }>
                        Tarefas concluidas {finishedTasks.length}
                    </button>
                </header>
                <main className={styles.main}>
                    {allTasksListNotCompleted()}
                    {allTasksListCompleted()}
                    {noCompleteTasksList()}
                    {completedTasks()}
                </main>
            </div>
        </div>
    )   
}


