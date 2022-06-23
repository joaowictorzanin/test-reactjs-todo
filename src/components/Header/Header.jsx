import styles from './Header.module.css';
import logo from '../../assets/to-do.png'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../store/actions/notCompletedTasks.action';


export function Header(){
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState('')

    //função responsavel por capturar os dados inseridos no input
    function handleChange(event){
        setNewTask(event.target.value);
    }

    //função responsavel pela criação de uma nova task
    function handleSubmit(event){
        event.preventDefault()
        dispatch(addNewTask(newTask))
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
