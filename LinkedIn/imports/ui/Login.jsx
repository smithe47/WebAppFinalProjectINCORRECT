import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export const Login = () => {
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
  
      Meteor.loginWithPassword({email: formData_state.email}, formData_state.password, (errorCallbackObject) => {
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
            <NavBar/>
            <h1>Login</h1>
            {error_state ? <p>{error_state}</p> : undefined}
            <br/>
            <form onSubmit={submitForm}>
                <input type ='email'
                       placeholder='Email'
                       value={formData_state.email}
                       onChange={(e) => setFormData({...formData_state, email: e.target.value})}
                />
                <br/>
                <input type ='password'
                       placeholder='Password'
                       value={formData_state.password}
                       onChange={(e) => setFormData({...formData_state, password: e.target.value})}
                />
                <button>Login</button>
            </form>
        </div>

    )
}