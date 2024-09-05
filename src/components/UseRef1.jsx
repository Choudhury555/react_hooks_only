import React, { useEffect, useRef, useState } from 'react'

///////////////////////////////////////////////////////////////////////////////////////
/////(useRef first usage)It is used to create mutable variable which will not re-render the component/////
/////////////////////////////////////////////////////////////////////////////////////


const UseRef1 = () => {
    // const [count, setCount] = useState(0);//this will not work here because it will infinitely re-render
    const [userInput, setUserInput] = useState("");
    
    const count = useRef(0);
    console.log(count);
    

    useEffect(() => {
        // setCount(count + 1);
        count.current++;
    })

    return (
        <>
            <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)}/>
            <div>No of time component re-render = {count.current}</div>
        </>
    )
}

export default UseRef1