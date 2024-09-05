//////////////////////////////////////////////////
/////(useRef second usage)Used to access the DOM element directly/////
////////////////////////////////////////////////
import React, { useRef } from 'react'

const UseRef2 = () => {
    const inputRef = useRef();
    console.log(inputRef);

    function changeColor(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="grey";
    }

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={changeColor}>Start Typing</button>
        </>
    )
}

export default UseRef2