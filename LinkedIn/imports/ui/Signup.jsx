import React, { useState, useEffect } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export const Signup = () => {


  const [error_state, setError] = useState('');
 
  const [formData_state, setFormData] = useState({
    email: "",
    password: ""
  })

  let navigate = useNavigate();

  if(!!Meteor.userId()){
    useEffect(() => {
        navigate('/');
    });
}


  function submitForm(event){
    event.preventDefault();   

    Accounts.createUser({email: formData_state.email, password: formData_state.password}, (errorCallbackObject) => {
        if(!!errorCallbackObject){
            setError(errorCallbackObject.reason);
        }
        else{
            navigate('/')
        }
    });                  
  }

  return (
    <div className='content'>
      <NavBar />
      <h1>Sign up</h1>
      {error_state ? <p>{error_state}</p> : undefined}
      <br></br>
      <form onSubmit={submitForm}>
        <input  type='email'
                placeholder='Email'  
                value={formData_state.email}
                onChange={(e) => setFormData({...formData_state, email: e.target.value})}/>
        <br/>
        <input  type='password' 
                placeholder='Password' 
                value={formData_state.password} 
                onChange={(e) => setFormData({...formData_state, password: e.target.value})}
                />
        <button>Create Account</button>
      </form>
    </div>
  )

}