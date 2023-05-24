import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

import './TodoApp.css'

const TodoApp = () => {

    const [tasks, setTasks] = useState([])

    const addTaskHandler = (newTask) => {
        setTasks([...tasks, newTask])
    }

    const deleteTaskHandler = (taskToDelete) => {
        setTasks(tasks.filter((task) => task !== taskToDelete))
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <TaskForm onTaskAdd={addTaskHandler}/>
            <TaskList tasks={tasks} onTaskDelete={deleteTaskHandler}/>
        </div>
    )
}
export default TodoApp;