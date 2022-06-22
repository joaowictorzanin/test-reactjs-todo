import { useEffect, useState } from 'react'
import { NoTask } from '../NoTask/NoTask'
import { Task } from '../Task/Task'
import { Header } from '../Header/Header';

import styles from './ToDo.module.css'

export function ToDo(){
    const localStorageNoCompleteArray = JSON.parse(localStorage.getItem('noCompleteTasks'))
    const localStorageCompleteArray = JSON.parse(localStorage.getItem('completeTasks'))
    const [taskStyle, setTaskStyle] = useState('all')
    const [noCompleteTasks, setNoCompleteTasks] = useState(localStorageNoCompleteArray == null ? [] : localStorageNoCompleteArray)
    const [completeTasks, setCompleteTasks] = useState(localStorageCompleteArray == null ? [] : localStorageCompleteArray)

    useEffect(() => {
        localStorage.setItem('noCompleteTasks', JSON.stringify(noCompleteTasks))
    }, [noCompleteTasks])

    useEffect(() => {
        localStorage.setItem('completeTasks', JSON.stringify(completeTasks))
    }, [completeTasks])

    function createTask(task){
        setNoCompleteTasks([...noCompleteTasks, task])
    }

    function allTasksListNotCompleted(){
        if(noCompleteTasks.length == 0 && completeTasks.length == 0 && taskStyle == 'all'){
            return (
                <NoTask 
                    Title='Você ainda não tem tarefas cadastradas.' 
                    Description='Crie Tarefas e organize seu dia!'
                /> 
           )
        } else if (noCompleteTasks.length != 0 && taskStyle == 'all'){
            return (
                noCompleteTasks.map(task => {
                    return (
                        <Task
                            key={task}
                            content={task}
                            setStyle={taskStyle}
                            onDeleteTask={onDeleteTask}
                            completeOrNot={completeOrNot}
                            setNewContentInArray={setNewContentInArray}
                        />
                    )
                })
            )
        }
    }

    function allTasksListCompleted(){
        if (completeTasks.length != 0 && taskStyle == 'all'){
            return (
                completeTasks.map(task => {
                    return(
                        <Task
                            key={task}
                            content={task}
                            setStyle='finished'
                            onDeleteTask={onDeleteTask}
                            completeOrNot={completeOrNot}
                            setNewContentInArray={setNewContentInArray}
                        />
                    )
                })
            )
        }
    }

    function noCompleteTasksList(){
        if(noCompleteTasks.length == 0 && taskStyle == 'notFinished'){
            return (
                <NoTask 
                    Title='Você ainda não tem tarefas para concluir.' 
                    Description='Crie Tarefas e organize seu dia!'
                /> 
           )
        } else if (noCompleteTasks.length != 0 && taskStyle == 'notFinished'){
            return (
                noCompleteTasks.map(task => {
                    return (
                        <Task
                            key={task}
                            content={task}
                            setStyle={taskStyle}
                            onDeleteTask={onDeleteTask}
                            completeOrNot={completeOrNot}
                            setNewContentInArray={setNewContentInArray}
                        />
                    )
                })
            )
        }
    }

    function completedTasks(){
        if(completeTasks.length == 0 && taskStyle == 'finished'){
            return(
                <NoTask 
                            Title='Você ainda não concluiu nenhuma tarefas.' 
                            Description='Suas tarefas finalisadas irão aparecer aqui!'
                        /> 
            )
        }else if (completeTasks.length != 0 && taskStyle == 'finished'){
            return(
                completeTasks.map(task => {
                    return(
                        <Task
                            key={task}
                            content={task}
                            setStyle='finished'
                            onDeleteTask={onDeleteTask}
                            completeOrNot={completeOrNot}
                            setNewContentInArray={setNewContentInArray}
                        />
                    )
                })
            )
        }

    }
    
    function completeOrNot(toggle, content){
        if(toggle == true){
            const tasksNotCompleted = noCompleteTasks.filter(task => {
                return ( task != content)
            })
            setNoCompleteTasks(tasksNotCompleted)
            setCompleteTasks([...completeTasks, content])
        }
        if(toggle == false){
            const tasksCompleted = completeTasks.filter(task => {
                return ( task != content)
            })
            setCompleteTasks(tasksCompleted)
            setNoCompleteTasks([...noCompleteTasks, content])
        }
    }

    function onDeleteTask(toggle, content){
        if(toggle == true){
            const tasksNotCompleted = noCompleteTasks.filter(task => {
                return ( task != content)
            })
            setNoCompleteTasks(tasksNotCompleted)
        }
        if(toggle == false){
            const tasksCompleted = completeTasks.filter(task => {
                return ( task != content)
            })
            setCompleteTasks(tasksCompleted)
        }
    }

    function setNewContentInArray(oldContent, newContent, toggle){
        if(toggle == true){
            const changingContent = noCompleteTasks.filter(task => {
                return ( task != oldContent)
            })
            setNoCompleteTasks([...changingContent, newContent])
            
        }
        if(toggle == false){
            const changingContent = completeTasks.filter(task => {
                return ( task != oldContent)
            })
            setCompleteTasks([...changingContent, newContent])
            
        }
        
    }


    return(
        <div>
            <Header createTask={createTask}/>
            <div className={styles.tasksLists}> 
                <header className={styles.header}>
                    <button 
                        onClick={() => setTaskStyle('all')} 
                        className={taskStyle != 'all' ? styles.notSelected : styles.selected }>
                        Todas as tarefas {noCompleteTasks.length + completeTasks.length}
                    </button>
                    <button 
                        onClick={() => setTaskStyle('notFinished')} 
                        className={taskStyle != 'notFinished' ? styles.notSelected : styles.selected }>
                        Tarefas não concluidas {noCompleteTasks.length}
                    </button>
                    <button 
                        onClick={() => setTaskStyle('finished')} 
                        className={taskStyle != 'finished' ? styles.notSelected : styles.selected }>
                        Tarefas concluidas {completeTasks.length}
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