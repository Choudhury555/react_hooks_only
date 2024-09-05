import React from 'react'
import Child from './Child'

const Parent = ({money}) => {
  return (
    <>
    <h2>Parent</h2>
    <Child money={money}/>
    </>
  )
}

export default Parent