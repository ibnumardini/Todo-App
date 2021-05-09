import { Fragment } from 'react';
import './TodoList.css'

const TodoList = (props) => {

    let todos

    if (props.todos.length > 0) {
        todos = props.todos
    } else {
        todos = [{
            activity: "no activity!"
        }]
    }

    return (
        <Fragment>
            <div className="todo__list">
                <ul>{
                    todos.map((todo) => {
                        return <li key={todo.id}>{todo.activity}</li>
                    })
                }</ul>
            </div>
        </Fragment>
    )
}

export default TodoList