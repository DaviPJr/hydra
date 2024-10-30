import React from 'react'
import './Form.css'

export const Form = () => {
  return (
    <div className="form-parent">
            <div className='form'>
        <div className="form-title">
            <h1>JOIN HYDRA</h1>
            <hr />
            <h2>Let’s Build Your VR Experience</h2>
        </div>
        <div className="form-input">
                <input type="text" placeholder='First Name'/>
                <input type="text" placeholder='Last Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Phone Number'/>
         </div>
         <div className="form-input-text">
                <input type="text" name="" id="subject" placeholder='Subject' />
                <textarea name="" id="tell" placeholder='Tell Us Something...'></textarea>
                <button>SEND TO HYDRA</button>
         </div>
        
       </div>
   </div>
    
  )
}

export default Form;
