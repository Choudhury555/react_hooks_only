import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [num,setNum] = useState(0);
    const [show,setShow] = useState(false);

    console.log(num);
    
    const getValue = () =>{
        return setNum(num+1);
    }

    const countDelay= (n) => {
        for(let i=0;i<=10000000000;i++){}//this loop will just delay some time

        return n;
    }

    const CheckData = useMemo(() =>{
        return countDelay(num);
    },[num])

    return (
        <div>
            <button onClick={getValue}>Counter</button>
            <p>My New Number :{CheckData}</p>
            <button onClick={() => setShow(!show)}>
                {show ? "You Clicked Me" : "Click Me"}
            </button>
        </div>
    )
}

export default UseMemo