import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    // state
    const [todos, setTodos] = useState([]);

    //binding
    const todoText = useRef();

    // Life cycle hook /Side effects
    useEffect(() => {
        const existingTodos = localStorage.getItem('todos');
        setTodos(existingTodos ? JSON.parse(existingTodos) : []);
    }, []);

    //events
    function addTodo(event) {
        event.preventDefault();
        const next = [...todos, todoText.current.value];
        setTodos(next);
        localStorage.setItem("todos", JSON.stringify(next));
    }

    return (
        <>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo}>{todo}</li>
                    ))}
                </ul>
                <form onSubmit={addTodo}>
                    <input ref={todoText} />
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        </>
    );
}

export default App;
