import { useContext, useEffect, useRef, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'
import Todo from '../models/Todo'
import axios from 'axios'

const TodoForm = () => {
    const { setTodos } = useContext(TodoContext)
    const todoTitleInputRef = useRef()
    const submitButtonRef = useRef() 

    
    
    useEffect(() => {
        axios.get ("http://localhost:5001/toDos")
        .then (response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error("Erreur: ",error);
        })
    },[])
    
    const submitHandler = (event) => {
        event.preventDefault()

        const title = todoTitleInputRef.current.value
    
        axios.post("http://localhost:5001/toDos", {title : title})
        .then (response => {
            console.log(response.data);
        const newTask = new Todo(title)
        setTodos((previousTasks => [...previousTasks, newTask]))
        })
        .catch(error => {
          console.error("Erreur: ",error);
        })
      }

    const inputChangedHandler = () => {
                submitButtonRef.current.disabled = !todoTitleInputRef.current.value
    }

    return (
        <>
        <h1 className="display-4">To do List</h1>
        <form action="#" onSubmit={submitHandler} className="">
        <div className="input-group d-flex justify-content-between align-items-center mb-3 ">
                <label className='mx-3' htmlFor="todoTitle">Tâches: </label>
                <input type="text" className="form-control" id="todoTitle" ref={todoTitleInputRef} onChange={inputChangedHandler} required/>
            </div>
            <div className='text-end mb-3'>
                <button className="btn btn-primary" disabled ref={submitButtonRef}>Ajouter</button>
            </div>
            <hr/>
        </form>
        </>
    )
}

export default TodoForm