import {ClipboardText} from 'phosphor-react'

import styles from './NoTask.module.css'

export function NoTask({Title, Description}){
    return(
        <div className={styles.container}>
            <ClipboardText size={80}/>
           <div>
            <p><strong>{Title}</strong></p>
            <p>{Description}</p>
           </div>
        </div>
    )
}