import './TaskItem.css'
import { useState } from 'react'

function TaskItem(props) {

    const [done, setDone] = useState(false)

    function alterar() {
        props.marcado(props.tarefa)
    }

    function feito() {
        setDone(true);
        props.feitoMaisUm(props.tarefa)
    }
    

    return (
        <div className='container'>
            <p>
                {props.tarefa}
            </p>
            <div className='tarefa'>
                <input type='checkbox' onClick={alterar}></input>
                <label>DELETAR</label>
                <input type='checkbox' checked={done} onChange={feito}></input>
                <label>FEITO</label>
            </div>
        </div>
    )
}

export default TaskItem