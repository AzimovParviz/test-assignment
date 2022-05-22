import React, {useState, useEffect} from "react";
import TodoList from "./todolist.js";

const Modal = () => {
    const [todos, addTodos] = useState([{title: '',status:''}]);
    const [status, setStatus] = useState("In Progress");
    const [todoInput, setToDoInput]  = useState("");
    async function getTodo() {
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodos(todos.concat(
            {
                title: todoInput,
                status: status
            }
        ));
        setToDoInput("");
        console.log(todoInput);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
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
            <select value={status} onChange={handleStatusChange}>
              <option value="Done">Done</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In progress</option>
            </select>
            <input type="submit" value="Submit"/>
          </form>
        </div>
                   );
    
};

export default Modal;
