import React from 'react'
import "./CreateTodoButton.css"

function CreateTodoButton({setOpenModal}) {
    return(
        <>
            <div className='containerButton'>
                <button 
                    className='createTodoButton'
                    onClick={()=>{
                            setOpenModal(state => !state)
                        }
                    }
                >
                    CREATE
                </button>
            </div>
        </>
    )
}

export {CreateTodoButton}