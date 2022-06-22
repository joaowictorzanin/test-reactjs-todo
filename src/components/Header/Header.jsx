import styles from './Header.module.css';
import logo from '../../assets/to-do.png'
import { useState } from 'react';


export function Header({createTask}){
    const [newTask, setNewTask] = useState('')

    function handleChange(event){
        setNewTask(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault()
        createTask(newTask);
        setNewTask('')
    }

    return(
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt="ToDo List" />
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    className={styles.input} 
                    type="text"
                    value={newTask}
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleChange}
                />
                <button className={styles.button} disabled={newTask.length == 0 ? true : false}>Criar</button>
            </form>
        </div>
    )
}