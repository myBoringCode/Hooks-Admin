import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../interface";
import "../index.less";

interface TodoListProps {
  todos: Todo[];
  onCheck: (item: Todo) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onCheck }) => {
  function itemCheck(item: Todo) {
    onCheck(item);
  }

  let todoElement = todos.filter(todo => !todo.completed).map(todo => <TodoItem key={todo.id} todo={todo} onCheck={itemCheck} />);

  let completedElement = todos
    .filter(todo => todo.completed)
    .map(todo => <TodoItem key={todo.id} todo={todo} onCheck={itemCheck} />);

  return (
    <div>
      <h1>进行中</h1>
      {todoElement.length > 0 ? todoElement : <div>没有进行中的任务</div>}
      <h1>已完成</h1>
      {completedElement.length > 0 ? completedElement : <div>没有完成的任务</div>}
    </div>
  );
};

export default TodoList;
