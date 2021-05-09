import { Fragment, useState } from 'react'
import './TodoCreate.css'

const TodoCreate = (props) => {

    let id

    if (props.todos.length > 0) {
        props.todos.forEach(todo => {
            id = todo.id + 1
        })
    } else {
        id = 1
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: id,
            activity: getNewTodo
        }

        if (getNewTodo.length > 0) {
            props.onCreateTodo(newTodo)
        } else {
            alert("insert activity first")
        }

        setNewTodo('')
    }

    const [getNewTodo, setNewTodo] = useState('')

    const handleInput = (todo) => {
        setNewTodo(todo.target.value)
    }

    return (
        <Fragment>
            <form className="todo__form" onSubmit={handleSubmit}>
                <input type="text" value={getNewTodo} onChange={handleInput}></input>
                <button type="submit">Add Activity</button>
            </form>
        </Fragment>
    )
}

export default TodoCreate