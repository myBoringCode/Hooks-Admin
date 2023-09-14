import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { Button, Modal, Form, Input } from "antd";
import { Todo } from "./interface";
import myContext from "./context";

const Container: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    // { id: 1, text: "Todo 1", completed: false },
    // { id: 2, text: "Todo 2", completed: true }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [form] = Form.useForm();

  function confirmAdd() {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        console.log(values);

        addTodo(values);
        setModalOpen(false);
      })
      .catch(info => {
        console.log("Validate Failed:", info);
      });
  }

  function addTodo(values: any) {
    // 生成随机id
    setTodos([...todos, { id: (Math.random() * 10000).toFixed(0), text: values.name, completed: false }]);
  }

  function onCheck(item: Todo) {
    setTodos(todos.map(todo => (todo.id === item.id ? item : todo)));
  }

  return (
    <myContext.Provider value={todos}>
      <div className="card content-box">
        <Button
          className="add-button"
          type="primary"
          onClick={() => {
            form.resetFields();
            setModalOpen(true);
          }}
        >
          添加任务
        </Button>

        <TodoList todos={todos} onCheck={onCheck} />

        <Modal title="添加任务" centered visible={modalOpen} onOk={confirmAdd} onCancel={() => setModalOpen(false)}>
          <Form form={form} layout="vertical" name="form_in_modal">
            <Form.Item name="name" label="任务名称" rules={[{ required: true, message: "请输入任务名称!" }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </myContext.Provider>
  );
};

export default Container;
