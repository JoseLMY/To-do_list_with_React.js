import React from 'react'

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
    {text: "Finish the course", completed: false},
    {text: "Go where Sebastian", completed: false},
    {text: "Have lunch", completed: false},
    {text: "Clean up my room", completed: false},
    {text: "Send Schedule", completed: false},
]

function App() {
    const [searchValue, setSearchValue] = React.useState("")
    console.log("You are searching " + searchValue);

    const [todos, setTodos] = React.useState(defaultTodos)

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos  = todos.length

    const searchedTodos = todos.filter(
        (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    )

    return (
        <>
            <TodoCounter 
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem 
                        text={todo.text}
                        key={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>
        </>
    );
}

export default App;
