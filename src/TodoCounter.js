import React from 'react'
import "./TodoCounter.css"

function TodoCounter({total, completed}) {
    return(
        <h1 className='counter'>You have completed {completed} of {total}  TODOS</h1>
    )
}

export {TodoCounter}