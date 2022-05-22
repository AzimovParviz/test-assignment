import React, {useState, useEffect} from "react";
import "./App.css";
import TodoList from "./components/todolist.js";
import TodoForm from "./components/modal.js";

function App() {        
    return(
        <div className="App">
          <h1>Todos</h1>
            <TodoForm/>
        </div>
    );
};

export default App;
