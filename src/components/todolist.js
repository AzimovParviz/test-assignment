import React from "react";

const Todo = props => <li>{props.todo}</li>;
const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
	<Todo todo={todo} key={todo} />
    ))}
  </ul>
);

export default TodoList;
