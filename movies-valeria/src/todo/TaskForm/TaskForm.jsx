import { useState } from "react"

const TaskForm = ({onTaskAdd}) => {

    console.log('rendering TaskForm')

    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(taskValue)
        onTaskAdd(taskValue)
        setTaskValue('')
    }

    const handleClick = () => {
        console.log(taskValue)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>

            <input 
                type="text" 
                placeholder="Write your task..."
                value={taskValue}
                onChange={(event) => setTaskValue(event.target.value)}/>
            <button type="submit" onClick={handleClick}>ADD</button>

        </form>
    )
}

export default TaskForm;