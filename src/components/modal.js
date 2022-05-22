import React, {useState, useEffect} from "react";
import TodoList from "./todolist.js";

const Modal = () => {
    const [todos, addTodos] = useState([{title: '',status:'', deadline:''}]);
    const [status, setStatus] = useState("In Progress");
    const [deadline, setDeadline] = useState("");
    const [todoInput, setToDoInput]  = useState("");
    async function getTodo() {
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodos(todos.concat(
            {
                title: todoInput,
                status: status,
                deadline: deadline
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
              id="todo-input"
              type="text"
              placeholder="Add todo"
              value={todoInput}
              onChange={event => setToDoInput(event.target.value)}
            />
            <br/>
            <input
              id="deadline-input"
              type="text"
              placeholder="set deadline"
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
            />
            <br/>
            <select id="status-input" value={status} onChange={handleStatusChange}>
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
