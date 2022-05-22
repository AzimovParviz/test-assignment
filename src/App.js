import React, {useState, useEffect} from "react";
import "./App.css";
import TodoList from "./components/todolist.js";
import Modal from "./components/modal.js";

function App() {       
    const [todos, addTodos] = useState(["Finish homework", "Wash dishes", "Clean room", "Make waffles"]);
    
    const hook = () => {
        
    };
    useEffect(hook, []);
    
        return(
            <div className="App">
              <h1>Todos</h1>
              <Modal/>
            </div>
        );    
};

export default App;
