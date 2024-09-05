import React, { useContext } from 'react'
import Grandchild from './Grandchild'
import { OwnConText } from './components/UseContext'

const Child = ({ money }) => {

    const {moneyFromContextAPI_1} = useContext(OwnConText);
    // console.log(moneyFromContextAPI_1);

    return (
        <>
            <h3>Child</h3>
            <div>My Family Money from Context API at Child= {moneyFromContextAPI_1}</div>
            <Grandchild money={money} />

        </>
    )
}

export default Child