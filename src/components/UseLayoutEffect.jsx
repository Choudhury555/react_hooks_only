//useLayoutEffect runs synchronously after a render but before the screen is updated

//but useEffect runs asynchronously and after a render is painted to screen

import React, { useEffect, useLayoutEffect } from 'react'

const UseLayoutEffect = () => {

    useEffect(() => {
        console.log("I am first");//asynchronously
    }, [])

    useLayoutEffect(() => {
        console.log("I am second");//synchronously
    }, [])

    useEffect(() => {
        console.log("I am third");//asynchronously
    }, [])
    

  return (
    <div>UseLayoutEffect</div>
  )
}

export default UseLayoutEffect