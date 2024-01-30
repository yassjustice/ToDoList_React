import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
    getContainerStyle,
    getInputStyle,
    getUlStyle,
    getLiStyle,
    getDeleteBtnStyle,
    geth1Style,
} from "./appStyle";

function App() {
    // state
    const [todos, setTodos] = useState([]);
    const [theme, setTheme] = useState("light");

    //binding
    const todoText = useRef();

    // Life cycle hook /Side effects
    useEffect(() => {
        const existingTodos = localStorage.getItem("todos");
        setTodos(existingTodos ? JSON.parse(existingTodos) : []);
        const savedTheme = localStorage.getItem('theme');
        setTheme(savedTheme || 'light'); // Set default theme to 'light' if not found in local storage
    }, []);

    //events
    function addTodo(event) {
        event.preventDefault();
        const next = [...todos, todoText.current.value];
        setTodos(next);
        localStorage.setItem("todos", JSON.stringify(next));
        todoText.current.value = "";
    }

    function handleDelete(todo) {
        const updatedTodos = todos.filter((t) => t !== todo);
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    function handleClearTodos() {
        setTodos([]);
        localStorage.removeItem("todos");
    }

    function toggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      
      // Toggle the dark-mode class on the body
      document.body.classList.toggle('dark-mode', newTheme === 'dark');
      
      // Save the theme preference to local storage
      localStorage.setItem('theme', newTheme);
  }
  

    return (
        <>
            <div style={getContainerStyle(theme === "dark")}>
                <button
                    onClick={toggleTheme}
                    style={{ position: "absolute", top: "20px", left: "20px" }}
                >
                    Toggle Theme
                </button>
                <ul style={getUlStyle(theme === "dark")}>
                    {todos.map((todo) => (
                        <li key={todo} style={getLiStyle(theme === "dark")}>
                            {todo}{" "}
                            <button
                                style={getDeleteBtnStyle(theme === "dark")}
                                onClick={() => handleDelete(todo)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
                <form onSubmit={addTodo}>
                    <h1 style={geth1Style(theme === "dark")}> To Do List </h1>
                    <input
                        ref={todoText}
                        style={getInputStyle(theme === "dark", "text")}
                    />
                    <input
                        type="submit"
                        value="Add Todo"
                        style={getInputStyle(theme === "dark", "submit")}
                    />
                </form>
                <button
                    id="clear-todos"
                    style={getDeleteBtnStyle(theme === "dark")}
                    onClick={handleClearTodos}
                >
                    Delete All
                </button>
            </div>
        </>
    );
}

export default App;
