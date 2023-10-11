import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import axios from 'axios';

const TodoDisplay = (props) => {
    const { todoId } = props
    const context = useContext(TodoContext)
    const [todos, setTodos ] = useState()

    const foundtodo = context.todos.find(t => t.id === todoId)
    console.log(foundtodo);

useEffect(() => {
    axios.get ("http://localhost:5001/toDos")
    .then (response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Erreur: ",error);
      })
},[])

// const editTodos = () => {
//     const id = 2
//     axios.put(`http://localhost:5001/toDos/${id}`, {title : "manger des pâtes"})
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error("Erreur: ",error);
//     })
//   }

  const deleteTodos = () => {
    const id = 11
    axios.delete(`http://localhost:5001/toDos/${id}`)
    .then(() =>{
        console.log("todos avec id " + id + " supprimer");
        const removeTask = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(removeTask);   
    })
    .catch(error => {
      console.error("Erreur: ",error);
    })
  }


    return (
        <li className="mb-3 text-dark list-group-item d-flex justify-content-between align-items-center">
            <span>{foundtodo.title}</span>
            <button className="btn btn-warning">Modifier</button>
            <button onClick={deleteTodos}className="btn btn-danger">Supprimer</button>
        </li>
    )
}

export default TodoDisplay