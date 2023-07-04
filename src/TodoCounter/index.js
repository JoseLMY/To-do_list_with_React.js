import React from 'react'
import "./TodoCounter.css"
import {TodoContext} from "../TodoContext"

function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    if (completedTodos == totalTodos){
        return(
            <h1 className='counter'>
                You don't have tasks, create one.
            </h1>
        )
    } else{
        return(
            <h1 className='counter'>You have completed <span className='counterTasks'>{completedTodos}</span> of <span className='counterTasks'>{totalTodos}</span>  tasks.</h1>
        )
    }
}

export {TodoCounter}