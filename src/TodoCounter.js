import React from 'react'
import "./TodoCounter.css"

function TodoCounter({total, completed}) {
    if (completed == total){
        return(
            <h1 className='counter'>
                You don't have tasks, create one.
            </h1>
        )
    } else{
        return(
            <h1 className='counter'>You have completed {completed} of {total}  TODOS </h1>
        )
    }
}

export {TodoCounter}