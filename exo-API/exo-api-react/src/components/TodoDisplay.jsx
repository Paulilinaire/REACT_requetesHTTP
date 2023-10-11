import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import axios from 'axios';

const TodoDisplay = (props) => {
    const { todoId } = props
    const context = useContext(TodoContext)
    const [todos, setTodos ] = useState([])

    const foundtodo = context.todos.find(t => t.id === todoId)
    console.log(foundtodo);

    useEffect(() => {
        axios.get("http://localhost:5001/toDos")
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

  const deleteTodos = (todoId) => {
    axios.delete(`http://localhost:5001/toDos/${todoId}`)
    .then(() =>{
        console.log("todos avec id " + todoId + " supprimer");
        const removeTask = todos.filter((todo) => {
          return todo.id !== todoId;
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
            <div className="d-flex ">
                <button className="btn btn-warning me-3">Modifier</button>
                <button onClick={deleteTodos(todoId)}className="btn btn-danger">Supprimer</button>
            </div>
        </li>
    )
}

export default TodoDisplay