import './App.css';
import TaskList from '../src/componentes/TaskList';
import { useState } from 'react';

function App() {

  const [tarefasTemporario, setTarefasTemporario] = useState(null)
  const [tarefas, setTarefas] = useState([])

  function adicionarTarefa(event) {
    setTarefasTemporario(event.target.value)
  }

  function enviar() {
    setTarefas([...tarefas, { task: tarefasTemporario, existe: true, feito: false }])
    setTarefasTemporario(null)
  }

  return (
    <div className="App">
      <div className='entrada'>
        <label>Tarefa:</label>
        <input
          className='input'
          type='text'
          placeholder='Escreva a tarefa'
          onChange={adicionarTarefa}
          required
        ></input>
        <input className='botao' type='submit' onClick={tarefasTemporario != null ? enviar : null}></input>
      </div>
      <div className='saida'>
        <TaskList tarefas={tarefas} />
      </div>
    </div>
  );
}

export default App;
