import { Check } from 'phosphor-react'
import { useState } from 'react'
import styles from './Content.module.css'

export function Content({toggle, content, onChange, onChangeContent}){
    const [newContent, setNewContent] = useState(content)

    function handleSetNewContent(event){
        event.preventDefault()
        onChangeContent(newContent)

    }

    function changeOrNot(){
        if (onChange == false){
            return(
                <p >{newContent}</p>
            )
        } else {
            return(
                <div className={styles.container}>
                    <input
                        className={styles.input}
                        type="text"
                        defaultValue={newContent}
                        onChange={e => {setNewContent(e.target.value)}}
                    />
                    <button
                        className={styles.button}
                        onClick={handleSetNewContent}
                    >
                        <Check/>
                    </button>
                </div>
            )
        }
    }

    return(
        
        <div className={toggle == false ? styles.taskComplete : styles.taskIncomplete}>
            {changeOrNot()}
        </div>
    )
}