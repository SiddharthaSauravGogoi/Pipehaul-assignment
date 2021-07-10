import { useState, useEffect } from 'react';
import './App.css';
import data from './data.js'
import Todos from './Todos';

function App() {
  const [todoData, setTodoData] = useState([])

  useEffect(() => {
    setTodoData(data)
    return () => {
      setTodoData([])
    }
  }, [])

  const deleteTodo = (id) => {
    let newTodoList = todoData.filter((todo) => todo.id !== id)
    setTodoData(newTodoList)
  }

  return (
    <div className="container">
      <div className="todos-wrapper">
        {todoData.length ? todoData.map((todo) => (
          <Todos key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        )) : 'Your todo list is empty'}
      </div>
    </div>
  );
}

export default App;
