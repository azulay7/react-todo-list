import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }

    const newTodos = [todo, ...todos]
    console.log(...newTodos)
    setTodos(newTodos)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }

    setTodos(prevTodos => prevTodos.map(item => (item.id === todoId ? newValue : item)))
  }
  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo

    })
    setTodos(updatedTodos)
  }

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
  }
  return (
    <div>
      <h1 className='todo-header'>What's the Plan for Today </h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      {todos.map((todo,index)=>
        <Todo todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      )}
    </div>
  )
}

export default TodoList