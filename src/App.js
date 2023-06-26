import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


function App() {

    const defaultTodos = [
        {text: "Finish the course", completed: false},
        {text: "Go where Sebastian", completed: true},
        {text: "Have lunch", completed: false},
        {text: "Clean up my room", completed: false},
        {text: "Send Schedule", completed: true},
    ]

    return (
        <>
            <TodoCounter 
                completed={15}
                total={25}
            />
            <TodoSearch/>

            <TodoList>
                {defaultTodos.map(todo => (
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
