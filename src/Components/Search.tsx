import React, {FC, useState} from 'react'
import '../Style/search.scss'
import {ITodo} from "../Types/interfaces";

interface SearchProps {
    addTodo: (todo: string) => void
}

export const Search:FC<SearchProps> =({addTodo})=> {
const [todo, setTodo] = useState<string>('')
    return (
        <div className='form'>
            <input value={todo} onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setTodo(e.target.value)} type="text"/>
            <div className="btn" onClick={()=> addTodo(todo)}>Add Todo</div>
        </div>
    )
}