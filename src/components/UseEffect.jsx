import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const[count,setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    const decrement = () =>{
        if(count===0){
            setCount(0);
        }
        else{
            setCount(count-1); 
        }
    }

    //useEffect used to handle side effects in react function component
    //eample of side effects are (fetch any api,manually changing DOM in React,setting up a subscription)
    useEffect(() => {
        document.title=count;
    },[count])
    

    return (
        <div>
            <button onClick={increment}>+</button>
            <span> {count} </span>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default UseEffect