const Task = ({title, onTaskDelete}) => {
    return(
        <li style={{marginBottom: '10px'}}>
            <p style={{flexGrow: 1}}>{title}</p>
            <button onClick={() => onTaskDelete(title)}>DELETE</button>
        </li>
    )
}

export default Task;