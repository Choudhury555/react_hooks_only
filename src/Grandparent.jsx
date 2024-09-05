import React from 'react'
import Parent from './Parent'

const Grandparent = () => {
  return (
    <>
    <h1>Grand Parent</h1>
    <Parent money={500}/>
    </>
  )
}

export default Grandparent