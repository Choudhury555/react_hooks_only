import React, { useReducer } from "react";
import reducer from "./reducer";

const initialValue = 0;

const UseReducer = () =>{

    const [count,dispatch] = useReducer(reducer,initialValue)


    return (
        <div>
            <button onClick={()=>{dispatch({type:"INC"})}}>+</button>
            <button onClick={()=>{dispatch({type:"INCBYFIVE",payload:5})}}>+ BY FIVE</button>
            <span> {count} </span>
            <button onClick={()=>{dispatch({type:"DEC"})}}>-</button>
        </div>
    )
}

export default UseReducer;