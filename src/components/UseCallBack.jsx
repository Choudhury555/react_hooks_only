/////The React Callback Hook returns a memoized callback function(updated version of "useMemo")

import React, { useCallback, useState } from 'react'
import Todo from './Todo'

const UseCallBack = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () =>{
        setCount(count+1);
    }

    const addTodo = useCallback(() =>{
        return setTodos((prev) => [...prev,"New Entry"]);
    },[todos])

    return (
        <div>
            <Todo addTodo={addTodo} todos={todos}/>
            <hr></hr>
            <button onClick={increment}>+</button>
            <span>{count}</span>
        </div>
    )
}

export default UseCallBack