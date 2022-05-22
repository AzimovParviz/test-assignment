import React from "react";

const Todo = props => <li>{props.todo} status: {props.status}</li>;
const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
	<Todo todo={todo.title} key={todo.title} status={todo.status}/>
    ))}
  </ul>
);

export default TodoList;
