import React, {useState, useEffect} from "react";

const Modal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";   
    const [todoInput, setToDoInput]  = useState("");        
    async function getTodo() {
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //this.props.addTodo(this.state.todoInput);
        // Add the new todo to the list
        setToDoInput(props);
    };    
    
    return (
        <div className={showHideClassName}>
          <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add todo"
            value={todoInput}
            onChange={event => setToDoInput(event.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        </div>
    );
    
};

export default Modal;
