import React from 'react'
import "./TodoItem.css"

function TodoItem(props) {
    return(
        <li className='list'>
            <span className={`completed ${props.completed && "completed--active"}`}>
                V
            </span>
            <p className={`pending ${props.completed && "pending--active"}`}>
                {props.text}
            </p>
            <span className={`cancel ${props.completed && "cancel--active"}`}>X</span>
        </li>
    )
}

export {TodoItem}