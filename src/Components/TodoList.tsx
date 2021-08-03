import React, {FC} from "react";
import '../Style/todolist.scss'
import {ITodo} from "../Types/interfaces";
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
interface TodoListProps {
    todos: ITodo[],
    removeTodo: (id: Date) => void
    completeTodo: (id: Date) => void
}

export const TodoList: FC<TodoListProps> =({todos, removeTodo, completeTodo})=> {

    return (
        <div className='todo-list-container'>
            <h2>Задачи</h2>
            <div className="todo-arr">
                {
                    todos.map(todo=>
                    <div
                        key={todo.date.getMilliseconds()}
                        className='todo-item'>
                        <p style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.todo}</p>
                        <div className="icon-todo">
                            <ClearIcon onClick={()=> removeTodo(todo.date)} />
                            <DoneIcon onClick={()=> completeTodo(todo.date)} />
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}