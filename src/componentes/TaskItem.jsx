import './TaskItem.css'

function TaskItem(props) {

    function alterar() {
        props.marcado(props.tarefa)
    }

    function feito(event){
        props.feitoMaisUm(props.tarefa)
    }

    return (
        <div>
            {props.tarefa}
            <label>DELETAR</label>
            <input type='checkbox' onClick={alterar}></input>
            <label>FEITO</label>
            <input type='checkbox' onClick={feito}></input>
        </div>
    )
}

export default TaskItem