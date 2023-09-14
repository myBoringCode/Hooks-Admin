import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Todo } from "../interface";

interface TodoItemProps {
  todo: Todo;
  onCheck: (item: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onCheck }) => {
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    todo.completed = e.target.checked;
    onCheck(todo);
  };

  return (
    // <div>
    //   <input type="checkbox" checked={todo.completed} />
    //   {todo.text}
    // </div>
    <div>
      <Checkbox onChange={onChange} checked={todo.completed}>
        {todo.text}
      </Checkbox>
    </div>
  );
};

export default TodoItem;
