import React from 'react'
import "./TodoForm.css"
import {TodoContext} from "../TodoContext"

function TodoForm() {
    const {
        addTodo,
        setOpenModal,

    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (e) => {   
        e.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }
    const onCancel = (e) => {
        setOpenModal(false)
    }
    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label className='headerCreateTodo'>Task creator</label>
            <textarea
            className='textArea' 
                placeholder='Write your new task...'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                    >
                        Cancel
                    </button>
                <button 
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Add Task
                </button>
            </div>
        </form>
    )
}

export {TodoForm}