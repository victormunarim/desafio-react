import './App.css';
import TaskList from '../src/componentes/TaskList';

function App() {

  const Tarefas = [
    'correr', 'andar'
  ]

  return (
    <div className="App">
      <label>Tarefa:</label>
      <input type='text' placeholder='Escreva a tarefa'></input>
      <input type='submit' name=''></input>
      <TaskList tarefas={Tarefas} />
    </div>
  );
}

export default App;
