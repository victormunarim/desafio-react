import './TaskList.css'
import TaskItem from './TaskItem.jsx'
import { useEffect, useState } from 'react'


function TaskList(props) {
    const [numFeitos, setNumFeitos] = useState(0)
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        setTarefas(props.tarefas)
    })

    function marcado(tata){
        setTarefas([tarefas.map(item => {if(item.task === tata){
            item.existe = false
        }})]
        )
        
    }

    function feitoMaisUm(tutu){
        setTarefas([tarefas.map(item => {if(item.task === tutu){
            item.feito = true
        }})]
        )
        setNumFeitos(tarefas.filter(item => item.feito === true).length)
    }

    return (
        <div>
            {
                tarefas.map((item) => {
                    if (item.existe === true) {
                        return <TaskItem tarefa={item.task} marcado={marcado} feitoMaisUm={feitoMaisUm}/>
                    } else return null
                }
                )}
                {numFeitos}
        </div>
    )
}

export default TaskList