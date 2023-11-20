
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTask, toggleTaskCompletion, deleteTask, selectTodoList } from "../reducers/todoReducer";
import { CustomButton, CustomButtonRemove } from "../components/CustomButtom"
import { addHistory } from '../reducers/historySlice';

const TodoApp: React.FC = () => {
  const [taskInput, setTaskInput] = useState<string>("");
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const addTaskHandler = () => {
    if (taskInput.trim() !== "") {
      const newTask = { name: taskInput, completed: false };
      dispatch(addTask(newTask));
      setTaskInput("");
    }
  };

  const toggleTaskCompletionHandler = (index: number) => {
    dispatch(toggleTaskCompletion(index));
    dispatch(addHistory({ name: todoList[index].name }));
  };

  const deleteTaskHandler = (index: number) => {
    dispatch(deleteTask(index));
  };

  return (
    <Container>
      <h1>React Todo App</h1>
      <div className="input-group mb-3" style={{ width: 350 }}>
        <Form.Control
          type="text"
          className="form-control"
          placeholder="Enter something..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          required
        />
        <div className="input-group-append">
          <CustomButton backgroundColor="#006400" onClick={addTaskHandler}>
            Add
          </CustomButton>
        </div>
      </div>
      <ul className="list-group">
        {todoList.map((task: { name: string; completed: boolean }, index: number) => (
          <li key={index} className="list-group-item">
            <Row>
              <Col className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletionHandler(index)}

                />
                <span
                  className={`ml-2 ${task.completed ? "text-decoration-line-through" : ""}`}
                >
                  {task.name}
                </span>
              </Col>
              <Col>
                <CustomButtonRemove
                  backgroundColor="#FE0000"
                  onClick={() => deleteTaskHandler(index)}
                >
                  Remover
                </CustomButtonRemove>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoApp;
