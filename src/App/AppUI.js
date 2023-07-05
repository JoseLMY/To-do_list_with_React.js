import React from 'react'
import "./AppUI.css"

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodosLoading } from '../TodosLoading';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';
import {TodoForm} from "../TodoForm"

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <p className='error'>Oh no! There was a error!</p>}
                {(!loading && searchedTodos.lenght == 0) && <p>Create your first task!</p>}
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

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </>
    );
}

export {AppUI}