import './App.css';
import TaskList from '../src/componentes/TaskList';
import { useState } from 'react';

function App() {

  const [tarefasTemporario, setTarefasTemporario] = useState('')
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(event) {
    setTarefasTemporario(event.target.value)
  }

  function enviar() {
    setTarefas([...tarefas, {task: tarefasTemporario, existe: true, feito: false}])
  }

  return (
    <div className="App">
      <label>Tarefa:</label>
      <input
        type='text'
        placeholder='Escreva a tarefa'
        onChange={adicionarTarefa}
      ></input>
      <input type='submit' onClick={enviar}></input>
      <TaskList tarefas={tarefas} />
    </div>
  );
}

export default App;
