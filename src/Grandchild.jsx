import React, { useContext } from 'react'
import { OwnConText } from './components/UseContext'

const Grandchild = ({money}) => {
    const {moneyFromContextAPI_1,moneyFromContextAPI_2} = useContext(OwnConText);

  return (
    <>
    <h4>Grand Child</h4>
    <div>My Family Money = {money}</div>{/* through props drilling from Grandparent component*/}
    <div>My Family Money from Context API at Grandchild= {moneyFromContextAPI_1} and {moneyFromContextAPI_2}</div>
    </>
  )
}

export default Grandchild