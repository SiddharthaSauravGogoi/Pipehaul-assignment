import { useState, useEffect } from 'react';
import './App.css';
import data from './data.js'
import Todos from './Todos';
import AddTodoModal from './AddTodoModal';

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

  const addTodo = (newTodo) => {
    for (let i = 0; i < todoData.length; i++) {
      if (newTodo.id === todoData[i].id) return alert('A todo with same id already exists')
    }
    setTodoData([...todoData, newTodo])
  }

  return (
    <div className="container">
      <div className="todos-wrapper">
        <AddTodoModal addTodo={addTodo} />
        {todoData.length ? todoData.map((todo) => (
          <Todos key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        )) : 'Your todo list is empty'}
      </div>
    </div>
  );
}

export default App;
