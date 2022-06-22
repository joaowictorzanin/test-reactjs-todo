import { PencilLine, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Content } from './Content/Content'



import styles from './Task.module.css'

export function Task({content, completeOrNot, setStyle, onDeleteTask, setNewContentInArray}){
    const [toggle, setToggle] = useState(() => {return setStyle == 'finished' ? false : true})
    const [changeContent, setChangeContent] = useState(false)
    const [onContent, setOnContent] = useState(content)

    function handleOnCheck(){
        setToggle(!toggle)
        completeOrNot(toggle, onContent)
    }

    function handleDeleteTask(){
        onDeleteTask(toggle, onContent)
    }

    function handleChangeContent(){
        setChangeContent(true)
    }

    function onChangeContent(newContent){
        setChangeContent(false)
        setNewContentInArray(onContent, newContent, toggle)
        setOnContent(newContent)
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
                <Content 
                    toggle={toggle}
                    content={content}
                    onChange={changeContent}
                    onChangeContent={onChangeContent}
                />
                
            </form>

            <div className={styles.buttons}>
                <button 
                    onClick={handleChangeContent} 
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