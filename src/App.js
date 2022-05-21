import React from "react";
import "./App.css";
import TodoList from "./components/todolist.js";
import Modal from "./components/modal.js";

class App extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
        };
    }

    addTodo = todo => {
        this.setState(prevState => ({
            todos: [...prevState.todos, todo],
        }));
    };
    
    render() {
        return(
            <div className="App">
              <h1>Todos</h1>
              <TodoList todos={this.state.todos}/>
              <Modal addTodo={this.addTodo}/>
            </div>
        );
    }
}
export default App;
