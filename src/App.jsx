import { useState } from 'react'
import './App.css'
import UseEffect from './components/UseEffect'
import UseEffectCleanup from './components/UseEffectCleanup'
import UseState from './components/UseState'
import UseStateForm from './components/UseStateForm'
import Grandparent from './Grandparent'
import UseReducer from './components/UseReducer'
import UseRef1 from './components/UseRef1'
import UseRef2 from './components/UseRef2'
import UseLayoutEffect from './components/UseLayoutEffect'
import UseMemo from './components/UseMemo'
import UseCallBack from './components/UseCallBack'

function App() {
  // const [flag,setFlag] = useState(true);//This is used for "UseEffectCleanup.jsx"
  return (
    <>
      {/* <button onClick={()=>setFlag(!flag)}>FLAG</button>//This is used for "UseEffectCleanup.jsx" */}
      {/* <UseState /> */}
      {/* <UseStateForm /> */}
      {/* <UseEffect /> */}
      {/* {flag && <UseEffectCleanup />} */}
      {/* <Grandparent /> */}
      {/* <UseReducer /> */}
      {/* <UseRef1 /> */}
      {/* <UseRef2 /> */}
      {/* <UseLayoutEffect /> */}
      {/* <UseMemo /> */}
      {/* <UseCallBack /> */}
    </>
  )
}

export default App
