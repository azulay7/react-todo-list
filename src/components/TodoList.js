import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import UserMode from "./UserMode";
import { UserModeContext } from "../contexts/UserModeContext";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log(...newTodos);
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prevTodos) =>
      prevTodos.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const selectTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isSelected = !todo.isSelected;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const isUserEdit = () => {
    return todos.some((todo) => todo.isSelected);
  };

  const handleSwitchChange = () => {
    debugger;
    const updatedTodos = todos.map((todo) => {
      todo.isSelected = false;
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <UserModeContext.Provider value={isUserEdit()}>
      <div>
        <h1 className="todo-header">What's the Plan for Today </h1>
        <TodoForm onSubmit={addTodo}></TodoForm>
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            index={index}
            selectTodo={selectTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
        <div className="user-mode-container">
          <UserMode
            handleSwitchChange={handleSwitchChange}
            style={{ margin: "5rem" }}
          ></UserMode>
        </div>
      </div>
    </UserModeContext.Provider>
  );
}

export default TodoList;
