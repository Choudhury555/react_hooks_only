import React, { useState } from 'react'

const UseStateForm = () => {

    const [formData,setFormData] = useState({
        firstname:"",
        lastname:""
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prev)=>{
            return {...prev,[name]:value}
        })
    }

    return (
        <div>
            <input type="text" value={formData.firstname} onChange={handleChange} name="firstname"/>
            <input type="text" value={formData.lastname} onChange={handleChange} name="lastname"/>
            <h5>{`${formData.firstname} ${formData.lastname}`}</h5>
        </div>
    )
}

export default UseStateForm