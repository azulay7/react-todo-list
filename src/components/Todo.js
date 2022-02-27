import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import TodoForm from './TodoForm'


function Todo({ todo, index, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState(
        {
            id: null,
            value: ''
        })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
    }

    return (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} onClick={() => completeTodo(todo.id)} key={index}>
            {todo.text}
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'>
                </RiCloseCircleLine>
                <RiEdit2Line onClick={() => setEdit(todo)}
                    className='edit-icon'></RiEdit2Line> </div>
        </div>)
}

export default Todo