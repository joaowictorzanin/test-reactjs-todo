import { Check, PencilLine, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, addNewTask} from '../../store/actions/notCompletedTasks.action'
import { addTaskCompleted, removeTaskCompleted } from '../../store/actions/CompletedTasks.action'

import styles from './Task.module.css'

export function Task({content, id, setStyle}){
    const [toggle, setToggle] = useState(() => {return setStyle == 'finished' ? false : true})
    const [changeContent, setChangeContent] = useState(false)
    const [newContent, setNewContent] = useState(content)
    const dispatch = useDispatch()

    //função responsavel pela renderização do conteudo 
    //ou do input para alterar a tarefa
    function mainContent(){
        if ( changeContent == false ){
            return(
                <p className={toggle == false && setStyle == 'finished' ? styles.taskComplete : styles.taskIncomplete}>{content}</p>
            )
        } else {
            return(
                <div className={styles.contentContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        defaultValue={newContent}
                        onChange={e => {setNewContent(e.target.value)}}
                    />
                    <button
                        className={styles.setButton}
                        onClick={handleSetNewContent}
                    >
                        <Check/>
                    </button>
                </div>
            )
        }
    }

    //função responsavel por alterar o conteudo da tarefa
    function handleSetNewContent(event){
        event.preventDefault()
        dispatch(removeTask(id))
        dispatch(addNewTask(newContent))
        setChangeContent(!changeContent)
    }

    //função responsavelpor finalizar ou não a tarefa
    function handleOnCheck(){
        if(toggle == true){
            dispatch(addTaskCompleted(content))
            dispatch(removeTask(id))
            setToggle(!toggle)
        } else{
            dispatch(addNewTask(content))
            dispatch(removeTaskCompleted(id))
            setToggle(!toggle)
        }
    }

    //função responsavel por deletar a tarefa
    function handleDeleteTask(){
        if(toggle == true){
            dispatch(removeTask(id))
        } else{
            dispatch(removeTaskCompleted(id))
        }

    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <button 
                    className={toggle == false && setStyle == 'finished' ? styles.buttonComplete: styles.buttonIncomplete} 
                    type='button' 
                    onClick={handleOnCheck}
                >
                </button>
                {mainContent()}
                
            </form>

            <div className={styles.buttons}>
                <button 
                    onClick={() => setChangeContent(!changeContent)} 
                    disabled={toggle == false ? true : false }
                >
                    <PencilLine 
                        size={16}
                        className={styles.pencilLine}
                    />
                </button>
                <button onClick={handleDeleteTask}>
                    <Trash 
                        size={16}
                        className={styles.trash}
                    />
                </button>
            </div> 
        </div>
    )
}