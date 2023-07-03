import React from 'react'

import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { defaultMaxListeners } from 'events';

// const defaultTodos = [
//     {text: "Finish the course", completed: false},
//     {text: "Go where Sebastian", completed: true},
//     {text: "Have lunch", completed: false},
//     {text: "Clean up my room", completed: false},
//     {text: "Send Schedule", completed: false},
// ]

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
// localStorage.removeItem("TODOS_V1")

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName)

    let parsedItem
    
    if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue
    } else {
        parsedItem = JSON.parse(localStorageItem)
    }

    const [item, setItem] = React.useState(parsedItem)
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return [item, saveItem]
}

function App() {
    const [todos, saveTodos] = useLocalStorage("TODOS_V1", [])

    const [searchValue, setSearchValue] = React.useState("")
    console.log("You are searching " + searchValue);

    const completedTodos = todos.filter(todo => !!todo.completed).length
    const totalTodos  = todos.length

    const searchedTodos = todos.filter(
        (todo) => (todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    )
    
    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((
            (todo) => todo.text == text
        ))
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex((
            (todo) => todo.text == text
        ))
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

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
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>
        </>
    );
}

export default App;
