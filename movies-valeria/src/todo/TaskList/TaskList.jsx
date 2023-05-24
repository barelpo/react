import { useState } from "react";
import Task from "../Task/Task";

const TaskList = ({tasks, onTaskDelete}) => {

    const items = tasks.map((task, i) => {
        return <Task key={i} title={task} onTaskDelete={onTaskDelete}/>
    })

    return (
        <ul>
            {items}
        </ul>
    )
}

export default TaskList;