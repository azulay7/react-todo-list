import React, { useState } from 'react'

export default function TodoForm() {

    const [input, setInput] = useState('')
    return (
        <form className='todo-form'>
            <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input'></input>
            <button className='todo-button'>Add Todo</button>
        </form>
    )
}
