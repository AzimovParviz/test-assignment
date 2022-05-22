import React from "react";

const Todo = props => <li>{props.todo} <br/> status: {props.status} <br/> deadline: {props.deadline}</li>;
const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
	<Todo todo={todo.title} key={todo.title} status={todo.status} deadline={todo.deadline}/>
    ))}
  </ul>
);

export default TodoList;
