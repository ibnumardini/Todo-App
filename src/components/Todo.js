import { Fragment, useState } from 'react';
import './Todo.css'
import TodoList from './TodoList'
import TodoCreate from './TodoCreate'

const Todo = () => {

    const [getTodos, setTodos] = useState([])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
    }

    return (
        <Fragment>
            <h2>My First Todo App</h2>

            <TodoCreate todos={getTodos} onCreateTodo={eventCreateTodo} />
            <TodoList todos={getTodos} />
        </Fragment>
    )
}

export default Todo;