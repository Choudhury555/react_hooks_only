import React, { useEffect, useState } from 'react'

const UseEffectCleanup = () => {
    const [widthCount,setWidthCount] = useState(window.innerWidth);

    const handleResieFunction = () =>{
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize",handleResieFunction)
        return ()=>{
            window.removeEventListener("resize",handleResieFunction);
        }
    },[widthCount])
    

    return (
        <div>
            <h1>The Size of the window is = {widthCount}</h1>
        </div>
    )
}

export default UseEffectCleanup