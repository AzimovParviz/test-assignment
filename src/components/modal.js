import React, {useState, useEffect} from "react";
import TodoList from "./todolist.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const TodoForm = () => {
    const [todos, addTodos] = useState([{id: 0, title: '',status:'', deadline:''}]);
    const [status, setStatus] = useState("In Progress");
    const [deadline, setDeadline] = useState("");
    const [todoInput, setToDoInput]  = useState("");
    /*
      useStates for handling ToDo object properties
      */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /*
      useStates for the modal
      */
    
    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    /*
      ideas I had for implementing reminder editing
      */
    const handleSubmit = (event) => {
        event.preventDefault();
        addTodos(todos.concat(
            {
                id: todos[todos.length-1].id+=1,
                title: todoInput,
                status: status,
                deadline: deadline
            }
        ));
        setToDoInput("");
        setDeadline("");
        console.log(todos);
    };
    /*
      form submit handler for when you create a new todo item
      */
    const handleEditSubmit = (event) => {
        event.preventDefault();
        addTodos(todos.concat(
            {
                id: todos[todos.length-1].id+=1,
                title: todoInput,
                status: status,
                deadline: deadline
            }
        ));
        setToDoInput("");
        setDeadline("");
        console.log(todos);
    };
    /*
      theoretical event handler for when the user edits a reminder, not functinal
      */
    
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };
    /*
      event handler for the change of status
      */
    return (
        <div>
          <ul>
            <div onDoubleClick={handleShowEdit}>            
              <TodoList todos={todos}/>
            </div>
            {/*
               how I was plannig to implement the reminder editing: double click on the reminder item and it would use the handleShowEdit handler to open the edit modal
             */}
          </ul>
          <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header>
              Enter information
            </Modal.Header>
            <form onSubmit={handleEditSubmit}>
              <input
                id="todo-input"
                type="text"
                placeholder="Add todo"
                value={todos.title}
                onChange={event => setToDoInput(event.target.value)}
              />
            <br/>
            <input
              id="deadline-input"
              type="text"
              placeholder="set deadline"
        value={todos.deadline}
              onChange={e => setDeadline(e.target.value)}
            />
              <br/>
              <select id="status-input" value={todos[0].status} onChange={handleStatusChange}>
                <option value="Done">Done</option>
                <option value="Not Started">Not Started</option>
                <option value="In Progress">In progress</option>
              </select>
              <input type="submit" value="Submit"/>
            </form>
          </Modal>
          {/*
             end of the theoretical reminder editor Modal
            */}
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
              Click anywhere outside to close this popup
          </Modal.Footer>
        </Modal>
          </>
        </div>
    );
    
};

export default TodoForm;
