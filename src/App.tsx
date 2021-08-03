import React, {useState} from 'react';
import {Header} from "./Components/Header";
import './Style/index.scss'
import {Search} from "./Components/Search";
import {TodoList} from "./Components/TodoList";
import {ITodo} from "./Types/interfaces";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([])

  function addTodo(todo: string) {
    if (todo) {
      setTodos(prevState => [...prevState, {todo,date: new Date(), completed:false}])
    }

    console.log(todos)
  }

  function removeTodo(id: Date) {
    setTodos(todos.filter(todo=> todo.date !== id))
  }
  function completeTodo(id: Date) {
    setTodos(todos.map(todo=> todo.date === id ? {...todo, completed: !todo.completed}: todo))
  }
  return (
    <div className="App">
    <Header />
    <div className="content">
      <Search addTodo={addTodo} />
      <TodoList completeTodo={completeTodo} todos={todos} removeTodo={removeTodo} />
    </div>

    </div>
  );
}

export default App;
