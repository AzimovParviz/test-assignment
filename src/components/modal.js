import React, {useState, useEffect} from "react";
import TodoList from "./todolist.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const TodoForm = () => {
    const [todos, addTodos] = useState([{title: '',status:'', deadline:''}]);
    const [status, setStatus] = useState("In Progress");
    const [deadline, setDeadline] = useState("");
    const [todoInput, setToDoInput]  = useState("");
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
          <>
          <Button onClick={handleShow}>New Todo</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              Enter information
            </Modal.Header>
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
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
          </>
        </div>
    );
    
};

export default TodoForm;
