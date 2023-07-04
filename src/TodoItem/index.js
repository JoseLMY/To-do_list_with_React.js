import React from 'react'

// assets
import check from "../assets/check.png"
import close from "../assets/close.png"

import "./TodoItem.css"

function TodoItem(props) {
    return(
        <li className='list'>
            <span 
                className={`completed ${props.completed && "completed--active"}`}
                onClick={props.onComplete}
            >
                <img src={check} alt='completed' width="18px" />
            </span>
            <p 
                className={`pending ${props.completed && "pending--active"}`}>
                {props.text}
            </p>
            <span 
                className={`cancel ${props.completed && "cancel--active"}`}
                onClick={props.onDelete}
            >
                <img src={close} alt='delete' width="25px" />
            </span>
        </li>
    )
}

export {TodoItem}