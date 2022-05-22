import React, {useState, useEffect} from "react";
import TodoList from "./todolist.js";

const Modal = () => {
    const [todos, addTodos] = useState([]);
    const [todoInput, setToDoInput]  = useState("");
    async function getTodo() {
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodos(todos.concat(todoInput));
        setToDoInput("");
        console.log(todoInput);
    };
    
    return (
        <div>
          <TodoList todos={todos}/>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add todo"
            value={todoInput}
            onChange={event => setToDoInput(event.target.value)}
          />
            <input type="submit" value="Submit"/>
          </form>
        </div>
    );
    
};

export default Modal;
