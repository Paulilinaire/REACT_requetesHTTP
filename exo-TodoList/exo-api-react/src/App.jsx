import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useEffect, useState } from 'react'
import { TodoContext } from './contexts/TodoContext'
import TodoDisplay from './components/TodoDisplay';
import TodoForm from './components/TodoForm'
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])

 
  useEffect(() => {
    axios.get ("http://localhost:5001/toDos")
    .then (response => {
        console.log(response.data);
        setTodos(prev => [...response.data])
    })
    .catch(error => {
        console.error("Erreur: ",error);
      })
},[])

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      <div className="container mt-5">
        <TodoForm />
        <div>
          <ul>
          {todos.map(todo => (
            <TodoDisplay key={todo.id} todoId={todo.id}/>
          ))}
          </ul>
        </div>
      </div>
    </TodoContext.Provider>
  )
}

export default App
