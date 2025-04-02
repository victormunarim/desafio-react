import './TaskList.css'
import TaskItem from './TaskItem.jsx'

function TaskList(props){
    return (
        <div>
            {props.tarefas.map((item) => <TaskItem tarefas={item}/>)}
        </div>
    )
}

export default TaskList