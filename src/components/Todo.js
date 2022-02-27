import React, { useState, useEffect } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { RiEdit2Line } from 'react-icons/ri'
import TodoForm from './TodoForm'


function Todo({ todo, index, editTodo, removeTodo, updateTodo }) {
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

    // if (edit.id) {
    //     return <TodoForm edit={edit} onSubmit={submitUpdate}></TodoForm>
    // }

    const editRow = (todo) => {
        if (!todo.isSelected) {
            setEdit(todo)
        } else {
            setEdit({
                id: null,
                value: ''
            })
        }

        editTodo(todo.id)
    }

    return (
        <div className={todo.isSelected ? 'todo-row selected' : 'todo-row'} key={index}>
            {
                edit.id ?
                    <TodoForm edit={edit} onSubmit={submitUpdate} /> :
                    <div>{todo.text}</div>
            }

            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'>
                </RiCloseCircleLine>
                <RiEdit2Line onClick={() => { editRow(todo) }}
                    className='edit-icon'></RiEdit2Line> </div>
        </div>)
}

export default Todo