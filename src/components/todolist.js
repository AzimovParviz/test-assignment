import React, {useState, useEffect} from "react";

const TodoList = props => {        
    const Todo = props => <li>
                              title: {props.todo} <br/> status: {props.status} <br/> deadline: {props.deadline}
                          </li>;
    
    return(
        <>
          {props.todos.map(todo => (
	      <Todo todo={todo.title} key={todo.title} status={todo.status} deadline={todo.deadline}/>
          ))}
        </>
    );
};

export default TodoList;
