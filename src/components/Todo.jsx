import React, { memo } from 'react'

const Todo = ({ todos, addTodo }) => {

    console.log("Todo Component Rendered");


    return (
        <div>
            Todo
            {todos.map((todo, i) => {
                return <p key={i}>{todo + i}</p>
            })}
            <button onClick={addTodo}>Add</button>
        </div>

    )
}

export default memo(Todo);