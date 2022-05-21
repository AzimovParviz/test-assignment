import React, {useState, useEffect} from "react";
import "./App.css";
import TodoList from "./components/todolist.js";
import Modal from "./components/modal.js";

function App() {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
    //     };
    // }
    
    const [todos, addTodos] = useState(["Finish homework", "Wash dishes", "Clean room", "Make waffles"]);
    
    // addTodo = todo => {
    //     this.setState(prevState => ({
    //         todos: [...prevState.todos, todo],
    //     }));
    // };

    const hook = () => {
        
    };
    useEffect(hook, []);
    
        return(
            <div className="App">
              <h1>Todos</h1>
              <TodoList todos={todos}/>
              <Modal addTodo={todos}/>
            </div>
        );    
};

export default App;
